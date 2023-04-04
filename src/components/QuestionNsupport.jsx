import { BsArrowRight } from 'react-icons/bs'
import question from '../images/question.png'
import support from '../images/support.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const QuestionNsupport = () => (
    <div className="row" style={{ fontFamily: 'Poppins', padding: '6vw 0 0 0' }}>
        <div className="col-lg-6 row mt-4">
            <div className="col-2" style={{ maxWidth: "4rem" }}><img src={question} alt="" /></div>
            <div className="col-10">
                <p style={{ fontSize: '1.3rem', color: "#554D89", textShadow: '1.3px 0 #554D89' }}>View common questions</p>
                <p style={{ fontFamily: "Nunito", color: "#716C80", fontSize: "1.1rem" }}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                <button className='btn shadow-none ps-0' style={{ color: '#554D89' }}>Read more <BsArrowRight /></button>
            </div>
        </div>
        <div className="col-lg-6 row mt-4">
            <div className="col-2" style={{ maxWidth: "4rem" }}><img src={support} alt="" /></div>
            <div className="col-10">
                <p style={{ fontSize: '1.3rem', color: "#554D89", textShadow: '1.3px 0 #554D89' }}>Looking for support?</p>
                <p style={{ fontFamily: "Nunito", color: "#716C80", fontSize: "1.1rem" }}>On the other hand, we denounce with righteous dislike so men who are beguiled indignation and  they foresee.</p>
                <button className='btn shadow-none ps-0' style={{ color: '#554D89' }}>Read more <BsArrowRight /></button>
            </div>
        </div>
    </div>
);
export default QuestionNsupport;