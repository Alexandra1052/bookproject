import React from "react"
import NavBar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"
function Header(){

    return (
<div className="holder">
        <header className="header">
            <NavBar />
            <div className="header content flex 
            flex-content text-center text-whie">
                <h2 className="header-title 
                text-capitalize">Find your book of choice</h2><br></br>
                <p className="header-text fs-18 fw-3">
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                   type specimen book.
                </p>
                <SearchForm/>
            </div>
        </header>
</div>
    )
}
export default Header