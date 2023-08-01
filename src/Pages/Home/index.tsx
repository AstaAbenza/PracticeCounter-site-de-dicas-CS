import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { DivStyled, SectionHeader, MainStyled, Main2Styled, Main3Styled, H1Styled, SectionStyled} from './styled'
import { userContext } from '../../Context/user'


// IMAGENS
import Logo from '../../../img/LogoPracticeCounter.png'
import Pateta from '../../../img/pateta.gif'
import Tiro from '../../../img/giphy1.gif'
import Smoke from '../../../img/CT-SPAWN-SMOKE.gif'
import Skin from '../../../img/csgo-skin1111.gif'
import Dance from '../../../img/csgo-dance-cs-go-dance.gif'
import Canal from '../../../img/canal.png'

// COMPONENTES

import Themes from '../../Components/Themes'
import Login from '../Login'



interface PropsHome {
 
}

export default function Home({  }: PropsHome){

  const [openModalm , setOpenModal] = useState(false)
  const { user } = useContext(userContext)


  if (!user ) return <Login/>

    return ( 
    <>
     <body>
      <header>
        <SectionHeader>
          <img src={Logo} alt="Logo PracticeCounter " title="Logo PracticeCounter" height={150}></img>
          <h1><Link to="/" className='logo'><span>Practice</span>Counter</Link></h1>
          <ul>
            <li><Link to='/Cadastro' className='menu'>Inicio</Link></li>
            <li><Link to='/' className='menu'>Dicas</Link></li>
            <li><Link to='/' className='menu'>Em Breve</Link></li>
          </ul>
          <p>Perfil: {user?.name}</p>
        </SectionHeader>
      </header>
      <MainStyled>
        <DivStyled>
          <h1>DEIXE DE SER <span>PATETA!</span></h1>
          <img src={Pateta} alt="Player Pateta!" title="Player Pateta!" height={320}></img>
        </DivStyled>
        <div>
          <p>Sejam bem vindos ao Practice Counter! Aqui você pode encontrar todo o suporte que precisa para saber mais sobre CS-GO</p>
          <p>Preparamos para você os melhores conteúdos para que, de alguma forma, possamos ajudá-los com suas dúvidas frequentes referentes ao jogo.</p>
        <ul>
          <li>Dicas de CS-GO</li>
          <li>Indicações para mapas com BOT para aprimorar sua jogada</li>
          <li>Dicas de posições no jogo</li>
          <li>Como fazer Smokes perfeitas</li>
          <li>Conteúdo sobre Skins, Armas e Facas, e muitos outros conteúdos que vocês só encontrarão aqui!</li>
        </ul>
        <p>Para mais dúvidas entre em contato com o nosso <span>suporte</span>, as informações de contato ficam ao final da tela.</p>
        </div>
      </MainStyled>
      <hr/>
      <Main2Styled>
        <div>
          <H1Styled>Melhore sua <span>POSIÇÃO</span> de mongo aqui!</H1Styled>
          <img src={Tiro} alt="Player morrendo" title="Player morrendo" height={280}></img>
          <p>Se torne o mais nojento possivel com as variações de dicas.</p>
        </div>
        <div>
          <H1Styled>Faça <span>SMOKES</span> FODAS!</H1Styled>
          <img src={Smoke} alt="Fazendo Smoke" title="Fazendo Smoke" height={280}></img>
          <p>Variações de smokes pika </p>
        </div>
        <div>
          <H1Styled>Aprenda a <span>INVESTIR</span> em skins</H1Styled>
          <img src={Skin} alt="Mostrando Skin" title="Mostrando Skin" height={280}></img>
          <p>Pare de gastar feito louco e aprenda a investir nesse mercado </p>
        </div>
      </Main2Styled>
      <Main3Styled>
        <div>
          <H1Styled>Jamais sejá chamado de lixo novamente :)<span></span></H1Styled>
          <img src={Dance} alt="Player Dançando" title="Player Dançando" height={280}></img><br/>
          <Link to="/" className='começeAqui'>começe aqui</Link>
        </div>
      </Main3Styled>
      <footer>
        <SectionStyled>
          <ul>
            <li><Link to="https://www.youtube.com/channel/UC551m1gRb5P7Tr9_AiP3mqw" className='footer'>YOUTUBE</Link></li>
            <li><Link to="/" className='footer'>TWITTER</Link></li>
            <li><Link to="/" className='footer'>DISCORD</Link></li>
            <li><Link to="/" className='footer' onClick={()=> setOpenModal(true)}>THEMES</Link></li>
          </ul>
          <img src={Canal} alt="Canal de PeterN" title="Canal de PeterN"></img>
          <Themes closeModal={() => setOpenModal(false)} modalOpen={openModalm}/>
        </SectionStyled>
      </footer>
     </body>
    </>
    )
}