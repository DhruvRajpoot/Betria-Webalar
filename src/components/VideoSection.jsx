import videobtn from '../images/videobtn.png'
import videobg from '../images/videobg.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const bgimage = `url(${videobg})`;
const bgcolor = 'linear-gradient(180deg, rgba(104, 82, 237,.1) 0%, rgba(186, 67, 252,.1) 100%)'
const VideoSection = () => (
    <div className='d-flex justify-content-center align-items-center' style={{ background: `${window.screen.width > 992 ? bgimage : bgcolor}`, minHeight: "calc(23rem + 7vw)", padding: '0 1rem' }}>
        <div style={{ textAlign: 'center' }}>
            <LazyLoadImage effect='blur' src={videobtn} alt="" />
            <p style={{ fontSize: '1.6rem', color: '#554D89', fontFamily: 'Poppins', fontWeight: "700", textShadow: '1.5px 0 #554D89', letterSpacing: "2px", margin: '1.5rem 0' }}>How it works</p>
            <p style={{ fontSize: '1.1rem', color: '#5B5766', fontFamily: 'Nunito' }}>This app does everything you could want it to do it {window.screen.width > 992 && <br />} is beautifully and extremely intuitive to use.</p>
        </div>
    </div>
);
export default VideoSection;