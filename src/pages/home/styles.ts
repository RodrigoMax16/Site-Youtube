import styled from 'styled-components';


export const ContainerContainers = styled.div<{ openMenu: boolean }>`
    width: 100%;
    display: grid;
`;

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: ${({ openMenu }) => openMenu? '1590px' : '1700px'};
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 110px;
    margin-left: ${({ openMenu }) => openMenu? '270px' : '150px'};
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
    width: 95%;
    max-width: 1600px;
    display: grid;
    margin-left: ${({ openMenu }) => openMenu? '260px' : '150px'};
`;

export const ShortsTitle = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10px;
    margin-bottom: 30px;

    span {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-left: 12px;
    }
`;

export const Icon = styled.img`
    width: 20px;
`;

export const ShortsContent = styled.div `
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;

export const Divisoria = styled.img<{ openMenu: boolean }>`
    background-color: #d3d3d3;
    width: 100%;
    height: 4px;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 10px;
    max-width: ${({ openMenu }) => openMenu? '1600px' : '1700px'};
    margin-left: ${({ openMenu }) => openMenu? '260px' : '150px'};
` ;

export const ShortsVideo = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '180px' : '195px'};
    height: ${({ openMenu }) => openMenu? '320px' : '350px'};
    border-radius: 12px;
`;

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    max-width: 147px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
`;