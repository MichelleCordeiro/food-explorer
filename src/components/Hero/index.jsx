import { Container } from './styles'

export function Hero({ title, loading, icon, ...rest }) {
  return (
    <Container>
      <div className='content'>
        <img src='../../src/assets/hero.png' alt='Imagem de macarons  coloridos flutuando' />

        <div className='infos'>
          <h2>Sabores inigualáveis</h2>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </div>
    </Container>
  )
}
