import item from '../../assets/items/image1.png'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { IngredientTag } from '../../components/IngredientTag'
import { QuantityItem } from '../../components/QuantityItem'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, Dish, DishContent } from './styles'

export function DishDetails({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Header />

      <main>
        <div className='wrapper-button'>
          <ButtonText className='buttonText' icon title='voltar' />
        </div>

        <Dish className='dish'>
          <img src={item} alt='Imagem do item' />

          <DishContent>
            <h1>Salada Ravanello</h1>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
            </p>

            <div className='wrapper-tags'>
              <IngredientTag title='alface' />
              <IngredientTag title='cebola' />
              <IngredientTag title='pão naan' />
              <IngredientTag title='pepino' />
              <IngredientTag title='rabanete' />
              <IngredientTag title='tomate' />
            </div>

            <div className='wrapper-quantity'>
              <QuantityItem />
              <Button
                className='btn-order-details'
                icon
                title='pedir ∙ R$ 25,00'
              />
            </div>
          </DishContent>
        </Dish>
      </main>
      <Footer />
    </Container>
  )
}
