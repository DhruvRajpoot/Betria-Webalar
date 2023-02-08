const rating = [
    {
        title: 'Branding',
        percentage: '96'
    },
    {
        title: 'Design & Development',
        percentage: '81'
    },
    {
        title: 'PR & Marketing',
        percentage: '90'
    },
    {
        title: 'PR & Marketing',
        percentage: '88'
    }
]

const OurSkills = () => (
    <div className="row fontPoppins" style={{ paddingTop: '5vw' }}>
        <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
                <p style={{ fontSize: '2rem', color: '#554D89', fontWeight: "bold", textShadow: '1.8px 0px #554D89', letterSpacing: '2px' }}>Our skills & expertise</p>
                <br />
                <p style={{ fontSize: "1.1rem", color: '#5B5766', fontFamily: "Nunito" }}>We help company set up business strategy including design brand identiy or product design service. So company can focus on their core business.  Morbi accumsan ipsum velit. Nam nec tellus.</p>
                <br />
                <div>
                    <button className='btn shadow-none' style={{ borderRadius: '40px', background: "linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", color: 'white', fontWeight: "400", padding: ".8rem 2rem", letterSpacing: '.3px' }}>We are in the press</button>
                </div>
            </div>
        </div>
        <div className="col-6" style={{ fontSize: '1.1rem', color: '#5B5766', fontFamily: 'Nunito' }}>
            {rating.map((ele, index) => {
                return <div key={index} style={{ paddingBottom: '2vw' }}>
                    <div className="d-flex justify-content-between mb-2" >
                        <span>{ele.title}</span>
                        <span>{ele.percentage}%</span>
                    </div>
                    <div class="progress" style={{ height: '.4rem' }}>
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${ele.percentage}%`, background: '#6852ED' }}></div>
                    </div>
                </div>
            })
            }
        </div>
    </div>
);
export default OurSkills;