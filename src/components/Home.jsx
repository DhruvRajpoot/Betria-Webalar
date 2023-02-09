import Feature from './Feature'
import DetailsComponent from './DetailsComponent'
import Hero from './Hero'
import VideoSection from './VideoSection'
import AllServices from './AllServices'
import downarrow from '../images/long-arrow-down.png'
import homemainimage2 from '../images/homemainimage2.svg'
import homemainimage3 from '../images/homemainimage3.svg'
import OurSkills from './OurSkills'
import SectionBelowSkills from './SectionBelowSkills'
import PlanDetails from './PlanDetails'
import QuestionNsupport from './QuestionNsupport'
import Footer from './Footer'

const handleScroll = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

const details = [
  {
    heading: 'Get the ultimate tool and learn how to grow your audience',
    para: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web.',
    btn: 'Get started',
    iconmsg: 'Read more',
    image: homemainimage2,
    order: '2'
  },
  {
    heading: 'We offer a full range of digital marketing services',
    para: 'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free.',
    btn: 'View prices',
    iconmsg: 'More info',
    image: homemainimage3,
    order: '1'
  }
]

const Home = () => (
  <>
    <div className="container" style={{ padding: "6vw 5vw" }}>
      <Hero />
      <div style={{ textAlign: "center", marginBottom: '10vw' }}>
        <button className='btn shadow-none' style={{ background: '#6852ED', borderRadius: "50%", padding: 'calc(1rem + 1vw) calc(1.5rem + 1vw)' }} onClick={handleScroll} title='scroll to bottom'><img src={downarrow} alt="" /></button>
      </div>
      <Feature />
      <DetailsComponent data={details[0]} />
    </div>
    <VideoSection />
    <div className="container" style={{ padding: "6vw 5vw" }}>
      <DetailsComponent data={details[1]} />
      <AllServices />
      <OurSkills />
    </div>
    <SectionBelowSkills />
    <div className="container" style={{ padding: "6vw" }}>
      <PlanDetails />
      <QuestionNsupport />
    </div>
    <div className="footer">
      <div className="container" style={{ padding: "6vw 6vw 3vw 6vw" }}>
        <Footer />
      </div>
    </div>
  </>
);

export default Home;