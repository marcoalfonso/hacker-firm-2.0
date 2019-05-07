const Services = (props) => (
  <section className="section competences clear" id="competences">
    <div className="container">
        <div className="competences__intro row">
            <div className="col-lg-12">
                <h1>Web, Blockchain and VR development <small>in Sydney</small></h1>
                <p><b>Hacker Firm</b> is a web agency <b>specialized in web, blockchain and VR development</b> . We develope complex software <b>for some of the biggest companies</b>, focus on <b>pixel perfection</b> and have an obsession with <b>design</b>, we create your <b>applications and websites tailor-made and efficient</b>.</p>
            </div>
        </div>

        <div className="row">
            <div className="competences__item col-sm-4">
                <h3>Web Applications</h3>
                <p>We develop web and mobile applications in Javascript - React and React Native.</p>
            </div>
            <div className="competences__item col-sm-4">
                <h3>Blockchain</h3>
                <p>We develop blockchain dapps for Ethereum using Javascript and Solidity.</p>
            </div>
            <div className="competences__item col-sm-4">
                <h3>Virtual reality</h3>
                <p>We develop VR experiences and prototypes using Unity.</p>
            </div>
        </div>
        <p className="competences__btn"><a className="btn local-scroll" href="#contact">Contact us</a></p>
    </div>
  </section>
)

export default Services
