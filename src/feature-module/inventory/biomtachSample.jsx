import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CaptureFinger } from '../../mfs100'

const bioSample = () => {
const [fingerimage, setFingerimge] = useState('');
const [fingerkey, setFingerkey] = useState('');
const [matchstatus, setmatchstatus] = useState(false);
const Capturefinterhere = ()=>{
    const fingerdata = new CaptureFinger();
    setFingerimge(fingerdata.data.BitmapData);
    setFingerkey(fingerdata.data.AnsiTemplate);
    console.log("finger data", fingerdata);

}
    const Matchfinterhere = ()=>{
        if(fingerkey !== "") {

        const matchdata = new MatchFinger(80, 5000, fingerkey);
        // setFingerimge(fingerdata.data.BitmapData);
        console.log("finger match", matchdata);

        if(matchdata?.Status ){
            setmatchstatus(true);
        }
        } else{
            alert('Please capute fingerpring');
        }
    }
  return (
    <div>
        <button onClick={Capturefinterhere()}>Capture Finger </button>
        <button onClick={Matchfinterhere()}>Match Finger </button>
        <div> <img src={`data:image/png;base64,${fingerimage} `}/>

       {matchstatus == true ? "Matct Successfully" : "processing"}
        
        
        </div>
    </div>
  )
}

export default bioSample

// const styles = StyleSheet.create({})