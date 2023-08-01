import { ThemmeModal } from './styled'
import { Link } from 'react-router-dom'

interface tema {
    modalOpen: boolean
    closeModal(): void
}

export default function Themes({modalOpen, closeModal}:tema) {
    
    if (!modalOpen) return <div/>
    
    return (

        <ThemmeModal>
            <Link to="/" className='themes'>TEMA CLARO</Link>
            <Link to="/" className='themes'>TEMA ESCURO</Link>
            <button onClick={closeModal}>close</button>
          </ThemmeModal>
    )
}