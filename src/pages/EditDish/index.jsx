import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishIngredient } from '../../components/DishIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'
import { Container, Form, Image, Category } from './styles'

export function EditDish({ data, isAdmin, ...rest }) {
  return (
    <Container {...rest}>
      <Header isAdmin />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' />
          <h1>Editar prato</h1>
        </header>

        <Form>
          <div className='infos line-1'>
            <Image className='wrapper wrapper-image mobile-only'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>Selecione imagem para alterá-la</span>
                  <input type='file' id='image' name='image' />
                </div>
              </label>
            </Image>
            <Image className='wrapper wrapper-image desktop-only'>
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
              <Input type='name' id='name' name='name' placeholder='Salada Ceasar' />
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
                {/* <DishIngredient value='Pão Naan' size={value?.length || 1} /> */}
                <DishIngredient value='Pão Naan' size={6 || 1} />
                <DishIngredient value='alface' size={3 || 1} />
                <DishIngredient value='Tangerina' size={6 || 1} />
                <DishIngredient placeholder='Adicionar' isNew size={5} />
              </div>
            </div>

            <div className='wrapper wrapper-price'>
              <label htmlFor='price'>Preço</label>
              <Input type='price' id='price' name='price' placeholder='R$ 40,00' />
            </div>
          </div>

          <div className='wrapper wrapper-textarea'>
            <label htmlFor='description'>Descrição</label>
            <Textarea placeholder='A Salada César é uma opção refrescante para o verão.' />
          </div>

          <div className='wrapper-button'>
            <Button className='btn-edit btn-delete' type='submit' title='Excluir prato' />

            <Button className='btn-edit btn-save' type='submit' title='Salvar alterações' />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
