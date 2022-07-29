import React from 'react'
import "./navbar.css"
const NavBar = () => {
    return (
        <>
            <nav>
                <div id="navBar">
                    <div class="middle">
                        <div class="deals center">
                            <a class="middle-icon" href="#"><i class="fas fa-sliders-h mid-icon"></i></a>
                            <a href="deals.html" target="_top">
                                <h4 class="mid-heading">DEALS</h4>
                            </a>
                        </div>
                        <div class="client center">
                            <a class="middle-icon" href="#"><i class="far fa-user mid-icon"></i></a>
                            <a href="index.html" target="_top">
                                <h4 class="mid-heading">CLIENTS</h4>
                            </a>
                        </div>

                        <div class="addButton">
                            <a href="#"><i class="fas fa-plus"></i></a>
                        </div>
                    </div>
                    <div class="left">
                        <div class="admin-info">
                            <div class="person-img">
                                <img src="avatar.png" alt="" />
                            </div>
                            <div class="info">
                                <h5>Shashank Verma</h5>
                                <p>Assert IT</p>
                            </div>
                            <a href="#"><i class="fas fa-trophy trophy-icon"></i></a>
                        </div>
                        <div class="setting">
                            <a href="#"><i class="uil uil-setting"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar