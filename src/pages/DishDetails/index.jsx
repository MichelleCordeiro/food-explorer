import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { IngredientTag } from '../../components/IngredientTag'
import { QuantityItem } from '../../components/QuantityItem'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Dish, DishContent } from './styles'

export function DishDetails() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)

      } catch (error) {
        console.error('Erro ao carregar item:', error.response?.data || error.message)
        alert('Erro ao carregar os dados do item.')
      }
    }
    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <div className='wrapper-button'>
          <ButtonText icon title='voltar' />
        </div>

        {data && (
          <Dish className='dish'>
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />

            <DishContent>
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              {data.ingredients && (
                <div className='wrapper-tags'>
                  {data.ingredients.map(ing => (
                    <IngredientTag key={String(ing.id)} title={ing.name} />
                  ))}
                </div>
              )}

              {isAdmin ? (
                <>
                  <div className='wrapper-quantity'>
                    <Button
                      className='mobile-only
                      btn-order-details
                      btn-order-admin-mobile'
                      title='Editar prato'
                    />
                    <Button
                      className='desktop-only btn-order-details
                      btn-order-admin-desktop'
                      title='Editar prato'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='wrapper-quantity'>
                    <QuantityItem quantity={quantity} setQuantity={setQuantity} />
                    <Button
                      className='mobile-only
                      btn-order-details
                      btn-order-user-mobile'
                      icon
                      title={`pedir ∙ R$ ${data.price * quantity}`}
                    />
                    <Button
                      className='desktop-only btn-order-details
                      btn-order-user-desktop'
                      icon
                      title={`incluir ∙ R$ ${data.price * quantity}`}
                    />
                  </div>
                </>
              )}
            </DishContent>
          </Dish>
        )}
      </main>
      <Footer />
    </Container>
  )
}
