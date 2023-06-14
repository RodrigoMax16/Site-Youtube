import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { useContext } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string

  }


function VideoComponent( props : Props ){
    const {openMenu} = useContext(OpenMenuContext);
    return (
        <Container>
            <ImageBanner alt="" src={props.thumbnail} openMenu={openMenu}/>
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;