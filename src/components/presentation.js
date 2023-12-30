import React, { useState } from "react"
import Images from "./images"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import "./index.css"

const Presentation = () => {
  const [hello, setHello] = useState("Hello.")

  const [iAm, setIAm] = useState("My name is")
  const [name, setName] = useState("Heriberto")

  const nameTransform = () => {
    setName("Contact")
  }
  const iAmTransform = () => {
    setIAm("Work")
  }

  const helloTransform = () => {
    setHello("About me")
  }

  const originalTitle = () => {
    setHello("Hello.")
  }
  const originalIAm = () => {
    setIAm("I am")
  }
  const originalName = () => {
    setName("Heriberto!")
  }

  return (
    <div className="bg-black1 grid-two">
      <div className="py-2 ml-12">
        <div className="transition1 py-6 md:py-12 pb font-bold ">
          <Link
            className="title text-white"
            to="about-me"
            onMouseOver={helloTransform}
            onFocus={() => {
              return
            }}
            onMouseOut={originalTitle}
            onBlur={() => {
              return
            }}
          >
            <Fade left>{hello}</Fade>
          </Link>
        </div>

        <br />
        <div className="transition1 py-6 md:py-12  font-bold">
          <Link
            className="title text-red-600"
            to="work"
            onMouseOver={iAmTransform}
            onFocus={() => {
              return
            }}
            onMouseOut={originalIAm}
            onBlur={() => {
              return
            }}
          >
            <Fade left>{iAm}</Fade>
          </Link>
        </div>

        <br />
        <div className="transition1 py-6 md:py-10 font-bold">
          <Link
            className="title text-red-600"
            to="contact"
            onMouseOver={nameTransform}
            onFocus={() => {
              return
            }}
            onMouseOut={originalName}
            onBlur={() => {
              return
            }}
          >
            <Fade left>{name}</Fade>
          </Link>
        </div>

        <br />
        <span className="maquina-escribir">I'm web Developer! .</span>
      </div>
      <Fade rigth>
        <Images fileName="perfil.png" alt="perfil" />
      </Fade>
    </div>
  )
}

export default Presentation
