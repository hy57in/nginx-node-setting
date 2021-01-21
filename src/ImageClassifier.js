
import React from 'react';
import Webcam from 'react-webcam';
//import webmToMp4 from 'webm-to-mp4';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';


const ImageClassifier = () => {
  let net;
  const camera = React.useRef();
  const figures = React.useRef();
  const webcamElement = camera.current;
  //mediaRecorder : recorder
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  
  let name;

  //capturing img 
  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    setTimeout(() => {
      
      handleStopCaptureClick();
    }, 3000);
    
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  //webm to mp4
  //https://stackoverflow.com/questions/48022490/convert-webm-as-mp4-on-the-fly
  
  //handle file input
  /*
  let selectedFile = null;

  handleFileInput(e){
    this.setState({
      selectedFile : e.target.files[0],
    })
  }

  handlePost(){
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);

    return axios.post("/api/upload", formData).then(res => {
      alert('성공')
    }).catch(err => {
      alert('실패')
    })
  }
*/

  //tensorflow js use
  const run = async () => {
    net = await mobilenet.load();

    const webcam = await tf.data.webcam(webcamElement, {
      resizeWidth: 220,
      resizeHeight: 227,
    });
    while (true) {
      const img = await webcam.capture();
      const result = await net.classify(img);

      if (figures.current) {
        figures.current.innerText = `prediction : ${result[0].className} \n probability: ${result[0].probability}`;
        name = result[0].className;
      }

      img.dispose();

      await tf.nextFrame();
    }
  };
  
React.useEffect(()=> {
  run();
});

  return (
    <div>
{/*      <Webcam audio={false} ref={webcamRef} />
        {capturing ? (
          <button classname = 'button-stop' onClick={handleStopCaptureClick}>Stop Capture
          </button>
        ) : (
          <button classname = 'button-start' onClick={handleStartCaptureClick}>Start Capture
          
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download(send)
          {console.log('3 ' + name)}</button>
        )}*/}
      <div ref={figures}></div>
    </div>
  );
};

export default ImageClassifier;
