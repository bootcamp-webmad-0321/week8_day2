import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'

class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            pwd: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.handleAlert('Te has resgistrado correctamente')
                this.props.history.push('/inicio-sesion')
            })
            .catch(err => {
                const errorMessage = err.response.data.message
                this.props.handleAlert(errorMessage)
            })
    }

    render() {
        return (

            <Form onSubmit={e => this.handleSubmit(e)}>

                <Form.Group controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" value={this.state.username} onChange={e => this.handleInputChange(e)} name="username" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.pwd} onChange={e => this.handleInputChange(e)} name="pwd" />
                </Form.Group>

                <Button variant="dark" style={{ width: '100%', marginTop: '20px' }} type="submit">Registro</Button>
            </Form>
        )
    }
}

export default SignupForm