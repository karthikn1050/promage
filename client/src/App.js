import React, {useState, useEffect} from 'react';
import './App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import {getMultipleFiles} from './data/api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const [multipleFiles, setMultipleFiles] = useState([]);

 
  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    getMultipleFilesList();
  }, []);
  return (
    <>
        <div className="container">
       
       </div> 
       <div className="container-fluid mt-5">
         <div className="row">
           
           <div className="col-6">
             
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
           <div className="col-6">
          
             <FileUploadScreen  getMultiple={() => getMultipleFilesList()}/>
           </div>
         </div>
       </div>
    </>
  );
}

export default App;
