import { Link } from "react-router-dom"
import { DivAlert, H1Alert, PAlert, BAlert } from './styled'


export default function Alert({}){
    

    return (
        <>
         <DivAlert>
            <H1Alert>Você tem certeza?</H1Alert>
            <PAlert>Tudo o que ira acontecer ficara por responsabilidade sua!</PAlert>
            <BAlert onClick={()=> alert("Boa escolha!")}> <Link to='/'>cancelar</Link></BAlert>
            <BAlert><Link to='/Cadastro'>continuar</Link></BAlert>
         </DivAlert>
        </>
    ) 
}