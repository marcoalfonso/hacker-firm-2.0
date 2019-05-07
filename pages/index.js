import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Particles from 'react-particles-js'
import logo from 'static/images/logo.svg'
import particlesConfig from 'static/particlesConfig.json'

export default () => (
  <Layout>
    <div>
      <div className="particles-section">
        <Particles
          params={{
      	    "particles": {
      	        "number": {
      	            "value": 50,
                    "density": {
                      "enable": true,
                      "value_area": 1000
                    }
      	        },
      	        "size": {
      	            "value": 3
      	        }
      	    },
      	    "interactivity": {
      	        "events": {
      	            "onhover": {
      	                "enable": true,
      	                "mode": "repulse"
      	            }
      	        }
      	    }
      	}} />
        <div className="logo-particles">
          <img src={logo} />
          <div className="headline-particles">Hacker Firm</div>
          <div className="subheadline-particles">Software development</div>
        </div>
        <a className="splash__next local-scroll" href="#services">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
      <Services />
      {/*<Banner />*/}
      <div id="main">
        {/*<section id="one" className="tiles">
          <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
            <header className="major">
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
          <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
          <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
          <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
          <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
          <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/landing"><a className="link primary"></a></Link>
          </article>
        </section>*/}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>How It Works</h2>
            </header>
            <p>From your idea to a finished product. Our specialised team of developers and designers are here to help you bring to life your projects.</p>
            <ul className="actions">
              <li><Link href="#contact"><a className="button next">Get Started</a></Link></li>
            </ul>
          </div>
        </section>
        <Clients />
      </div>
    </div>
  </Layout>
)
