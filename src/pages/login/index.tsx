import { useState, useContext,  useRef, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from "react-router-dom";
import { Container, LoginContainer, SubTitle, Title , CheckBoxContainer, Cadastro, Button, ButtonsContainer, Email, Senha, Logo, MessagemContainer, InvalidEmailMessagem, InvalidPasswordMessagem} from './styles';
import googleLogo from '../../assets/google.png';


function Login(){
const { handleLogin } = useContext(UserContext)

const navigate = useNavigate();

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
    
const [validEmail, setValidEmail] = useState(true)

const [formatEmailValid, setFormatEmailValid] = useState(true)

const [validPassword, setValidPassword] = useState(true)

const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (emailRef.current !== null) {
    emailRef.current.focus()
  }
},[])

const userLogin = () => {
  if (email.trim() !== '') {
    setValidEmail(true)
  }
  if (password.trim() !== '') {
    setValidPassword(true)
  }
  if (email.trim() === '' && password.trim() === '') {
    setValidEmail(false)
    setValidPassword(false)
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }
  else if (email.trim() === '') {
    setValidEmail(false)
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }
  else if (!/\S+@\S+\.\S+/.test(email)) {
    setFormatEmailValid(false)
    setValidEmail(false)
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }
  else if (password.trim() === '' || password.length < 4) {
    setValidPassword(false)
    if (passwordRef.current) {
      passwordRef.current.focus()
    }
  }
  else {
    handleLogin(email, password)
  }
}

const [showPassword, setShowPassword] = useState(false);

const handleShowPassword = () => {
  setShowPassword(!showPassword);
}
    
    return (
        <Container>
            <LoginContainer>

                <Logo alt="logo-login" src={googleLogo} />

                <Title>Faça login na sua conta</Title>
                <SubTitle>Continue no Youtube</SubTitle>

                <Email type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    validEmail={validEmail}
                    ref={emailRef}
                    placeholder="E-mail"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        userLogin()
                    }}}/>
                <MessagemContainer>
                    <InvalidEmailMessagem invalid={validEmail}>
                        {
                        formatEmailValid?
                        'Digite o seu e-mail'
                        :
                        'O formato desse e-mail é inválido. Digite um e-mail válido.'
                        }
                    </InvalidEmailMessagem>
                </MessagemContainer>    
                <Senha 
                    type={showPassword? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                        userLogin()
                        }
                        if (e.key === " ") {
                        e.preventDefault();
                        }
                    }}
                    ref={passwordRef}
                    validPassword={validPassword}
                    placeholder="Senha"
                    maxLength={20} 
                />
                <MessagemContainer>
                    <InvalidPasswordMessagem invalid={validPassword}>
                        Digite a sua senha com 4 caracteres
                    </InvalidPasswordMessagem>
                </MessagemContainer>
                <CheckBoxContainer>
                    <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                    <label htmlFor="show-password">Mostrar senha</label>
                </CheckBoxContainer>

                <ButtonsContainer>
                    <Cadastro onClick={() => navigate('/sign-up')}>
                        Criar conta
                    </Cadastro>
                    <Button 
                        onClick={userLogin}>
                        Próxima
                    </Button>
                </ButtonsContainer>

            </LoginContainer>
        </Container>
    )
}

export default Login;