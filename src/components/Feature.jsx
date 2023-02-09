import FeatureCard from "./FeatureCard";
import dollarinvoice from '../images/dollar-invoice.png'
import dollarcircle from '../images/dollar-circle.png'
import MarketAnalysisCard from "./MarketAnalysisCard";

const Feature = () => (
    <div className="row" style={{ margin: '4rem 0' }}>
        <div className="col-lg-4 mb-4"><FeatureCard logo={dollarcircle} heading={'Corporate finance'} message={'Leverage agile frameworks to provide a robust synopsis'} /></div>
        <div className="col-lg-4 mb-4"><FeatureCard logo={dollarinvoice} heading={'Audit & Evaluation'} message={'Bring to the table win-win survival strategies to ensure proactive'} /></div>
        <div className="col-lg-4 mb-4"><MarketAnalysisCard/></div>
    </div>
)
export default Feature;