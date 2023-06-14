import { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from "react-router-dom";
import { Container, CadastroContainer, SubTitle, Title , CheckBoxContainer, Login , Button, ButtonsContainer, Nome, Email, SenhaInput, Logo, SenhaSpan, MessagemContainer, CompareSenha, SenhaContainer, InputEmpty} from './styles';
import googleLogo from '../../assets/google.png';


function Cadastro(){
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [comparePassword, setComparePassword] = useState('')
  const [UserNameValid, setUserNameValid] = useState(true)
  const [UserEmailValid, setUserEmailValid] = useState(true)
  const [UserPasswordValid, setUserPasswordValid] = useState(true)
  const [formatoEmailValid, setFormatoEmailValid] = useState(true)
  const [mesmaSenha, setMesmaSenha] = useState(true)
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const compareSenhaRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (nameRef.current !== null) {
      nameRef.current.focus();
    }
  },[])
  
  const { handleCreateUser } = useContext(UserContext)
  
  const createUser = () => {
    
    if (userName.trim() !== '') {
      setUserNameValid(true)
    }
    if (userEmail.trim() !== '') {
      setUserEmailValid(true)
    }
    if (userPassword.trim() !== '' && comparePassword.trim() !== '') {
      setUserPasswordValid(true)
    }
    if (userName.trim() === '' && userEmail.trim() === '' && userPassword.trim() === '') {
      setUserNameValid(false)
      setUserEmailValid(false)
      setUserPasswordValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (userName.trim() === '') {
      setUserNameValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (userEmail.trim() === '') {
      setUserEmailValid(false)
      setFormatoEmailValid(true)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setFormatoEmailValid(false)
      setUserEmailValid(false)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (userPassword.trim() === '' || userPassword.length < 4) {
      setUserPasswordValid(false)
      if (passwordRef.current) {
      passwordRef.current.focus()
    }
  }
  else if (comparePassword.trim() === '') {
    setUserPasswordValid(false)
    if (compareSenhaRef.current) {
      compareSenhaRef.current.focus()
    }
  }
  else if (userPassword !== comparePassword) {
    setUserPasswordValid(false)
    setMesmaSenha(false)
    if (compareSenhaRef.current) {
      compareSenhaRef.current.focus()
    }
  }
  else {
    handleCreateUser(userName,userEmail,userPassword)
  }
  
}
return (
  <Container>
            <CadastroContainer>

                <Logo alt="logo-login" src={googleLogo} />

                <Title> Cadastre uma conta</Title>
                <SubTitle>Continue no Youtube</SubTitle>

                <Nome valid={UserNameValid} 
                    type="text" 
                    placeholder="Nome Sobrenome" 
                    value={userName} ref={nameRef} 
                    onChange={(e) => {setUserName(e.target.value)}}/>
                <MessagemContainer>
                    <InputEmpty valid={UserNameValid}>
                        Digite o seu nome
                    </InputEmpty>
                </MessagemContainer>
                
                <Email valid={UserEmailValid} type='email' placeholder="Seu endereço de e-mail" value={userEmail} ref={emailRef} onChange={(e) => {setUserEmail(e.target.value)}}/>
                <MessagemContainer>
                    <InputEmpty valid={UserEmailValid}>
                        {formatoEmailValid? 'Digite seu e-mail.' : 'O formato desse e-mail é inválido. Digite um e-mail válido.'}
                    </InputEmpty>
                </MessagemContainer>

                <SenhaContainer>
                    <SenhaInput valid={UserPasswordValid} 
                    type={showPassword? 'text' : 'password'} 
                    placeholder="Senha" 
                    value={userPassword} 
                    ref={passwordRef} 
                    onChange={(e) => {setUserPassword(e.target.value)}} 
                    maxLength={20}
                    onKeyDown={(e) => {
                      if (e.key === " ") {
                        e.preventDefault();
                      }
                      if(e.key === 'Enter') {
                        createUser()
                      }
                    }}/>
                    <CompareSenha
                        valid={UserPasswordValid}  
                        type={showPassword? 'text' : 'password'} 
                        placeholder="Confirmar"
                        value={comparePassword}
                        ref={compareSenhaRef}
                        onChange={(e) => {setComparePassword(e.target.value)}}
                        maxLength={20}
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                          }
                          if(e.key === 'Enter') {
                            createUser()
                          }}}/>
                </SenhaContainer>
                <MessagemContainer>
                    <InputEmpty valid={UserPasswordValid}>
                    { mesmaSenha ? 'Digite uma senha de pelo menos 8 caracteres e confirme.' : 'Senha inválida. Verifique se estão iguais.' }
                    </InputEmpty>
                </MessagemContainer>
                <SenhaSpan>
                    Use 4 caracteres com uma combinação de letras, números e símbolos.
                </SenhaSpan>

                <CheckBoxContainer>
                    <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                    <label htmlFor="show-password">Mostrar senha</label>
                </CheckBoxContainer>

                <ButtonsContainer>
                    <Login onClick={() => navigate('/sign-in')}>Faça Login em vez disso</Login>
                    <Button onClick={createUser}>Próxima</Button>
                </ButtonsContainer>

            </CadastroContainer>
        </Container>
    )
  }
  
export default Cadastro;
  