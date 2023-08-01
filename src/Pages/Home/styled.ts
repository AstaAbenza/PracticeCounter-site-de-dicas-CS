import styled from 'styled-components'


export const SectionHeader = styled.section `
 display: flex;
 background-color: #4F4F4F;
 width: 100%;
 box-shadow: 0px 0px 2em  #000000;
 position: fixed;
 

 h1 {
    font-size: 40px;
    padding-top: 30px;
 }

 p {
   position: absolute;
   top: 16vh;
 }

 img {
   height: 170px;
   margin-left: 20px;
 }

 span {
    color: white;
 }

 ul {
    list-style: none;
    text-align: end;
    color: #000000;
    font-size: 25px;
    max-width: 67%;
    width: 67%;
 }

 li {
   padding: 5px;
 }


 a.menu {
   text-decoration: none;
   color: white;
   position: relative;

   

   &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: #FFA500;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.6s ease-in-out;
   }

   &:hover::after {
      width: 100%;
   }
 }

 a.logo {
   text-decoration: none;
   color: #FFA500;
 }


`
export const DivStyled = styled.div `
   padding-left: 120px;
   padding-bottom: 60px;

`

export const MainStyled = styled.main`

padding-top: 250px;
display: flex;

span {
   color: #B22222;

}

h1 {
   font-size: 23px;
}

p {
   font-size: 20px;
   padding-top: 15px;
   
}



div {
   margin: 50px;
   margin-top: 0px;
}
`

export const H1Styled = styled.h1 `
font-size: 20px;

`

export const Main2Styled = styled.main `
font-size: 18px;
display: flex;
justify-content: space-around;
margin-top: 120px;

span {
   color: aqua;
   color: #B22222;
}

img {
   border: 1px solid;
}


`

export const Main3Styled = styled.main `
text-align: center;
margin-top: 70px;
padding-bottom: 70px;

img {
   border: 3px solid black;
}

a.começeAqui {
   color: black;
   text-decoration: none;
   position: relative;
   top: 30px;
   border: 1px solid;
   border-radius: 15px;
   padding: 3px;
   background-color: #A9A9A9;
   font-size: 20px;

   &:hover {
      background-color: #B22222;
      transition: 0.6s ;
   }
}
`

export const SectionStyled = styled.section `
background-color: #1C1C1C;
padding: 1px;
display: flex;
justify-content: flex-end;
margin-top: 50px;

a.footer {
   text-decoration: none;
   color: white;
}

li {
   padding: 10px;
   margin-right: 40px;
   text-align: left;
   list-style: none;
   color: white;

   &:hover {
      background-color: #FFA500 ;
      transition: 0.6s
   }
}

img {
   border-left: 5px solid black;
   
}

`

