import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'
import AuthServices from './../service/auth.service'
import Routes from './routes/Routes'
import Alert from './shared/Alert/Alert'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      showAlert: true,
      alertText: ''
    }
    this.authService = new AuthServices()
  }


  storeUser = loggedUser => this.setState({ loggedUser })


  fetchUser = () => {
    this.authService
      .isloggedin()
      .then(response => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }


  componentDidMount() {
    this.fetchUser()
  }

  handleAlert(alertText, showAlert = true) {
    this.setState({ showAlert, alertText })
  }

  render() {


    return (
      <>
        <Navigation loggedUser={this.state.loggedUser} storeUser={user => this.storeUser(user)} handleAlert={alertText => this.handleAlert(alertText)} />

        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} handleAlert={alertText => this.handleAlert(alertText)} />
        </main>

        <Footer />

        <Alert handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)} show={this.state.showAlert} text={this.state.alertText} />
      </>
    )
  }
}

export default App