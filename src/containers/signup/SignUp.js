import React, {useState} from 'react'
import { Container,Col,Row,Form,FormGroup,Button } from 'react-bootstrap'

const SignUp = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
    <Container>
        <Row>
            <Col lg={6} className="m-auto text-center">
                <h2 className='fw-bold mb-3'>SignUp</h2>
                <Form className='auth_form'>
                    <FormGroup className='mb-2'>
                        <input type='text' placeholder='Enter your name' value={username} onChange={(a)=>setUsername(a.target.value)}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(a)=>setEmail(a.target.value)}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <input type='password' placeholder='Enter your password' value={password} onChange={(a)=>setPassword(a.target.value)}/>
                    </FormGroup>
                    <Button type="submit" variant="light">회원가입</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default SignUp