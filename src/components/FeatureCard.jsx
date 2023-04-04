import { LazyLoadImage } from "react-lazy-load-image-component";

const FeatureCard = (props) => (
    <div style={{ boxShadow: "0 0 20px 0 #E1E4ED", borderRadius: '10px', padding: '2rem' }}>
        <LazyLoadImage effect="blur" src={props.logo} alt="" style={{ maxWidth: "2rem", marginBottom: '2rem' }} />
        <p style={{ fontFamily: "Poppins", fontWeight: '700', fontSize: "1.3rem", color: "#554D89", textShadow: '1.3px 0 #554D89', letterSpacing: "1px" }}>{props.heading}</p>
        <p style={{ fontFamily: "Nunito", fontSize: "1.1rem", color: '#716C80', wordBreak: 'break-word', margin: "1.5rem 0 0 0" }}>{props.message}</p>
    </div>
);
export default FeatureCard;