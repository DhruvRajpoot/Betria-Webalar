const LinksFooter = () => (

    <div style={{fontFamily:"Nunito"}}>
        <p style={{ fontSize: '1.3rem', color: "#554D89", textShadow: '1.5px 0 #554D89', letterSpacing: '1px', fontFamily: 'Poppins' }}>Links</p>
        <div className="row">
            <div className="col-lg-6">
                <ul style={{ listStyleType: 'none', color: "#554D89", padding: '0', fontSize: '1.1rem'}}>
                    <li style={{ paddingBottom: '.5rem' }}>About company</li>
                    <li style={{ paddingBottom: '.5rem' }}>Our services</li>
                    <li style={{ paddingBottom: '.5rem' }}>Team members</li>
                    <li style={{ paddingBottom: '.5rem' }}>Portfolio</li>
                </ul>
            </div>
            <div className="col-lg-6">
                <ul style={{ listStyleType: 'none', color: "#554D89", padding: '0', fontSize: '1.1rem'}}>
                    <li style={{ paddingBottom: '.5rem' }}>Pricing plans</li>
                    <li style={{ paddingBottom: '.5rem' }}>Testimonials</li>
                    <li style={{ paddingBottom: '.5rem' }}>Contact</li>
                </ul>
            </div>
        </div>
    </div>
);
export default LinksFooter;