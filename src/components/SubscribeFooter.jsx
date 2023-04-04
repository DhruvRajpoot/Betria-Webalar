import { LazyLoadImage } from 'react-lazy-load-image-component';
import input from '../images/subscribeinput.png'
const SubscribeFooter = () => (
    <div style={{ fontFamily: 'Nunito' }}>
        <p style={{ fontSize: '1.3rem', color: "#554D89", textShadow: '1.5px 0 #554D89', letterSpacing: '1px', fontFamily: 'Poppins' }}>Subscribe</p>
        <div className="position-relative" style={{ margin: '2rem 0' }}>
            <input type="text" style={{ width: "100%", borderRadius: '40px', padding: '.7rem 1.5rem', border: '1px solid #6852ED', fontSize: "1.1rem" }} placeholder='Enter your email' />
            <span style={{ position: "absolute", right: '1.5rem', top: ".7rem" }}><LazyLoadImage effect='blur' src={input} alt='' /></span>
        </div>
        <p style={{ fontFamily: "Nunito", color: "#716C80", fontSize: "1.1rem" }}>Keep up to date with all new themes and updates.</p>
    </div>
);
export default SubscribeFooter;