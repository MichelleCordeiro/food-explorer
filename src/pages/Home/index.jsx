import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'

import { Container, Main } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      <Main>
        <Section title='Refeições' />

        <Section title='Sobremesas' />
      </Main>
    </Container>
  );
}
