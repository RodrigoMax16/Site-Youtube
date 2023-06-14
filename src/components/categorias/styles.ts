import styled from 'styled-components';

interface ContainerProps {
    openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: ${({openMenu}) => openMenu? '87%' : '93%'};
    height: 50px;
    position: fixed;
    top: 55px;
    right: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
`

export const ButtonContainer = styled.div`
    min-width: 35px;
    max-width: 35px;
    min-height: 35px;
    max-height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
`

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    height: 70%;
    overflow-x: hidden;

`

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
`

export const Tag = styled.div`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  outline: none;
  font-size: 15px;
  font-weight: 450;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  &:hover{
    background-color: #d2d2d2;
    border: none;
  }
`