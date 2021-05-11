import { Switch, Route, Redirect } from 'react-router-dom'
import CoasterDetails from '../pages/CoasterDetails/CoasterDetails'
import Coasters from '../pages/Coasters/Coasters'
import IndexPage from '../pages/Index/Index-page'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const Routes = ({ storeUser, loggedUser, handleAlert }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/montañas-rusas" exact render={() => <Coasters loggedUser={loggedUser} />} />
            <Route path="/montañas-rusas/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} />
            <Route path="/registro" render={props => <Signup history={props.history} handleAlert={handleAlert} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={storeUser} history={props.history} />} />

            <Route path="/perfil" render={() => loggedUser ? <p>Este sería el perfil de {loggedUser.username}</p> : <Redirect to="/inicio-sesion" />} />
        </Switch>
    )
}

export default Routes