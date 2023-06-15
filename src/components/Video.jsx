import React from "react"
import earth from "../assets/earth.mov"

function video() {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        zIndex: "-1",
      }}
    >
      <source src={earth} />
    </video>
  )
}

export default video
