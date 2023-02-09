const SectionBelowSkills = () => (
    <div className={`d-flex justify-content-between align-items-center ${window.screen.width < 992 ? 'flex-column' : ''}`} style={{ background: 'linear-gradient(180deg, rgba(104, 82, 237,.1) 0%, rgba(186, 67, 252,.1) 100%)', minHeight: "10vw", padding: "2.5rem calc(15vw - 2rem)" }}>
        <p style={{ fontSize: 'calc(1rem + .5vw)', color: '#554D89', fontFamily: 'Poppins', fontWeight: "700", marginBottom: 'calc(1rem - 1vw)', textShadow: '.5px 0 #554D89' }}>Build your successful business with us. Want to know how to do this?</p>
        <button className='btn shadow-none navBtn' style={{ fontSize: '1rem', padding: '.5rem 1.5rem' }}>Contact us</button>
    </div>
);
export default SectionBelowSkills;