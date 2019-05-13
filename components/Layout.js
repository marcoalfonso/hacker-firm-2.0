import Head from "next/head"
import stylesheet from 'styles/main.scss'
import { withRouter } from 'next/router'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import ReactGA from 'react-ga'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    ReactGA.initialize('UA-77335111-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
  }

  render() {
    return (
      <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <Head>
          <title>The Hacker Firm | Software Development Studio Sydney</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="The Hacker Firm is a software studio specialized in web, blockchain and VR development." />
          <meta name="author" content="The Hacker Firm" />
          <meta name="keywords" content="Software development, Web Development, Blockchain, VR" />
          <meta property='og:title' content="The Hacker Firm" />
          <meta property='og:url' content="https://www.hackerfirm.com" />
          <meta property='og:image' content="https://www.hackerfirm.com/assets/images/logo.svg" />
          <meta property='og:description' content="The Hacker Firm is a software studio specialized in web, blockchain and VR development." />
          <meta name="google-site-verification" content="sQCxfB6UNPGPFnhyxUFHeQnx0zeqQXd-9jYmkS0YCzI" />
          <link href="/static/css/skel.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link rel="shortcut icon" href="static/logo.ico" type="image/x-icon" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} router={this.props.router}/>
          {this.props.children}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

export default withRouter(Layout)
