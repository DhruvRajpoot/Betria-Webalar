import FeatureCard from "./FeatureCard";
import dollarinvoice from '../images/dollar-invoice.png'
import dollarcircle from '../images/dollar-circle.png'
import dollarhandholding from '../images/dollar-hand-holding.png'
import MarketAnalysisCard from "./MarketAnalysisCard";

const AllServices = () => (
    <div className="row" style={{margin:'5vw 0'}}>
        <div className="col-md-4">
            <FeatureCard logo={dollarcircle} heading={'Corporate finance'} message={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed …'} />
            <br />
            <MarketAnalysisCard />
        </div>
        <div className="col-md-4" style={{ transform: 'translateY(1rem)' }}>
            <FeatureCard logo={dollarinvoice} heading={'Audit & Evaluation'} message={'Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. …'} />
            <br />
            <FeatureCard logo={dollarhandholding} heading={'Sales & Trade'} message={'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi …'} />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center" style={{transform:'translateX(2vw)'}}>
            <div>
                <p style={{ fontSize: '2.1rem', color: '#554D89', fontFamily:"Poppins", fontWeight: "bold", textShadow: '2px 0px #554D89', letterSpacing: '1.5px'}}>Get a solutions to your businesses</p>
                <br />
                <p style={{ fontSize: "1.1rem", color: '#5B5766', fontFamily: "Nunito" }}>Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.</p>
                <br />
                <button className='btn shadow-none' style={{ fontFamily:'Poppins',borderRadius: '40px', background: "linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", color: 'white', fontWeight: "400", padding: ".8rem 2rem" }}>All services</button>
            </div>
        </div>
    </div>
);
export default AllServices;