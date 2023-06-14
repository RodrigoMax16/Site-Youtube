import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '230px' : '120px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: fixed;
    top: 55px;
    margin-right: ${({ openMenu }) => openMenu? '30px' : '30px'};
`;

export const MenuItem = styled.div<{ openMenu: boolean}>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px; 
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};


    span {
    font-weight: 600;  
    font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
    margin-left: ${({ openMenu }) => openMenu? '20px' : 'non'};
    max-width: ${({ openMenu }) => openMenu? '140px' : '70px'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    &:hover {
        background-color: #d2d2d2; 
    }
` 

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const Divisoria = styled.img<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '180px' : '75px'};
    height: 1px;
    margin-top: 5px;
    margin-bottom: 5px;
` 