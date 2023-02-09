import ContactFooter from "./ContactFooter";
import LinksFooter from "./LinksFooter";
import SubscribeFooter from "./SubscribeFooter";
import '../App.css'

const Footer = () => (
    <div>
        <div className="row">
            <div className="col-lg-4">
                <ContactFooter />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
                <LinksFooter />
            </div>
            <div className="col-lg-3">
                <SubscribeFooter />
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <hr style={{ color: "rgb(78 49 252)", width: '6rem', height: "4px" }} />
        </div>
        <p className="text-center" style={{ color: '#716C80' }}>© Elipso 2019. Landing Page Template by merkulove</p>
    </div>
);
export default Footer;