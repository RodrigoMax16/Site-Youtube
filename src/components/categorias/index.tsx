import { Button, ButtonContainer, Container, Tag, TagContainer, TagContent } from "./styles";
import { useContext, useState } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import Esquerda from "../../assets/seta-esquerda.png"
import Direita from "../../assets/seta-direita.png"
import { useCategoryContext } from "../../contexts/categoryContext";

function Categorias() {
    const {openMenu} = useContext(OpenMenuContext);

    const [carrosselPosition, setCarrosselPosition] = useState(0);

    const carroselWidth = 340;
    const containerWidth = 100;

    const handleRightClick = () => {
       
        if (carrosselPosition > -(carroselWidth * 2) + containerWidth) {
           setCarrosselPosition((Position) => Position - carroselWidth);
        }
    };

    const handleLeftClick = () => {
        if (carrosselPosition < 0) {
            setCarrosselPosition((Position) => Position + carroselWidth);
        }
    };


    const categoryButtons = [
        {name: 'Tudo', id: '0'},
        {name: 'Games', id: '20'},
        {name: 'Futebol', id: '17'},
        {name: 'Entretenimento', id: '24'},
        {name: 'Música', id: '10'},
        {name: 'Pessoas e blogs', id: '22'},
        {name: 'Automóveis e veículos', id: '2'},
        {name: 'Animais e pets', id: '15'},
        {name: 'Notícias e política', id: '25'},
        {name: 'Comédia', id: '23'},
        {name: 'Shorts', id: '26'},
        {name: 'Vida a dois', id: '22'},
        {name: 'Esportes', id: '17'},
        {name: 'Memes', id: '23'},
        {name: 'Jornais', id: '25'},
        {name: 'Kids', id: '1'},
        {name: 'Ciências', id: '15'},
        {name: 'Séries', id: '23'},
        {name: 'Educação', id: '1'}, 
        {name: 'Ciência e tecnologia', id: '2'}, 
        {name: 'Documentários', id: '26'}, 
        {name: 'Economia', id: '25'}, 
      ];
    
      const {setCategoryId} = useCategoryContext()
    
      function searchCategory(id: string) {
        setCategoryId(id)
      }

    return(
        <Container openMenu={openMenu}>
            <ButtonContainer onClick={handleLeftClick}>
                <Button  alt="" src={Esquerda}/>
            </ButtonContainer>
            <TagContainer>
                <TagContent style={{ transform: `translateX(${carrosselPosition}px)`, transition: '0.5s ease-in-out' }}>
                {categoryButtons.map((button, index) => (
                    <Tag onClick={() => searchCategory(button.id)} key={index}>{button.name}</Tag>
                ))} 
                </TagContent>
            </TagContainer>
            <ButtonContainer onClick={handleRightClick}>
                <Button  alt="" src={Direita}/>
            </ButtonContainer>
        </Container>
    )
}

export default Categorias;