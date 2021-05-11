import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container>
            <h1>Soy el inicio</h1>
            <hr />
            <Link to="/montañas-rusas" className="btn btn-dark">Ver montañas rusas</Link>
        </Container>
    )
}

export default IndexPage