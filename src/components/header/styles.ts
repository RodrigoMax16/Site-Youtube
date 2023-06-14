import styled from 'styled-components';

interface DropDownMenuProps {
    openDropDownMenu: boolean;
}

interface ClearButtonProps {
    clearButton: boolean;
}
  
export const Container = styled.header`
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    box-sizing: border-box;
    z-index: 2;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #d2d2d2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;   
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`; 

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`; 

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;

export const DropMenu = styled.div<DropDownMenuProps>`
    width: 200px;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #d2d2d2;
    padding: 10px 0;
    top: 8px;
    background-color: #fff;
    right: ${({openDropDownMenu}) => openDropDownMenu ? '110px' : '-200px'};
`;

export const UserIcon = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;

export const DropMenuContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #d2d2d2;
    cursor: pointer;
  }
`;

export const DropMenuButton = styled.button`
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: inherit;
`;

export const LoginButton = styled.div`
    width: 130px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    

    span {
        margin-left: 8px
        
    }

    &:hover {
        background-color: #d2d2d2;
    }
`

export const Divisoria = styled.img`
    width: 100%;
    height: 1px;
    margin-top: 5px;
    margin-bottom: 5px;
` 

export const FecharButton = styled.button<ClearButtonProps>`
  display: ${({clearButton}) => clearButton? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  background-color: #fff;
`;

export const FecharImg = styled.img`
  width: 20px;
`;
