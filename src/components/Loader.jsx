import React from 'react'
import {Html, useProgress} from '@react-three/drei'

const Loader = () => {

    const {progress} = useProgress()

    return (
      <Html
          as='div'
          center
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
      >
        <span className={'canvas-load'}>

        </span>
        <p
            style={{
                fontWeight:800,
                color:'#f1f1f1',
                fontSize:14,
            }}
        >{progress.toFixed(2)}%</p>
      </Html>
  )
}

export default Loader