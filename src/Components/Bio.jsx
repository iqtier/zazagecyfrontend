import React, {useEffect, useState} from 'react'
import { urlFor,client } from '../client'


const Bio = () => {
  
  const [bio, setBio] = useState([])
  
  useEffect(() => {
    const query = '*[_type == "bio"]';
    client.fetch(query).then((data) => {
      setBio(data)
      
    });
 
  }, []);
  return (
    <div id ="about">
      {bio.map((b) =>(
        <div className="about">

          <div className="about-image-div">
            <img className="about-image" src={urlFor(b.imageurl)} alt="about"/>
          </div>
          <div className="about-text">
            <h1>About</h1>
            <h5>My Story</h5>
            <p>{b.bio}</p>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Bio