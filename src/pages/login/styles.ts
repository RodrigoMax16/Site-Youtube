import styled from 'styled-components';

interface ValidEmailProps {
    validEmail: boolean
}
  
  interface ValidPasswordProps {
    validPassword: boolean
}
  
  interface invalidMessageProps {
    invalid: boolean
}


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const LoginContainer = styled.div`
  width: 480px;
  height: 530px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 45px;
  box-sizing: border-box;
`
export const Logo = styled.img`
  width: 90px;
  height: 90px;
  
`

export const Title = styled.h2`
  color: #000;
  font-weight: 400;
  margin: 10px 0;
`;

export const SubTitle = styled.h4`
  color: #000;
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0 30px 0;
`;

export const Email = styled.input<ValidEmailProps>`
  width: 100%;
  height: 50px;
  border: ${({validEmail}) => validEmail? '1px solid #d3d3d3' : '1px solid red'};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  &:focus {
    border-color: #1a75ff;
    border-width: 2px;
    outline: none;
  }
`;

export const MessagemContainer = styled.div`
  width: 100%;
`;

export const InvalidEmailMessagem = styled.span<invalidMessageProps>`
  display: ${({invalid}) => invalid? 'none' : 'block'};
  font-size: 14px;
  color: red;
`;

export const InvalidPasswordMessagem = styled.span<invalidMessageProps>`
  display: ${({invalid}) => invalid? 'none' : 'block'};
  font-size: 14px;
  color: red;
`;

export const Senha = styled.input<ValidPasswordProps>`
  width: 100%;
  height: 50px;
  border: ${({validPassword}) => validPassword? '1px solid #d3d3d3' : '1px solid red'};
  border-radius: 5px;
  margin-top: 10px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  &:focus {
    border-color: #1a75ff;
    border-width: 2px;
    outline: none;
  }
`;


export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 5px;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  box-sizing: border-box;
  margin-top: 30px;
`;

export const Cadastro = styled.span`
  color:  #1a75ff;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #005ce6;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  border: none;
  background-color: #1a75ff;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-color: #005ce6;
  }
`;

