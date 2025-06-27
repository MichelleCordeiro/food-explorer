import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Carousel } from '../../components/Carousel'
import { Item } from '../../components/Item'
import { Footer } from '../../components/Footer'
import { EmptyMessage } from '../../components/EmptyMessage'

import { formatPriceToBRL } from '../../utils/utils'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container } from './styles'

export function Home() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search).get('search')

  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] })
  const [search, setSearch] = useState(searchParams ? searchParams : '')

  function generateItems(dataArray) {
    return dataArray.map(dish => (
      <Item
        key={`dish-${dish.id}`}
        data={{
          id: dish.id,
          src: `${api.defaults.baseURL}/files/${dish.image}`,
          title: dish.name,
          description: dish.description,
          price: formatPriceToBRL(dish.price)
        }}
        isAdmin={isAdmin}
      />
    ))
  }

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  useEffect(() => {
    setSearch(searchParams || '')
  }, [searchParams])

  useEffect(() => {
    if (search.length > 0 && search.length < 2) return

    async function fetchDishes() {
      try {
        const { data } = await api.get(`/dishes?search=${search}`)

        const meals = data.filter(dish => dish.category === 'Refeição')
        const desserts = data.filter(dish => dish.category === 'Sobremesa')
        const drinks = data.filter(dish => dish.category === 'Bebida')

        setDishes({ meals, desserts, drinks })

      } catch (error) {
        console.error('Erro ao carregar item:', error.response?.data || error.message)
        setDishes({ meals: [], desserts: [], drinks: [] })
      }
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Hero />

      <main>
        <Section title='Refeições'>
          {dishes.meals.length === 0 ? (
            <EmptyMessage message='Nenhuma refeição encontrada.' />
          ) : (
            <Carousel id='meals' items={generateItems(dishes.meals)} />
          )}
        </Section>

        <Section title='Sobremesas'>
          {dishes.desserts.length === 0 ? (
            <EmptyMessage message='Nenhuma sobremesa encontrada.' />
          ) : (
            <Carousel id='desserts' items={generateItems(dishes.desserts)} />
          )}
        </Section>

        <Section title='Bebidas'>
          {dishes.drinks.length === 0 ? (
            <EmptyMessage message='Nenhuma bebida encontrada.' />
          ) : (
            <Carousel id='drinks' items={generateItems(dishes.drinks)} />
          )}
        </Section>
      </main>

      <Footer />
    </Container>
  )
}
