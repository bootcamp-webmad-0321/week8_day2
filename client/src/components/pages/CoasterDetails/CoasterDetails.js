import { Component } from 'react'
import CoastersService from '../../../service/coasters.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

class CoasterDetails extends Component {

    constructor() {
        super()
        this.state = {
            coaster: undefined
        }
        this.coasterService = new CoastersService()
    }

    componentDidMount() {

        const { coaster_id } = this.props.match.params

        this.coasterService
            .getOneCoaster(coaster_id)
            .then(response => this.setState({ coaster: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { coaster } = this.state

        return (

            <Container>
                {
                    !this.state.coaster ? <h1>Cargando...</h1> :

                        <>
                            <h1>{coaster.title}</h1>
                            <hr />
                            <Row className="justify-content-between">
                                <Col md={6}>
                                    <h3>Información</h3>
                                    <p>{coaster.description}</p>
                                    <hr />
                                    <h3>Especificaciones</h3>
                                    <p><strong>Longitud:</strong> {coaster.length}</p>
                                    <p><strong>Inversiones:</strong> {coaster.inversions}</p>
                                    <hr />
                                    <Link to="/montañas-rusas" className="btn btn-dark">Volver al listado</Link>
                                </Col>

                                <Col md={4}>
                                    <img src={coaster.imageUrl} alt={coaster.title} style={{ width: '100%' }} />
                                </Col>
                            </Row>
                        </>
                }

            </Container>
        )
    }
}

export default CoasterDetails