import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishItem } from '../../components/DishItem'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'
import { Container, Form, Image, Category } from './styles'

export function New({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Header />

      <main>
        <header id='header-new'>
          <ButtonText className='buttonText' icon title='voltar' />
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
                {/* <DishItem value='Pão Naan' size={value?.length || 1} /> */}
                <DishItem value='Pão Naan' size={6 || 1} />
                <DishItem value='alface' size={3 || 1} />
                <DishItem value='Tangerina' size={6 || 1} />
                <DishItem placeholder='Adicionar' isNew size={5} />
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
            <Button id='btn-salvar' type='submit' title='Salvar alterações' />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
