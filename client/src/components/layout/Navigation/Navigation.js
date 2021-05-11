import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import logo from './logo.svg'

import AuthService from './../../../service/auth.service'

const Navigation = ({ loggedUser, storeUser, handleAlert }) => {

    const logout = () => {

        const authService = new AuthService()

        authService
            .logout()
            .then(() => {
                storeUser(undefined)
                handleAlert('Desconectado')
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">

            <Navbar.Brand>
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}Coasters_app!
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/montañas-rusas" className="nav-link">Montañas</Link>
                {
                    !loggedUser ?
                        <>
                            <Link to="/registro" className="nav-link">Registro</Link>
                            <Link to="/inicio-sesion" className="nav-link">Iniciar sesión</Link>
                        </>
                        :
                        <>
                            <Link to="/perfil" className="nav-link">Perfil</Link>
                            <span onClick={() => logout()} className="nav-link">Cerrar sesión</span>
                        </>
                }


                <span className="nav-link">| Hola, {loggedUser ? loggedUser.username : 'invitad@'}</span>
            </Nav>
        </Navbar>
    )
}

export default Navigation