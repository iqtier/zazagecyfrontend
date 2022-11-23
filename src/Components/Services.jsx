import React, {useEffect, useState} from 'react'
import { urlFor,client } from '../client'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const query = '*[_type == "service"]';
    client.fetch(query).then((data) => {
      setServices(data)
      
    });
 
  }, []);
  return (
    <div className="services">
      <div className="service-header">
        <h1>Services</h1>
        <p>Your Stratagic Partner</p>
      </div>
      {services.map((service) =>(
        <div className="service">
          <div className="service-text">
            <h1 className="head-text">{service.title}</h1>
            <p className="p-text">{service.description}</p>

          </div>
          <div className="service-img">
            <img className="service-img" src= {urlFor(service.imageurl)}/>
          </div>

        </div>
      ))}
      

    </div>
  )
}

export default Services