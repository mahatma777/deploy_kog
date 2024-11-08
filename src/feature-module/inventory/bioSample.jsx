import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CaptureFinger } from '../../mfs100'

const bioSample = () => {
const [fingerimage, setFingerimge] = useState('');
    const Capturefinterhere = ()=>{
        const fingerdata = new CaptureFinger();
        setFingerimge(fingerdata.data.BitmapData);
        console.log("finger data", fingerdata);

    }
  return (
    <div>
        <button onClick={Capturefinterhere}>Capture Finger </button>
        <div> <img src={`data:image/png;base64,${fingerimage} `}/></div>
    </div>
  )
}

export default bioSample

// const styles = StyleSheet.create({})