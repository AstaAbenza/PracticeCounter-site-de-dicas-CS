import styled from 'styled-components'

// Themes

export const ThemmeModal = styled.div `
background-color: #C0C0C0;
display: flex;
flex-direction: column;
position: absolute;
right: 330px;
padding: 10px ;
border-radius: 15px;
margin-top: 65px;


a.themes {
   text-decoration: none;
   color: black;
   padding: 3px;
   
   &:hover {
      color: #B22222;
      transition: 0.5s;
   }
}

button {
    border-radius: 15px;
    margin-top: 5px;
    cursor: pointer;

    &:hover {
        background-color: #B22222;
        transition: 0.6s;
    }
}
`