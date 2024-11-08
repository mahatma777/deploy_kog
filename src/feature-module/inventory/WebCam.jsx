import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
};

  //webcam capture



// const [img, setImg] = useState(null);


// const showImage = () => {
//     setImg(webCamRef.current.getScreenshot());
// }

const WebCam = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
  
    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


        // const [imgs,setImgs] =useState()
   
        // const handleChnage=(e)=>{
        //     console.log(e.target.files)
        //     const data = new FileReader()
        //     data.addEventListener('load',()=>{
        //         setImgs(data.result)
        //     })
        //     data.readAsDataURL(e.target.files[0])
        // }

        const handleFile = (e)=>{
          setImage(e.target.files[0])
        }
      const handleUpload = ()=>{
        const formdata = new FormData();
        formdata.append('image', image);
        axios.post('http://localhost:8082/uploadimg/', formdata).then(res =>console.log(res)).
        catch(err => console.log(err))
      }
  
  return (
    <div>
        
    <form >

<div className="modal fade" id="add-image-modal">
<div className="modal-dialog modal-dialog-centered custom-modal-two modal-md">
<div className="modal-content">
<div className="page-wrapper-new p-0">
  <div className="content">
    <div className="modal-header border-0 custom-modal-header">
      <div className="page-title">
        <h4>CAPTURE IMAGE MODAL FORM</h4>
      </div>
      <button
        type="button"
        className="close"
        data-bs-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div className="modal-body custom-modal-body">
   
    <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
                <input  value={`data:image/jpeg,${image}`} onChange={handleFile}/>
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>

  
      <div className="modal-footer-btn">
        <Link
          to="#"
          className="btn btn-cancel me-2"
          data-bs-dismiss="modal"
        >
          Cancel
        </Link>
        <button type="button" onClick={handleUpload} className="btn btn-submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</form>
</div>
  )
}

export default WebCam

