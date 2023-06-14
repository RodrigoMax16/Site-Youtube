import { Container, MenuItem, ButtonIcon, Divisoria } from "./styles";
import InicioIcon from '../../assets/inicio.png';
import ShortsIcon from '../../assets/shorts.png';
import IncricoesIcon from '../../assets/inscricoes.png';
import YoutubeMusicIcon from '../../assets/youtubemusic.png';
import BibliotecaIcon from '../../assets/biblioteca.png';
import HistoricoIcon from '../../assets/historico.png';
import SeusVideosIcon from '../../assets/envios.png';
import DownloadsIcon from '../../assets/download.png';
import SalvosIcon from '../../assets/salvos.png';
import DivisoriaIcon from '../../assets/divisoria.png';
import OriginalsIcon from '../../assets/originals.png';
import EmAltaIcon from '../../assets/emalta.png';
import ShoppingIcon from '../../assets/shopping.png';
import FilmeIcon from '../../assets/filme.png';
import AoVivoIcon from '../../assets/aovivo.png';
import JogosIcon from '../../assets/jogos.png';
import NoticiasIcon from '../../assets/noticias.png';
import EsportesIcon from '../../assets/esportes.png';
import AprenderIcon from '../../assets/aprender.png';
import ConfiguracoesIcon from '../../assets/configurações.png';
import DenunciaIcon from '../../assets/denuncia.png';
import AjudaIcon from '../../assets/ajuda.png';
import FeedbackIcon from '../../assets/feedback.png';
import { useContext } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";

function Menu(){
    const {openMenu} = useContext(OpenMenuContext);
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
            <MenuItem openMenu={openMenu} onClick={() => navigate('/')}>   
                <ButtonIcon alt="" src={InicioIcon} />
                <span>Início</span>
            </MenuItem>
            <MenuItem openMenu={openMenu} onClick={() => navigate('/shorts')}>   
                <ButtonIcon alt="" src={ShortsIcon} />
                <span>Shorts</span>
            </MenuItem> 
            <MenuItem openMenu={openMenu}>  
                <ButtonIcon alt="" src={IncricoesIcon} />
                <span>Inscrições</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>   
                <ButtonIcon alt="" src={OriginalsIcon} />
                <span>Originals</span>
            </MenuItem> 
            <MenuItem openMenu={openMenu} onClick={() => navigate('/music')}>
                <ButtonIcon alt="" src={YoutubeMusicIcon} />
                <span>Youtube Music</span>
            </MenuItem>

            <Divisoria openMenu={openMenu} alt='' src={DivisoriaIcon}/>

            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={BibliotecaIcon} />
                <span>Biblioteca</span>
            </MenuItem>
            <MenuItem openMenu={openMenu }>
                <ButtonIcon alt="" src={HistoricoIcon} />
                <span>Histórico</span>
            </MenuItem>   
            <MenuItem openMenu={openMenu} onClick={() => navigate('/envios')}>
                <ButtonIcon alt="" src={SeusVideosIcon} />
                <span>Seus vídeos</span>
            </MenuItem>       
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={SalvosIcon} />
                <span>Assistir mais tarde</span>
            </MenuItem>        
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={DownloadsIcon} />
                <span>Downloads</span>
            </MenuItem>

            <Divisoria openMenu={openMenu} alt='' src={DivisoriaIcon}/>

            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={EmAltaIcon} />
                <span>Em alta</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={ShoppingIcon} />
                <span>Shopping</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={FilmeIcon} />
                <span>Filmes</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={AoVivoIcon} />
                <span>Ao vivo</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={JogosIcon} />
                <span>Jogos</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={NoticiasIcon} />
                <span>Notícias</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={EsportesIcon} />
                <span>Esportes</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={AprenderIcon} />
                <span>Aprender</span>
            </MenuItem>

            <Divisoria openMenu={openMenu} alt='' src={DivisoriaIcon}/>

            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={ConfiguracoesIcon} />
                <span>Configurações</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={DenunciaIcon} />
                <span>Histórico de denúncias</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={AjudaIcon} />
                <span>Ajuda</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>           
                <ButtonIcon alt="" src={FeedbackIcon} />
                <span>Enviar feedback</span>
            </MenuItem>
        </Container>
    )
}

export default Menu;

