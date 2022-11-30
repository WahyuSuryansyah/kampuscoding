import Navbar from "../component/navbar.js"
import "./course.css"
import {Link} from "react-router-dom"
import React from "react"

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
            UI/UX
        </p>
        <p className="level">
            Level: Pemula
        </p>
        <p className="jam">
            35 Jam Belajar
        </p>
        <p className="belajar">
            Belajar Mendesign UI/UX dengan Figma
        </p>
        <p className="Penjelasan">
            "Buat portofolio design UI/UX mu! Kelas ini akan melatih kamu merancang UI/UX dari dasar melalui figma."
        </p>
        <p className="enroll">
            <Link to="/myclasses" className="enr">enroll</Link>
        </p>

        <div className="panahkiri">
            <img src = {img}></img>
        </div>
        <p>
            <Link to="/mycourse" className="kiri"> </Link>
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