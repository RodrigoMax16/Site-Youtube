import { ImageBanner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoPesquisa(props : Props) {
  return (
    <Container>
      <ImageBanner style={{backgroundImage: `url(${props.thumbnail})`}}></ImageBanner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextCard>{props.channelName}</TextCard>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {props.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoPesquisa;