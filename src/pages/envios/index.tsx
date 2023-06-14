import { useContext, useState, useRef} from "react";
import { OpenMenuContext } from "../../contexts/menuContext";
import { AddVideoButton, ClearButton, CloseButton, Modal, ModalContent, ModalTitle, ThumbnailURL, UserContainer, UserName, VideoDescription, VideoTitle, VideosContainer } from "./styles";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { UserContext } from "../../contexts/userContext";
import { InputEmpty, MessagemContainer } from "../cadastro/styles";
import SeusVideos from "../../components/seusvideos";

function Envios(){
    
     interface Videos {
      title: string
      video_id: string
      thumbnail: string
      description: string
      publishedAt: string
    }
    
    const {openMenu} = useContext(OpenMenuContext);
    const { user , userVideos, createVideos, token} = useContext(UserContext)
   
    const USER_ID = user.id

    const [thumbnail, setThumbnail] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
  
    const [thumbnailValid, setThumbnailValid] = useState(true)
    const [titleValid, setTitleValid] = useState(true)
    const [descriptionValid, setDescriptionValid] = useState(true)

    const sendVideo = () => {
        const date: Date = new Date();
    
        if (thumbnail.trim() !== '') {
          setThumbnailValid(true)
        }
        if (title.trim() !== '') {
          setTitleValid(true)
        }
        if (description.trim() !== '') {
          setDescriptionValid(true)
        }
        if (thumbnail.trim() === '' && title.trim() === '' && description.trim() === '') {
          setThumbnailValid(false)
          setTitleValid(false)
          setDescriptionValid(false)
          if (thumbnailRef.current) {
            thumbnailRef.current.focus();
          }
        } else if (thumbnail.trim() === '') {
          setThumbnailValid(false)
          if (thumbnailRef.current) {
            thumbnailRef.current.focus()
          }
        } else if (title.trim() === '') {
          setTitleValid(false)
          if (titleRef.current) {
            titleRef.current.focus()
          }
        } else if (description.trim() === '') {
          setDescriptionValid(false)
          if (descriptionRef.current) {
            descriptionRef.current.focus()
          }
        }
        else {
          createVideos(token, USER_ID, title, description, thumbnail, date)
          setHideModal(true)
          clearInputs()
        }
      }
    
      const clearInputs = () => {
        if (thumbnailRef.current) {
          thumbnailRef.current.value = ''
          thumbnailRef.current.focus()
          setThumbnail('')
        }
        if (titleRef.current) {
          titleRef.current.value = ''
          setTitle('')
        }
        if (descriptionRef.current) {
          descriptionRef.current.value = ''
          setDescription('')
        }
      }
    
      const closeModal = () => {
        clearInputs()
        setThumbnailValid(true)
        setTitleValid(true)
        setDescriptionValid(true)
        setHideModal(true)
      }
    
      function getTimeDifference(publishedAt: string): string {
        const diff = Date.now() - Date.parse(publishedAt);
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 12 * month;
      
        if (diff < minute * 5) {
          return "Agora";
        } else if (diff < hour) {
          const minutes = Math.floor(diff / minute);
          return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
        } else if (diff < day) {
          const hours = Math.floor(diff / hour);
          return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
        } else if (diff < week) {
          const days = Math.floor(diff / day);
          return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
        } else if (diff < month) {
          const weeks = Math.floor(diff / week);
          return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
        } else if (diff < year) {
          const months = Math.floor(diff / month);
          return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
        } else {
          const years = Math.floor(diff / year);
          return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
        }
      }
    
      const [hideModal, setHideModal] = useState(true)
    

    return (
      <div>
        <Header/>
        <Menu/>
        <VideosContainer openMenu={openMenu}>
          <UserContainer>
              <UserName>{user && user.nome ? user.nome : ''}</UserName>
              <AddVideoButton onClick={() => setHideModal(false)}>Cadastrar video</AddVideoButton>
              <Modal hideModal={hideModal}>
                <ModalContent>
                  <CloseButton onClick={closeModal}>X</CloseButton>
                  <ModalTitle>Enviar novo vídeo</ModalTitle>
                  <ThumbnailURL 
                    type="text"
                    placeholder="URL da thumbnail ex: https://images.com/123456.jpg" 
                    onChange={(e) => setThumbnail(e.target.value)}
                    maxLength={300}
                    ref={thumbnailRef}
                    valid={thumbnailValid} 
                  />
                  <MessagemContainer>
                    <InputEmpty valid={thumbnailValid}>
                      Digite a URL da thumbnail
                    </InputEmpty>
                  </MessagemContainer>
                  <VideoTitle 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Título do vídeo"
                    maxLength={100}
                    ref={titleRef}
                    valid={titleValid}
                  />
                  <MessagemContainer>
                    <InputEmpty valid={titleValid}>
                      Digite o título do vídeo
                    </InputEmpty>
                  </MessagemContainer>
                  <VideoDescription 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Descrição do vídeo"
                    maxLength={200}
                    ref={descriptionRef}
                    valid={descriptionValid}
                  />
                  <MessagemContainer>
                    <InputEmpty valid={descriptionValid}>
                      Digite a descrição do vídeo
                    </InputEmpty>
                  </MessagemContainer>
                  <AddVideoButton onClick={sendVideo}>Adicionar video</AddVideoButton>
                  <ClearButton onClick={clearInputs}>Limpar</ClearButton>
                </ModalContent>
              </Modal>
          </UserContainer>
          {Array.isArray(userVideos) ? (
            userVideos.map((video: Videos) => 
            <SeusVideos 
              title={video.title} 
              thumbnail={video.thumbnail} 
              channelImage={user && user.nome ? user.nome.charAt(0) : ''} 
              details={video.description}
              publishedAt={getTimeDifference(video.publishedAt)} 
              key={video.video_id}
            />)
          ) 
          :
          (
          <h1>Esse canal não possui vídeos</h1>
          )}
        </VideosContainer>
      </div>
    )
}



export default Envios;