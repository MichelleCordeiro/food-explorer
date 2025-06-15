import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Carousel } from '../../components/Carousel'
import { Item } from '../../components/Item'
import { Footer } from '../../components/Footer'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container } from './styles'

export function Home() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] })

  const navigate = useNavigate()

  function generateItems(dataArray) {
    return dataArray.map(dish => (
      <Item
        key={`dish-${dish.id}`}
        data={{
          id: dish.id,
          src: `${api.defaults.baseURL}/files/${dish.image}`,
          title: dish.name,
          description: dish.description,
          price: dish.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }}
        isAdmin={isAdmin}
      />
    ))
  }
  useEffect(() => {
    async function fetchDishes() {
      try {
        const { data } = await api.get('/dishes')

        const meals = data.filter(dish => dish.category === 'Refeição')
        const desserts = data.filter(dish => dish.category === 'Sobremesa')
        const drinks = data.filter(dish => dish.category === "Bebida")

        setDishes({ meals, desserts, drinks })

      } catch (error) {
        console.error('Erro ao carregar item:', error.response?.data || error.message)
        alert('Erro ao carregar os dados do item.')
      }
    }
    fetchDishes()
  },[])

  return (
    <Container>
      <Header />
      <Hero />

      <main>
        <Section title='Refeições'>
          <Carousel
            id='meals'
            items={generateItems(dishes.meals)}
          />
        </Section>

        <Section title='Sobremesas'>
          <Carousel id='desserts' items={generateItems(dishes.desserts)} />
        </Section>

        <Section title='Bebidas'>
          <Carousel id='drinks' items={generateItems(dishes.drinks)} />
        </Section>
      </main>

      <Footer />
    </Container>
  )
}
