import React from "react"
import pin from "/assets/pin.svg"
import data from '../../data.js'

function Card(props) {
    return ( 
    <>
    <div className="main-container">
        <img src={`/assets/${props.img}`} className="photo" alt="Tourist spot"/>
        <div className="right-container">
            <div className="top-container">
                <img src={pin}/>
                <p className="country">{props.country}</p>
                <a className="maps" href={props.link} target = "_blank">View on Google Maps</a>
            </div>
            <div className="bottom-container">
                <h3 className="title">{props.title}</h3>
                <h4 className="date">{props.date}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
    {props.index !== (data.length - 1) && <hr />}
    </>
    )
}

export default Card