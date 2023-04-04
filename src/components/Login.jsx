import Carousel from './Carousel'
import login from '../images/login1.svg'
import login2 from '../images/login1.svg'
import login3 from '../images/login1.svg'

const images = [
    {
        image: login,
        caption: 'hello',
        para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, labore!'
    },
    {
        image: login2,
        caption: 'hello',
        para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, labore!'
    },
    {
        image: login3,
        caption: 'hello',
        para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, labore!'
    }
]
const Login = () => (
    <>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div style={{ width: '80vw', height: '80vh', borderRadius: '15px' }}>
                <div className="row m-0">
                    <div className="col-lg-6 d-flex justify-content-center" style={{background:"linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)", height: '80vh', borderTopLeftRadius: '15px',borderBottomLeftRadius:"15px", position: "relative" }}>
                        <Carousel images={images} width={'60%'} height={'75vh'} />
                    </div>
                    <div className="col-lg-6 bg-dark" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px'}}>
                    </div>
                </div>
            </div>
        </div>
    </>
);
export default Login;