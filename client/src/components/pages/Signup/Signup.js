import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'

const Signup = ({ history, handleAlert }) => {

    return (

        <Container>

            <Row className="justify-content-center">

                <Col md={6}>

                    <h1>Registro de usuario</h1>

                    <hr />

                    <SignupForm history={history} handleAlert={handleAlert} />

                    <hr />

                    <Link to="/inicio-sesion" className="btn btn-dark">Iniciar sesión</Link>

                </Col>

            </Row>

        </Container>

    )
}

export default Signup