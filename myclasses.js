import Navbar from "../component/navbar.js"
import {Link} from "react-router-dom"
import img from "../img/Home.svg"

function Home() {
    return(
        <>
        <Navbar></Navbar>
        <div className="Gambar">
            <img src = {img}></img>
        </div>
        <p className="myclasses">
            My Classes:
        </p>
        
        <p className="webdev">
            <p className= "wd"> Web Development
            </p>
        </p>
        <p className="start1">
        <p className= "st"> Start
            </p>
        </p>

        <p className="uiuix">
            <p className= "ui"> UI/UX
            </p>
        </p>
        <p className="start2">
        <p className= "sta"> Start
            </p>
        </p>

        </>
        

    )
}

export default Home