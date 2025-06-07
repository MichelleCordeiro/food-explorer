import imageItem from '../../assets/items/image1.png'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Carousel } from '../../components/Carousel'
import { Item } from '../../components/Item'
import { Footer } from '../../components/Footer'

import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

export function Home() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  return (
    <Container>
      <Header />
      <Hero />

      <main>
        <Section title='Refeições'>
          <Carousel
            id='meals'
            items={[
              <Item
                key='meal-1'
                data={{
                  id: 'meal-1',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='meal-2'
                data={{
                  id: 'meal-2',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='meal-3'
                data={{
                  id: 'meal-3',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='meal-4'
                data={{
                  id: 'meal-4',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='meal-5'
                data={{
                  id: 'meal-5',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />
            ]}
          />
        </Section>

        <Section title='Sobremesas'>
          <Carousel
            id='desserts'
            items={[
              <Item
                key='dessert-1'
                data={{
                  id: 'dessert-1',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='dessert-2'
                data={{
                  id: 'dessert-2',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='dessert-3'
                data={{
                  id: 'dessert-3',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='dessert-4'
                data={{
                  id: 'dessert-4',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='dessert-5'
                data={{
                  id: 'dessert-5',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />
            ]}
          />
        </Section>

        <Section title='Bebidas'>
          <Carousel
            id='drinks'
            items={[
              <Item
                key='drink-1'
                data={{
                  id: 'drink-1',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='drink-2'
                data={{
                  id: 'drink-2',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='drink-3'
                data={{
                  id: 'drink-3',
                  src: imageItem,
                  title: 'Spaguetti Gambe',
                  description: 'Massa fresca com camarões e pesto.',
                  price: 'R$ 79.97'
                }}
              />,
              <Item
                key='drink-4'
                data={{
                  id: 'drink-4',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />,
              <Item
                key='drink-5'
                data={{
                  id: 'drink-5',
                  src: imageItem,
                  title: 'Torradas de Parma',
                  description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
                  price: 'R$ 25.97'
                }}
              />
            ]}
          />
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
