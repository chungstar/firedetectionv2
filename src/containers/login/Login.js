import React, {useState} from 'react'
import { Container,Col,Row,Form,FormGroup,Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const signin = async(e)=>{
        e.preventDefault()
        setLoading(true)

        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            
            const user = userCredential.user;

            console.log(user);
            setLoading(false);
            alert('성공적으로 로그인했습니다');
            navigate('/목록');
        }catch(error){
            setLoading(false);
            alert(error.message);
        };
    }

    const signinWithGoogle = async () => {
        setLoading(true);
        try {
          const provider = new GoogleAuthProvider();
          const userCredential = await signInWithPopup(auth, provider);
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          alert('성공적으로 로그인했습니다');
          navigate('/목록');
        } catch (error) {
          setLoading(false);
          alert(error.message);
        }
      };

    return (
    <Container>
        <Row>
            {
                loading 
                ? <Col lg={12} className='text-center'>loading...</Col> 
                :  <Col lg={6} className="m-auto">
                <h2 className='fw-bold mb-3 text-center'>Login</h2>
                <Form className='fw-bold auth_form' onSubmit= {signin}>
                    <FormGroup className='mb-2'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email' value={email} onChange={(a)=>setEmail(a.target.value)}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(a)=>setPassword(a.target.value)}/>
                    </FormGroup>
                    <div className='text-center'>
                    <Button variant="light" type="submit">로그인</Button>{' '}
                    <Link to = "/SignUp"><Button variant="light">회원가입</Button></Link>
                    </div>
                    <hr/>
                    <div className='text-center mt-2'>
                    <Button variant="dark" onClick={signinWithGoogle}>Google 로그인</Button>
                    </div>
                </Form>
            </Col>
            }
        </Row>
    </Container>
  )
}

export default Login