import { useState } from 'react'
import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishIngredient } from '../../components/DishIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, Form, Image, Category } from './styles'

export function NewDish({ data, isAdmin, ...rest }) {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  return (
    <Container {...rest}>
      <Header isAdmin />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' />
          <h1>Novo prato</h1>
        </header>

        <Form>
          <div className='infos line-1'>
            <Image className='wrapper wrapper-image'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>Selecione imagem</span>
                  <input type='file' id='image' name='image' />
                </div>
              </label>
            </Image>

            <div className='wrapper wrapper-name'>
              <label htmlFor='name'>Nome</label>
              <Input type='name' id='name' name='name' placeholder='Ex.: Salada Ceasar' />
            </div>

            <Category className='wrapper wrapper-category'>
              <label>
                Categoria
                <select
                  name='selectCategory'
                  // value={category}
                  // options={options}
                  // onChange={e => setCategory(e.target.value)}
                >
                  <option value=''>Selecione</option>
                  <option value='meal'>Refeição</option>
                  <option value='dessert'>Sobremesa</option>
                  <option value='drink'>Bebida</option>
                </select>
                <PiCaretDown size={24} />
              </label>
            </Category>
          </div>

          <div className='infos line-2'>
            <div className='wrapper wrapper-ingredients'>
              <label htmlFor='ingredients'>Ingredientes</label>

              <div className='wrapper-items'>
                {ingredients.map((ingredient, index) => (
                  <DishIngredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    size={ingredient.length / 1.1}
                  />
                ))}
                <DishIngredient
                  placeholder='Adicionar'
                  isNew
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                  size={newIngredient.length / 1.1 || 5}
                />
              </div>
            </div>

            <div className='wrapper wrapper-price'>
              <label htmlFor='price'>Preço</label>
              <Input type='price' id='price' name='price' placeholder='R$ 00,00' />
            </div>
          </div>

          <div className='wrapper wrapper-textarea'>
            <label htmlFor='description'>Descrição</label>
            <Textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
          </div>

          <div className='wrapper-button'>
            <Button id='btn-save' type='submit' title='Salvar alterações' />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
