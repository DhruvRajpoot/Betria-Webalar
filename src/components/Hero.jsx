import React from 'react'
import heroImage from '../images/heroImage1.svg'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => (
  <div className="row fontPoppins">
    <div className="col-lg-6 h-100">
      <div className='translateHero' style={{padding:'calc(3rem - 3vw) calc(1rem - 1vw) '}}>
        <p style={{ fontSize: 'calc(2.5rem + .5vw)', color: '#554D89', fontWeight: "bold", lineHeight: '3.8rem', textShadow: '2.5px 0px #554D89', letterSpacing: '2px' }}>Realize your full potential</p>
        <br />
        <p style={{ fontSize: "1.4rem", color: '#5B5766', fontFamily: "Nunito" }}>We help our clients make realize {window.screen.width>992 && <br />} their most important business goals.</p>
        <br />
        <div>
          <button className='btn shadow-none' style={{ borderRadius: '40px', background: "linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", color: 'white', fontWeight: "400", padding: ".8rem 2rem" }}>Contact us</button>
          <button className='btn shadow-none' style={{ color: "#554D89", marginLeft: '1rem' }}>Order similar &nbsp;<BsArrowRight /></button>
        </div>
      </div>
    </div>
    <div className="col-lg-6 d-flex justify-content-end heroimage">
      <img src={heroImage} alt="" className='w-100' />
    </div>
  </div>
)
export default Hero;