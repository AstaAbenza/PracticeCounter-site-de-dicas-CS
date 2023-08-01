import styled  from "styled-components";

export const Form = styled.form `
display: flex;
flex-direction: column;
background-color: #1C1C1C;
align-items: center;
max-width: 200px;
width: 70%;
padding: 20px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
border-radius: 15px;
gap: 8px;

label{
    font-family: monospace;
}

h1{
    color: white;
    position: absolute;
    bottom: 150px;
}

span {
   color: #FFA500;
}

a.createConta {
    text-decoration: none;
    color: white;

    &:hover {
        color: #FFA500;
        transition: 0.7s;
    }
}
`

export const ButtonEnviar = styled.button `
max-width: 80px;
max-height: 40px;
align-items: center;
font-family: monospace;
color: red;
cursor: pointer;
`