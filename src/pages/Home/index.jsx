import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      {/* <main>
        <Section title='Refeições' />

        <Section title='Sobremesas' />
      </main> */}

      <Footer />
    </Container>
  )
}
