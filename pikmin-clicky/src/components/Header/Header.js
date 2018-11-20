import React from "react";
import "./Header.css";

const Header = props => (
    <div className="heading">
        <div className="row">
            <div className="col-lg-12">
                <h1>Pikmin Clicky Game</h1>
                <hr></hr>
                <h5><i className="fas fa-dot-circle"></i> Click on an image to earn points!<br></br>
                <i className="fas fa-dot-circle"></i> Click the same image twice and it's game over!</h5>
            </div>
        </div>
    </div>
);

export default Header;