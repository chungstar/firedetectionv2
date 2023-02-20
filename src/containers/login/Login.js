import React, {useState} from 'react'
import { Container,Col,Row,Form,FormGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
    <Container>
        <Row>
            <Col lg={6} className="m-auto">
                <h2 className='fw-bold mb-3 text-center'>Login</h2>
                <Form className='fw-bold auth_form'>
                    <FormGroup className='mb-2'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email' value={email} onChange={(a)=>setEmail(a.target.value)}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(a)=>setPassword(a.target.value)}/>
                    </FormGroup>
                    <div className='text-center'>
                    <Button variant="light">로그인</Button>{' '}
                    <Link to = "/signup"><Button variant="light">회원가입</Button></Link>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login