import { useContext, useEffect, useState } from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import VideoComponent from "../../components/videoComponent";
import { Container, ContainerContainers, Divisoria, Icon, ImageBanner, ShortsContainer, ShortsContent, ShortsTitle, ShortsVideo, TextCard, TextContainer, Title } from "./styles";
import Categorias from "../../components/categorias";
import LogoShorts from '../../assets/shortsvermelho.png';
import Header from "../../components/header";
import Menu from "../../components/menu";
import axios from 'axios'
import moment from "moment";
import { useCategoryContext } from "../../contexts/categoryContext";


function Home(){
    const {openMenu} = useContext(OpenMenuContext);
    
    interface Videos {
        id: string;
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
        },
        statistics: {
          viewCount: string;
        }
    }
    
    const [videos, setVideos] = useState<Videos[]>([]);
    const {categoryId} = useCategoryContext()
    
    useEffect(() => {
        load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId])
    
    const API_KEY = 'AIzaSyCBi-vn3br7IV2MJzpHCl-05GpEDyAK4jE'
    
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=40&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`
    
    
    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
        return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
        return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
        return `${viewCount} visualizações`;
        }
    }
    
    async function load() {
        try {
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        }catch(erro){
            console.log(erro)
        }
    }
    
    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
        return 'hoje';
        } else if (diffDays === 1) {
        return 'há 1 dia';
        } else if (diffDays <= 7) {
        return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks === 1) {
            return 'há 1 semana';
        } else {
            return `há ${diffWeeks} semanas`;
        }
        } else if (diffDays <= 365) {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
            return 'há 1 mês';
        } else {
            return `há ${diffMonths} meses`;
        }
        } else {
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears === 1) {
            return 'há 1 ano';
        } else {
            return `há ${diffYears} anos`;
        }
        }
    }
    
    return (
        
        <div style={{ width: '100%',}}>
            <Header/>
            <Menu/>
            <ContainerContainers openMenu={openMenu}>
                
                <Categorias/>
                
                <Container openMenu={openMenu}>
                    {videos.map((video) => (
                        <VideoComponent 
                        title={video.snippet.title} 
                        thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url} 
                        channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
                        channelName={video.snippet.channelTitle}
                        details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`} 
                        key={video.id}
                        />
                    ))}
                </Container>

                <Divisoria openMenu={openMenu}/>

                <ShortsContainer openMenu={openMenu}>
                    <ShortsTitle>
                        <Icon alt='' src={LogoShorts}/>
                        <span>Shorts</span>
                    </ShortsTitle>
                    <ShortsContent>
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/upwYhWBdcZc/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCb9c1VMM9EDkxkQ90NemaS99Zb6A" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> O que foi esse SOM? </Title>
                                <TextCard> 11 mil visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo>
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/5JsHXtF2F5U/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBjUta0i47CpNNm2Vb6CanS2YqHig" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Coolest Airsoft Tracer Unit </Title>
                                <TextCard> 3,4 mi de visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo>
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/DGGqJXNwlP4/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCMzs_KkLBc7sYhAA6UJX5riYhTRA" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Freljord Champions Sizes </Title>
                                <TextCard> 436 mil visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo> 
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/0XHcfCezs-g/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDZIQPMPDsi8ZZAaaRZcWqKHxifyw" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Comprei um teclado torto </Title>
                                <TextCard> 2,2 mi de visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo> 
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/idbXhEVUwHs/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCFbkQ8MuD9r611FOzkYOi7xsVU4A" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> A Menor Velocidade do Minecraft </Title>
                                <TextCard> 849 mil visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo>
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/OTVLFxa6mqg/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBZFBIm5WBZ0R6NQwGSx_K5mtk4mA" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Did you know this about Stray? 🙀 </Title>
                                <TextCard> 8,6 mi de visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo> 
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/OrAH4TtP1vE/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAnS0ADq2fP_sdj19J6aWi2suPV6A" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Como a CREATINA funciona? </Title>
                                <TextCard> 2,6 mi de visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo> 
                        <ShortsVideo>
                            <ImageBanner src="https://i.ytimg.com/vi/lV5EkK-VAEM/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLArKCjntFg7zU9fbLM_DETSjE7-Bw" openMenu={openMenu}/>
                            <TextContainer>
                                <Title> Forever matou o Zumbi? </Title>
                                <TextCard> 441 visualizações </TextCard>
                            </TextContainer>
                        </ShortsVideo> 
                    </ShortsContent>    
                </ShortsContainer>

                <Divisoria openMenu={openMenu}/>
                
            </ContainerContainers>
        </div>
        
    )
}

export default Home;

