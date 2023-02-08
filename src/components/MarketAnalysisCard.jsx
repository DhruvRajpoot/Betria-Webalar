import { BsArrowRight } from 'react-icons/bs'

const MarketAnalysisCard = () => (
    <div style={{ color: "white", borderRadius: '10px', padding: '2rem', background: 'linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)', boxShadow: " 0px 0px 20px rgba(104, 82, 237, 0.8)" }}>
        <p style={{ fontFamily: "Poppins", fontWeight: '700', fontSize: "1.3rem", textShadow: '.5px 0 white', letterSpacing: "1px" }}>Market analysis</p>
        <p style={{ fontFamily: "Nunito", fontSize: "1.1rem", wordBreak: 'break-word', margin: "1.5rem 0" }}>Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …</p>
        <button className='btn shadow-none text-light ps-0' style={{ fontFamily: "Poppins" }}>Read more <BsArrowRight /></button>
    </div>
);
export default MarketAnalysisCard;