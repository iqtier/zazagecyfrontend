import React from 'react'
import Button from 'react-bootstrap/Button';
import {Bio,Blogs, Contact, Footer,Header,Logo, NavBar, Services, Testimonials} from './Components'

const App = () => {
  return (
    <div>
        <Logo/>
        <NavBar/>
        <Header/>
        <Bio/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App