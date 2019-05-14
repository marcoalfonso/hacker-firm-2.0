import { Component } from 'react'
import 'isomorphic-fetch'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }

  submitForm(name, email, message) {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, message})
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  }

  clearForm() {
    this.setState({ submitted: false })
  }

  render () {
    return (
      <section id="contact">
          <div className="inner">
              <section>
                  <form method="post" onSubmit={e => {
                    e.preventDefault()
                    const name = document.getElementById('name').value
                    const email = document.getElementById('email').value
                    const message = document.getElementById('message').value
                    this.submitForm(name, email, message)
                  }}>
                      <div className="field half first">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email" id="email" />
                      </div>
                      <div className="field">
                          <label htmlFor="message">Message</label>
                          <textarea name="message" id="message" rows="6"></textarea>
                      </div>
                      <ul className="actions">
                          <li><input type="submit" value="Send Message" className="special" /></li>
                          <li><input type="reset" value="Clear" onClick={e => {this.clearForm()}}/></li>
                      </ul>
                      {this.state.submitted === true &&
                        <div className="message-sent">Message Sent</div>
                      }
                  </form>
              </section>
              <section className="split">
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-envelope"></span>
                          <h3>Email</h3>
                          <a href="mailto:hello@hackerfirm.com">hello@hackerfirm.com</a>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-phone"></span>
                          <h3>Phone</h3>
                          <a href="tel:0423478156">(+61) 0423478156</a>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-home"></span>
                          <h3>Address</h3>
                          <span>362 Clovelly Road<br />
                          Sydney, 2031<br />
                          Australia</span>
                      </div>
                  </section>
              </section>
          </div>
      </section>
    )
  }
}

export default Contact
