import React from 'react'
import { Container,Col,Row,Form,FormGroup,Button } from 'react-bootstrap'

const Login = () => {
  return (
    <Container>
        <Row>
            <Col lg={6} className="m-auto text-center">
                <h2 className='fw-bold mb-3'>Login</h2>
                <Form className='bg-dark'>
                    <FormGroup className='mb-2'>
                        <input type='email' placeholder='Enter your email'/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <input type='password' placeholder='Enter your password'/>
                    </FormGroup>
                    <Button>로그인</Button>
                    <Button>회원가입</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login