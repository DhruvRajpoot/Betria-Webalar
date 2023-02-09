import support from '../images/supportwhite.png'
const ContactFooter=()=>(
    <div style={{color:'white',fontFamily:'Nunito',width:'75%'}}>
        <p style={{ fontSize: '1.2rem',letterSpacing:'.5px',fontFamily:'Poppins',fontWeight:"500",textShadow:'.5px 0 white'}}>Contacts</p>
        <div className="row pt-2">
            <div className="col-3"><img src={support} alt="" /></div>
            <div className="col-9">
                <p className='mb-0' style={{fontSize:'.9rem'}}>Have questions?</p>
                <a href="tel:+44 141 552 3000" style={{fontFamily:'Poppins',color:'white',textDecoration:'none',fontSize:"1.3rem",fontWeight:"700",letterSpacing:'1px',textShadow:".5px 0 white"}}>+44 141 552 3000</a>
                </div>
        </div>
        <br />
        <p style={{fontSize:'1.1rem'}}>Address: 2 St Gabriel Walk, London SE1 6FG, United Kingdom</p>
        <p style={{fontSize:'1.1rem'}}>Email: <a href="mailto:info@betria.com" className='text-white text-decoration-none'>info@betria.com</a></p>
    </div>
);
export default ContactFooter;