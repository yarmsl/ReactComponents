import React, { useState, useRef, useEffect } from 'react';
import './photoupload.css';

const Photoupload = () => {
    const fileInputRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('Добавьте или перетащите фото');

    useEffect(() => {
        let filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        setValidFiles([...filteredArr]);
    }, [selectedFiles]);


    const preventDefault = (e) => {
        e.preventDefault();
        // e.stopPropagation();
    }

    const dragOver = (e) => {
        preventDefault(e);

        setErrorMessage('Поместите ваши фото сюда');
    }

    const dragEnter = (e) => {
        preventDefault(e);

    }

    const dragLeave = (e) => {
        preventDefault(e);
        setErrorMessage('Добавьте или перетащите фото');
    }

    const even = (num) => {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    const fileDrop = (e) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                setErrorMessage('Добавьте или перетащите фото');
            } else {
                files[i]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                setErrorMessage('Попробуте другой формат, например jpg или png');
                setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        const index = validFiles.findIndex(e => e.name === name);
        const index2 = selectedFiles.findIndex(e => e.name === name);
        const index3 = unsupportedFiles.findIndex(e => e.name === name);
        validFiles.splice(index, 1);
        selectedFiles.splice(index2, 1);
        setValidFiles([...validFiles]);
        setSelectedFiles([...selectedFiles]);
        if (index3 !== -1) {
            unsupportedFiles.splice(index3, 1);
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }

    const preview = (file, n) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            let img = document.getElementById(`prev${n}`);
            img.src = e.target.result;
            if (!even(validFiles[n].angle / 90)) {
                img.style.transform = `rotate(${validFiles[n].angle}deg) scale(1.2)`;
            } else {
                img.style.transform = `rotate(${validFiles[n].angle}deg) scale(1)`;
            }
        }
    }

    const rotate = (n) => {
        let img = document.getElementById(`prev${n}`);
        if (!validFiles[n].angle) {
            validFiles[n].angle = 0;
        }
        validFiles[n].angle += 90;
        if (validFiles[n].angle > 360) {
            validFiles[n].angle = 0;
        }
        if (!even(validFiles[n].angle / 90)) {
            img.style.transform = `rotate(${validFiles[n].angle}deg) scale(1.2)`;
        } else {
            img.style.transform = `rotate(${validFiles[n].angle}deg) scale(1)`;
        }
        setValidFiles([...validFiles]);

    }

    const makeMain = (file, n) => {
        validFiles.splice(n, 1);
        setValidFiles([file, ...validFiles]);
    }

    return (
        <div className="getPhotoUpload">
            { validFiles.map((data, i) =>
                <div key={i} className="getPhotoCard" onChange={!data.invalid ? preview(data, i) : removeFile(data.name)}>
                    <img id={`prev${i}`} />
                    <div className="getPhotoRotate" onClick={() => rotate(i)}></div>
                    <div className="getPhotoDelete" onClick={() => removeFile(data.name)}></div>
                    {i === 0 && <div className="getPhotoMain">Главное фото</div>}
                    {i > 0 && <div className="getPhotoMakeMainWrapper" onClick={() => makeMain(data, i)}><div className="getPhotoMakeMain">Сделать главной</div></div>}
                </div>)
            }
            <div className="getPhotoCard"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                onClick={fileInputClicked}>
                <div className="getPhotoNotif">{errorMessage}</div>
                <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    multiple
                    onChange={filesSelected}
                />
            </div>
        </div>
    )
}
export default Photoupload;