import supportwhite from '../images/supportwhite.png'
import supportcolor from '../images/supportcolor.png'

const ContactFooter = () => (
    <div style={{ fontFamily: 'Nunito', width: '75%' }} className='contactfooter'>
        <p style={{ fontSize: '1.3rem', letterSpacing: '.5px', fontFamily: 'Poppins', fontWeight: "700", textShadow: '1px 0' }}>Contacts</p>
        <div className="row pt-2">
            <div className="col-3"><img src={`${(window.screen.width > 1400 && window.screen.width < 1700) ? supportwhite : supportcolor}`} alt="" /></div>
            <div className="col-9">
                <p className='mb-0' style={{ fontSize: '.9rem' }}>Have questions?</p>
                <a href="tel:+44 141 552 3000" className='linkcontactfooter' style={{ fontFamily: 'Poppins', fontSize: "1.3rem", fontWeight: "700", letterSpacing: '1px', textShadow: ".5px 0 white" }}>+44 141 552 3000</a>
            </div>
        </div>
        <br />
        <p style={{ fontSize: '1.1rem' }}>Address: 2 St Gabriel Walk, London SE1 6FG, United Kingdom</p>
        <p style={{ fontSize: '1.1rem' }}>Email: <a href="mailto:info@betria.com" className='linkcontactfooter'>info@betria.com</a></p>
    </div>
);
export default ContactFooter;