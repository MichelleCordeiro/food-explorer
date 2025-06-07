import heroDesktop from '../../assets/hero_desktop.png'
import heroMobile from '../../assets/hero_mobile.png'

import { Container, Content } from './styles'

export function Hero() {
  return (
    <Container>
      <Content>
        <img
          className='desktop-only'
          src={heroDesktop}
          alt='Imagem de macarons coloridos flutuando'
        />
        <img
          className='mobile-only'
          src={heroMobile}
          alt='Imagem de macarons coloridos flutuando'
        />

        <div className='infos'>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Content>
    </Container>
  )
}
