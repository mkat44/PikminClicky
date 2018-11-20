import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="card-img">
            <img alt={props.name} src={window.location.origin + props.image} clicked={props.isClicked} onClick={() => props.selectPikmin(props.id)} className="img-thumbnail img-fluid img-rounded img" />
        </div>
    </div>
)

export default ImageCard;