import React, {useState} from 'react'
import { Container,Col,Row,Form,Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, storage, firestore } from '../../firebase/firebase'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    
    //useState
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [file,setFile] = useState(null);
    const [loaing,setLoading]=useState(false);

    const navigate = useNavigate();

    //createUserWithEmailAndPassword
    const signup = async(e)=>{
        e.preventDefault()//preventDefault()? 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 브라우저의 기본 동작을 실행하지 않도록 지정.
        setLoading(true)

        try{

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            const storageRef = ref(storage, `userImages/${ Date.now() + userName}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on((error)=>{
                alert(error.message);
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                    // 업데이트 유저 프로필
                    await updateProfile(user, {
                        displayName:userName,
                        photoURL: downloadURL,
                    });
                    // 파이어스토어에 유저 데이터 저장
                    await setDoc(doc(firestore,'users',user.uid), {
                        uid: user.uid,
                        displayName: userName,
                        email,
                        photoURL: downloadURL,
                    });
                });
            });
            setLoading(false);
        }catch(error){
            alert("에러가 발생했습니다.");
        };
    }

    return (
    <Container>
        <Row>
            <Col lg={7} className="m-auto">
                <h2 className='fw-bold mb-3 text-center'>SignUp</h2>
                <Form className='fw-bold auth_form ' onSubmit={signup}>
                    <Form.Group className='mb-2'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='userName' placeholder='Enter your username' value={userName} onChange={(a)=>setUserName(a.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email' value={email} onChange={(a)=>setEmail(a.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter your password' value={password} onChange={(a)=>setPassword(a.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label>profile</Form.Label>
                        <Form.Control type='file' onChange={(a)=>setFile(a.target.files[0])}/>
                    </Form.Group>
                    <div className='text-center'>
                        <Button type="submit" variant="light">회원가입</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default SignUp