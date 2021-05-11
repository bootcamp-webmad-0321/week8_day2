import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CoastersService from '../../../service/coasters.service'
import UploadsService from '../../../service/uploads.service'

class NewCoaster extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coaster: {
                title: '',
                description: '',
                length: 0,
                inversions: 0,
                imageUrl: '',
                owner: this.props.loggedUser._id
            },
            isUploading: false
        }

        this.coasterService = new CoastersService()
        this.uploadsService = new UploadsService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ coaster: { ...this.state.coaster, [name]: value } })
    }


    handleSubmit(e) {

        e.preventDefault()


        this.coasterService
            .createCoaster(this.state.coaster)
            .then(() => {
                this.props.closeModal()
                this.props.refreshCoasters()
            })
            .catch(err => console.log(err))
    }


    handleFileUpload(e) {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => this.setState({ isUploading: false, coaster: { ...this.state.coaster, imageUrl: response.data.secure_url } }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>

                <Form.Group controlId="title">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={e => this.handleInputChange(e)} name="title" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>

                <Form.Group controlId="length">
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="number" value={this.state.length} onChange={e => this.handleInputChange(e)} name="length" />
                </Form.Group>

                <Form.Group controlId="inversions">
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" value={this.state.inversions} onChange={e => this.handleInputChange(e)} name="inversions" />
                </Form.Group>

                <Form.Group controlId="imageUrl">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit" disabled={this.state.isUploading}>
                    {this.state.isUploading ? 'Un momento...' : 'Crear montaña rusa'}
                </Button>

            </Form>
        )
    }
}

export default NewCoaster