import Particles from 'react-particles-js'

const Clients = (props) => (
  <section className="section clients" id="clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>They trust us<small> And we thank them</small></h1>
          <p>We work with <b>all forms of public or private organizations</b> and are able to provide tailored responses to key <b>accounts</b> as well as <b>local small businesses.</b>
          <br />We strive to work with the same care to the <b>satisfaction of each customer</b></p>
          <ul>
            <li>
              <img src="static/images/clients/deloitte.svg" alt="Deloitte" />
            </li>
            <li>
              <img src="static/images/clients/qantas.svg" alt="Qantas" />
            </li>
            <li>
              <img src="static/images/clients/fairfax.svg" alt="Fairfax Media" />
            </li>
            <li>
              <img src="static/images/clients/akqa.svg" alt="AKQA" />
            </li>
          </ul>
          <ul>
            <li>
              <img src="static/images/clients/ing.svg" alt="ING" />
            </li>
            <li>
              <img src="static/images/clients/servicensw.png" alt="Service NSW" />
            </li>
            <li>
              <img src="static/images/clients/dta.svg" alt="DTA" />
            </li>
            <li>
              <img src="static/images/clients/lawpath.svg" alt="Lawpath" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Clients
