import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import '../App.css'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fontNunito">
        <div className="container-fluid">
            <Link className="navbar-brand me-5" to="/"><img src={logo} alt="" /></Link>
            <button className="navbar-toggler shadow-none fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <AiOutlineMenuUnfold />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item mx-2"><Link className="nav-link" style={{ color: '#554D89', fontWeight: '700' }}>Home</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link">Pages</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link">Services</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link">Portfolio</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link">Blog</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-link">Contact</Link></li>
                </ul>
                <div className='ms-auto fontPoppins'>
                    <button className='btn shadow-none navBtn'>Login</button>
                    <span className='mx-2' style={{ color: "#554D89" }}>or</span>
                    <button className='btn shadow-none navBtn'>Create account</button>
                </div>
            </div>
        </div>
    </nav>
);
export default Navbar;