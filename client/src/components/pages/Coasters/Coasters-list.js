import { Component } from 'react'
import CoastersService from './../../../service/coasters.service'
import CoasterCard from './Coaster-card'

import { Row, Modal, Button } from 'react-bootstrap'
import NewCoaster from '../NewCoaster/NewCoaster'


class CoastersList extends Component {

    constructor() {
        super()
        this.state = {
            coasters: undefined,
            showModal: false
        }
        this.coastersService = new CoastersService()
    }


    componentDidMount() {
        this.loadCoasters()
    }

    loadCoasters() {

        this.coastersService
            .getAllCoasters()
            .then(response => this.setState({ coasters: response.data }))
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }

    render() {

        const { coasters } = this.state

        return (

            !coasters
                ?
                <h1>CARGANDO</h1>
                :
                <>
                    {this.props.loggedUser && <Button onClick={() => this.setState({ showModal: true })} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear</Button>}

                    <Row>
                        {coasters.map(elm => <CoasterCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />)}
                    </Row>

                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                        <Modal.Header> <Modal.Title>Crear montaña rusa</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <NewCoaster loggedUser={this.props.loggedUser} closeModal={() => this.setState({ showModal: false })} refreshCoasters={() => this.loadCoasters()} />
                        </Modal.Body>
                    </Modal>
                </>

        )
    }
}

export default CoastersList