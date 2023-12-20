import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-dark text-light'>
        <div className="footer d-flex align-items-center justify-content-evenly w-100">
        <div className="website"style={{width:'400px'}}>
            <h4 style={{overflowY:'hidden'}}> <i class="fa-solid fa-cart-shopping"></i> {' '}
     E-Cart</h4>
     <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, eum est. Ipsa, fuga, aut quia, ullam libero temporibus delectus reprehenderit sint repudiandae soluta omnis odio animi ratione quasi. Id, tempora.</h6>
        </div>
        <div className="link d-flex flex-column">
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
            <Link to={'/cart'}style={{textDecoration:'none',color:'white'}}>Cart</Link>
            <Link to={'/wishlist'}style={{textDecoration:'none',color:'white'}}>WishList</Link>
        </div>
        <div className="guides d-flex flex-column">
            <h4 style={{overflowY:'hidden'}}>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contact ">
            <h4 style={{overflowY:'hidden'}}>Contact Us</h4>
            <div className='d-flex mb-3'>
                <input type="text" className='form-control me-3 ' placeholder='Enter your Email ID'/>
                <button  className='btn btn-success text-white pe-4'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly'>
           <Link to={'https://instagram.com/albuuuuu_on?igshid=MTM2OG1pNGZzeTl1Ng=='}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
           <Link to={'https://www.facebook.com/profile.php?id=100076331562917&mibextid=ZbWKwL'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
           <Link to={'www.linkedin.com/in/muhammed-shameer-t-34884b268'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x "></i></Link>
           <Link to={'https://www.facebook.com/profile.php?id=100076331562917&mibextid=ZbWKwL'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x "></i></Link>

            </div>
        </div>
        </div>
        <p className='mt-5'>Copyright @ 2023 Media Player.Built with React</p>
    </div>
  )
}

export default Footer