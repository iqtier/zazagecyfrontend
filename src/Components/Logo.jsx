import {useEffect, useState} from 'react'
import { urlFor,client } from '../client'
import {CiLocationOn} from 'react-icons/ci';
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Logo = () => {

  const [brand, setBrand] = useState([])
 

  useEffect(() => {
    const query = '*[_type == "brand"]';
    client.fetch(query).then((data) => {
      setBrand(data)
      
    });
 
  }, []);

  return (
    <div>

    

      {brand.map((br,index )=>(
      <>
      <Navbar bg="dark" variant="dark" expand="lg"  >
        <Container claName="barnd-container" >
          <Navbar.Brand href="#home" className="brand-logo">
            <img
              alt=""
              src={urlFor(br.logo)}
              width="100"
              height="100"
              className="d-inline-block align-center"
            />{' '}
            {br.name}
          </Navbar.Brand>
          <div className="brand-address">
            <p><CiLocationOn/> 53 Ollerton green, Bow, London. E3 2LB</p>
            <p><AiOutlineMail/> zazagencyadmission@gmail.com</p>
            <p><BsTelephone/> +4407894891394  </p>
            
          </div>
        </Container>
      </Navbar>
      </>
        

        
      ))}
    </div>
  )
}

export default Logo