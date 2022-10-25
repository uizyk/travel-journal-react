import React from "react"    

export default function Card(props){
    
    return(
        <div>
            <div className="cardContainer">
            
                <img className="cardImg" src={props.item.imageUrl}/>
                
                <div className="textContainer">
                    <div className="locationLine">
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="location">{props.item.location}</span>
                        <a className="googleLink" href={props.item.googleMapsUrl}> 
                            View on Google Maps 
                        </a>
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>   
        </div>
    )
}