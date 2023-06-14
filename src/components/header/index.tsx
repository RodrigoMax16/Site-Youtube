import { ButtonContainer, ButtonIcon, Container, LogoContainer, SearchContainer, SearchInputContainer, SearchInput, SearchButton, HeaderButton, DropMenu, DropMenuButton, DropMenuContent, LoginButton, UserIcon, UserName, Divisoria, FecharImg, FecharButton } from "./styles";
import HamburguerIcon from '../../assets/hamburguer.png';
import Logo from '../../assets/logo.png';
import SearchIcon from "../../assets/search.png";
import MicIcon  from "../../assets/microfone.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import UsuarioIcon from "../../assets/usuario.png";
import CanalIcon from "../../assets/retrato.png";
import SairIcon from "../../assets/sair.png";
import DivisoriaIcon from "../../assets/divisoria.png";
import LogadoIcon from "../../assets/logado.png";
import FecharIcon from "../../assets/fechar.png";
import { useContext,  useRef, useState} from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from "../../contexts/searchContext";

function Header(){
    const { login, logOut, user, openDropMenu, setOpenDropMenu } = useContext(UserContext)
    const {openMenu, setOpenMenu} = useContext(OpenMenuContext)
    const handleDropMenu = () => {
        setOpenDropMenu(!openDropMenu)
    }
    
    const [clearButton, setClearButton] = useState(false)
  
    const inputRef = useRef<HTMLInputElement>(null);
    
    const {setSearch} = useSearchContext()

    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string) {
        setInputValue(inputValue)
        if(inputValue === '') {
        setClearButton(false)
        } else (
        setClearButton(true)
        )
    }


    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if (inputRef.current) {
        inputRef.current.focus();
        }
    }

    const navigate = useNavigate();

    const irParaSeusVideos = () => {
        navigate('/envios')
        handleDropMenu()
    }

    const sair = () => {
        navigate('/')
        handleDropMenu()
        logOut()
    }

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10 0 0px'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{ cursor: 'pointer', width: '100px' }} alt='' src={Logo}/>
            </LogoContainer>

            <SearchContainer>

                <SearchInputContainer>
                <SearchInput
                    ref={inputRef}
                    value={inputValue} 
                    placeholder="Pesquisar" 
                    onChange={(e) => {
                    handleInput(e.target.value)
                    }}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSearch(inputValue)
                        navigate('/search')
                        
                    }
                    }}
                />
                <FecharButton 
                    clearButton={clearButton}
                    onClick={clearInput}
                >

                    <FecharImg src={FecharIcon}/>
                    
                </FecharButton>
                
                </SearchInputContainer>

                <SearchButton onClick={() => {
                    if (inputValue.trim() === '') {
                    alert('Digite algo')
                    return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>

            </SearchContainer>
            
            {login?
                <HeaderButton>
                    <ButtonContainer margin='0 0 0 10px' onClick={() => navigate('/envios')}>
                        <ButtonIcon alt="" src={VideoIcon}/>
                    </ButtonContainer>

                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon}/>
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px' onClick={handleDropMenu}>
                        <ButtonIcon alt="" src={LogadoIcon}/>
                    </ButtonContainer>

                    <DropMenu openDropDownMenu={openDropMenu}>

                        <UserIcon>
                            <ButtonContainer margin='0 0 0 10px'>
                                {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                            </ButtonContainer>
                            <UserName>{user && user.nome ? user.nome : ''}</UserName>
                        </UserIcon>

                        <Divisoria alt='' src={DivisoriaIcon}/>

                        <DropMenuContent onClick={irParaSeusVideos}>
                            <ButtonIcon alt="" src={CanalIcon} />
                            <DropMenuButton>
                                Seus canal
                            </DropMenuButton>
                        </DropMenuContent>

                        <DropMenuContent onClick={sair}>
                            <ButtonIcon alt="" src={SairIcon} />
                            <DropMenuButton>
                                Sair
                            </DropMenuButton>
                        </DropMenuContent>

                    </DropMenu>              
                </HeaderButton>          
                :
                <LoginButton onClick={() => navigate('/sign-in')}>
                    <ButtonIcon alt="" src={UsuarioIcon}></ButtonIcon>
                    <span>Fazer login</span>
                </LoginButton> 
            }
        </Container>
    )
}

export default Header;

