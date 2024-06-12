import React from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

const BootstrapPlayground = () => {
    return (
        <Container>
            <Form className='mb-3'>
                <Row>
                    <Col md>
                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label className='f'>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="secondary" type='submit'>Login</Button>
            </Form>
            
            <Card border="secondary" className='mb-3'>
                <Card.Img variant="top" className="img-fluid" src='https://picsum.photos/id/237/500/300'/>
                <Card.Body>
                    <Card.Title>Test Card</Card.Title>
                    <Card.Text style={{alignItems: "center"}}>
                        This is a test card
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            <Breadcrumb>
                <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
            </Breadcrumb>
            <Alert variant="danger">This is a button</Alert>
            <Button>Test Button</Button>
        </Container>
    )
}

export default BootstrapPlayground