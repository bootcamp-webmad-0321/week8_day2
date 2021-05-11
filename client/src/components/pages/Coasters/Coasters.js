import { Container } from 'react-bootstrap'

import CoastersList from './Coasters-list'

import './Coasters.css'

const Coasters = ({ loggedUser }) => {

    return (


        <Container className="coasters-page">

            <h1>Listado de montañas rusas</h1>

            <hr />

            <CoastersList loggedUser={loggedUser} />

        </Container>

    )
}

export default Coasters