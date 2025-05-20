import { Container, Content } from './styles'

export function Hero({ title, loading, icon, ...rest }) {
  return (
    <Container>
      <Content>
        <img
          className='desktop-only'
          src='../../src/assets/hero_desktop.png'
          alt='Imagem de macarons  coloridos flutuando'
        />
        <img
          className='mobile-only'
          src='../../src/assets/hero_mobile.png'
          alt='Imagem de macarons  coloridos flutuando'
        />

        <div className='infos'>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Content>
    </Container>
  )
}
