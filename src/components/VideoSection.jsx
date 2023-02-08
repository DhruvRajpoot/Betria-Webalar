import videobtn from '../images/videobtn.png'

const VideoSection = () => (
    <div className='d-flex justify-content-center align-items-center' style={{ background: 'linear-gradient(180deg, rgba(104, 82, 237,.1) 0%, rgba(186, 67, 252,.1) 100%)', minHeight: "30vw" }}>
        <div style={{ textAlign: 'center' }}>
            <img src={videobtn} alt="" />
            <p style={{ fontSize: '1.6rem', color: '#554D89', fontFamily: 'Poppins', fontWeight: "700", textShadow: '1.5px 0 #554D89', letterSpacing: "2px", margin: '1.5rem 0' }}>How it works</p>
            <p style={{ fontSize: '1.1rem', color: '#5B5766', fontFamily: 'Nunito' }}>This app does everything you could want it to do it <br /> is beautifully and extremely intuitive to use.</p>
        </div>
    </div>
);
export default VideoSection;