import yes from '../images/yes.png'
import no from '../images/no.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const PriceComponent = (props) => (
    <div style={{ fontFamily: 'Poppins', padding: 'calc(2rem + 2vw)', borderRadius: "10px", boxShadow: "0px 0px 20px #E1E4ED", marginBottom: "2rem" }}>
        <div className="d-flex justify-content-between">
            <h5 style={{ color: '#554D89', textShadow: "1.5px 0 #554D89", fontWeight: "700", letterSpacing: '1px' }}>{props.data.name}</h5>
            {props.data.name === 'Basic' && <button className="btn fw-bold" style={{ color: "#EF7171", fontSize: ".6rem", background: "rgba(225, 228, 237, 0.6)", borderRadius: '20px', textShadow: '.5px 0 #EF7171' }}>BEST CHOICE</button>}
        </div>
        <hr style={{ width: "3rem", height: "2px", color: 'rgb(174 0 238)' }} />
        <h1 style={{ color: '#554D89', fontSize: '3rem', textShadow: "2.7px 0 #554D89", fontWeight: "700", letterSpacing: "3px" }}>{props.data.price}$</h1>
        <p style={{ color: '#5B5766', paddingBottom: '2.5rem' }}>Per month</p>
        <ul style={{ color: '#716C80', fontFamily: "Nunito", fontSize: '1.1rem', listStyle: 'none', padding: '0' }}>
            <li className='pb-2'><LazyLoadImage effect='blur' src={yes} alt="" /> Free updates</li>
            <li className='pb-2'><LazyLoadImage effect='blur' src={yes} alt="" /> Custom Domain</li>
            <li className='pb-2'><LazyLoadImage effect='blur' src={yes} alt="" /> Outstanding support</li>
            <li className='pb-2'><LazyLoadImage effect='blur' src={props.data.fourth === 'y' ? yes : no} alt="" /><span style={{ opacity: `${props.data.fourth === 'y' ? '' : '.8'}`, marginLeft: `${props.data.fourth === 'y' ? '.3rem' : '.7rem'}` }}>Unlimited Storage </span></li>
            <li className='pb-2'><LazyLoadImage effect='blur' src={props.data.fifth === 'y' ? yes : no} alt="" /><span style={{ opacity: `${props.data.fifth === 'y' ? '' : '.8'}`, marginLeft: `${props.data.fifth === 'y' ? '.3rem' : '.7rem'}` }}>Build Responsive website </span></li>
        </ul>
        <br />
        <button className='btn shadow-none' style={{ borderRadius: '40px', background: "linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", color: 'white', fontWeight: "400", padding: ".8rem 2rem", letterSpacing: '.3px' }}>Getting started</button>
    </div>
);
export default PriceComponent;