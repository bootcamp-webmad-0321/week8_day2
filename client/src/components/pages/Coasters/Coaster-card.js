import { Card, Col, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoasterCard = ({ title, imageUrl, _id, owner, loggedUser }) => {

    return (
        <Col md={3}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {
                        owner && loggedUser?._id === owner
                            ?
                            <>
                                <ButtonGroup style={{ width: '100%' }}>
                                    <Link to={`/montañas-rusas/detalles/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                                    <Button variant="outline-dark" size="sm" onClick={() => alert("TE LO CURRAS!")}>Editar</Button>
                                </ButtonGroup>
                            </>
                            :
                            <Link to={`/montañas-rusas/detalles/${_id}`} className="btn btn-dark btn-sm" style={{ width: '100%' }}>Detalles</Link>

                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard