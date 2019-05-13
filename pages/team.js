import Head from "next/head"
import Link from 'next/link'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

export default () => (
    <Layout>
      <Head>
        <title>The Hacker Firm Team | Software Development Studio Sydney</title>
        <meta name="description" content="This is the hacker firm development team." />
      </Head>
      <Banner />
      <section id="our-founders">
        <div class="container">
          <div class="row founders">
    				<div class="col-xs-12 col-md-6">
    					<div class="founder">
    						<div class="img">
    							<img src="static/images/marco-lavielle.jpg" alt="Marco Lavielle"/>
    						</div>
    						<div class="info">
    							<h3>Marco Lavielle</h3>
    							<h5>Full Stack Engineer</h5>
    						</div>
    					</div>
    					<ol class="padding-xs list-unstyled">
    					</ol>
    					<h5 class="underline">Profile</h5>
    					<p class="padding-xs">Coding addict, painter and runner.</p>
    					<ul class="list-inline social">
    						<li>
    						</li>
    					</ul>
    				</div>
    				<div class="col-xs-12 col-md-6">
    					<div class="founder">
    						<div class="img">
    							<img src="static/images/armin-kuhestani.jpg" alt="Armin Kuhestani"/>
    						</div>
    						<div class="info">
    							<h3>Armin Kuhestani</h3>
    							<h5>Front End Engineer</h5>
    						</div>
    					</div>
    					<ol class="padding-xs list-unstyled">
    					</ol>
    					<h5 class="underline">Profile</h5>
    					<p class="padding-xs">Avid fan of mobile phones and mobile apps.</p>
    					<ul class="list-inline social">
    						<li>
    						</li>
    					</ul>
    				</div>
    			</div>
    			<div class="row founders">
    				<div class="col-xs-12 col-md-6">
    					<div class="founder">
    						<div class="img">
    							<img src="static/images/franc-santos.jpg" alt="Franc Santos"/>
    						</div>
    						<div class="info">
    							<h3>Franc Santos</h3>
    							<h5>Back End Engineer</h5>
    						</div>
    					</div>
    					<ol class="padding-xs list-unstyled">
    					</ol>
    					<h5 class="underline">Profile</h5>
    					<p class="padding-xs">A polyglot software engineer that enjoys all things tech.</p>
    					<ul class="list-inline social">
    						<li>
    						</li>
    					</ul>
    				</div>
    				<div class="col-xs-12 col-md-6">
    					<div class="founder">
    						<div class="img">
    							<img src="static/images/alida-maffon.jpg" alt="Alida Maffon"/>
    						</div>
    						<div class="info">
    							<h3>Alida Maffon</h3>
    							<h5>Javascript Engineer</h5>
    						</div>
    					</div>
    					<ol class="padding-xs list-unstyled">
    					</ol>
    					<h5 class="underline">Profile</h5>
    					<p class="padding-xs">A fanatic of Javascript in whatever device.</p>
    					<ul class="list-inline social">
    						<li>
    						</li>
    					</ul>
    				</div>
    			</div>
        </div>
      </section>

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

    </Layout>
)
