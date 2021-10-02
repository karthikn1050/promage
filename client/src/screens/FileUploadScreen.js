import React, {useState} from 'react';
import { multipleFilesUpload} from '../data/api';

const FileUploadScreen = (props) => {

    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] =  useState('');

    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData);
        props.getMultiple();
    }
    return (
        <div className="row mt-3">

            <div className="col">
                   <div className="row">
                       <div className="col-6">
                            <label >Title</label>
                            <input type="text" onChange={(e) => setTitle(e.target.value) } placeholder="enter name" className="form-control"/>
                       </div>
                       <div className="col-6">
                        <div className="form-group">
                            <label>Select Files</label>
                            <input type="file" accept="image/*" directory="" webkitdirectory=""  onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
                        </div>
                       </div>
                   </div>                   
                    <div className="row">
                        <div className="col-10">
                            <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Push</button>
                        </div>
                        <div className="col-2">
                      
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default FileUploadScreen;