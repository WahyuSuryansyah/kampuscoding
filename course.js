import Navbar from "../component/navbar.js"
import "./course.css"
import {Link} from "react-router-dom"
import React from "react"
import img from "../img/Panah Geser.svg"

function course() {
    return(
        <>
        <Navbar></Navbar>
        <div className="panahatas">
            <img src = {img}></img>
        </div>
        <p>
            <Link to="/Testimonial" className="atas"> </Link>
        </p>
        <p className="testi">
            Testimonial
        </p>

        <p className="Webdev">
            Web Developement
        </p>
        <p className="level">
            Level: Pemula
        </p>
        <p className="jam">
            70 Jam Belajar
        </p>
        <p className="belajar">
            Belajar Dasar-Dasar Front-End Website
        </p>
        <p className="Penjelasan">
            "Di kelas ini kamu akan belajar  membuat website pertamamu. Kamu akan mempelajari HTML, CSS, Javascript, hingga Sass."
        </p>
        <p className="enroll">
            <Link to="/myclasses" className="enr">enroll</Link>
        </p>

        <div className="panahkanan">
            <img src = {img}></img>
        </div>
        <p>
            <Link to="/mycourse2" className="kanan"> </Link>
        </p>

        <div className="panahbawah">
            <img src = {img}></img>
        </div>
        <p>
            <Link to="/FAQ" className="bawah"> </Link>
        </p>
        <p className="FAQ">
            FAQ
        </p>
        </>
    )
}
