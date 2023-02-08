import { BsArrowRight } from 'react-icons/bs'

const DetailsComponent = (props) => (
  <div className="row fontPoppins">
    <div className={`col-6 d-flex justify-content-center align-items-center ${props.data.order==='2'?'order-2':''}`}>
      <div style={{ width: "85%" }}>
        <p style={{ fontSize: '1.6rem', color: '#554D89', fontWeight: "bold", textShadow: '1.8px 0px #554D89', letterSpacing: '2px',width:"92%" }}>{props.data.heading}</p>
        <br />
        <p style={{ fontSize: "1.1rem", color: '#5B5766', fontFamily: "Nunito" }}>{props.data.para}</p>
        <br />
        <div>
          <button className='btn shadow-none' style={{ borderRadius: '40px', background: "linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", color: 'white', fontWeight: "400", padding: ".8rem 2rem" }}>{props.data.btn}</button>
          <button className='btn shadow-none' style={{ color: "#554D89", marginLeft: '1rem' }}>{props.data.iconmsg} &nbsp; <BsArrowRight/></button>
        </div>
      </div>
    </div>
    <div className="col-6">
      <img src={props.data.image} alt="" className='w-100'/>
    </div>
  </div>
)
export default DetailsComponent;