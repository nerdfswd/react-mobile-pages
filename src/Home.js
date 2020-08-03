import React from 'react';
import data from './data.json'
import icon from './mobile.jpg'
import Mobile from './Mobile'
import {Link} from 'react-router-dom'

let Home=()=>{
    let card_details= data.profile;
    console.log(card_details);

	return(
          <div className="row justify-content-center">
            { card_details.map((values,index)=>(
             	<section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
             	   <div className="card">
             	        <article className="card-body">
                            
                            <img src={icon} alt="mobile image" style={{ width:"25%", align:"center"}}/>
                            <h2 className="text-primary"> {values.details.name } </h2>
                            <h5 className="text-Light">{values.details.color } </h5>
                            <h5 className="text-Light">{values.details.storage } </h5>
                            <h5 className="text-Light">{values.details.battery } </h5>
                            <h5 className="text-danger">{values.details.price } </h5>
                            <Link to={{pathname:'/mobile', data:{id:index}}} className="btn btn-primary"> View</Link>
                        </article>

             	   </div>
             	</section>
            )
            )}
          </div>
		);

}

export default Home;