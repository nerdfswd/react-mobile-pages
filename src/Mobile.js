import React from 'react';
import data from './data.json';
import profileIcon from './mobile.jpg';


export default function Resume(props) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>console.log(data))

        let info=data.profile[props.location.data.id]
        //console.log(info.description)
    return (
         <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"30%", align:"center"}}/>
                        <h4 className="text-primary">{info.details.name}</h4>
                        <h5 className="text-Light">{info.details.color}</h5>
                        <h5 className="text-Light" >{info.details.storage}</h5>
                        <h5 className="text-Light">{info.details.battery}</h5>
                        <h5 className="text-danger">{info.details.price}</h5>
                   </div>
                </div>
            </div>

            {/* profile / right part */}

            <div className="col-lg-8 m-2">
                <div className="card shadow" >
                    <div className="card-body">
                        <h2>Description:</h2>
                        <hr />
                        <h2>Camera:</h2>
                        <hr />
                        <p>{info.camera}</p>
                        <h2>Size:</h2>
                        <hr />
                        <p>{info.Size}</p>
                        <hr />
                        <h2>OS:</h2>
                        <hr />
                        <p>{info.OS}</p>
                        <h2>Warrenty:</h2>
                        <hr />
                        <p>{info.Warrenty}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
