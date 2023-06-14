import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    details: string
    publishedAt: string
  }


function SeusVideos( props : Props ){
    
    return (
        <Container>
            <ImageBanner alt="" src={props.thumbnail}/>
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                    <TextCard>{props.publishedAt}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default SeusVideos;