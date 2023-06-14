import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
`;

export const ImageBanner = styled.img <{ openMenu: boolean}>`
width: 100%;
height: ${({ openMenu }) => openMenu? '210px' : '180px'};
border-radius: 12px;
`;

export const TitleContainer = styled.div`
width: 100%;
display: flex;
`;

export const ChannelImage = styled.div`
background-color: beige;
max-width: 35px;
min-width: 35px;
max-height: 35px;
min-height: 35px;
width: 35px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 10px;
border: 1px solid #d2d2d2;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Title = styled.span`
font-weight: 600;
color: #0f0f0f;
`;

export const TextCard = styled.span`
color: #8c8c8c;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
`;