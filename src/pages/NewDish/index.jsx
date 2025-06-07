import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishIngredient } from '../../components/DishIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Image, Category } from './styles'

export function NewDish({ data, ...rest }) {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [image, setImage] = useState(null)
  const [filename, setFilename] = useState('')

  const navigate = useNavigate()

  function handleAddIngredient() {
    if (newIngredient.trim() === '') {
      alert('Digite algum ingrediente antes de adicionar')
      return
    }
    setIngredients(prevState => [...prevState, newIngredient.trim()])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleAddImage(event) {
    const file = event.target.files[0]
    setImage(file)
    setFilename(file.name)
  }

  function validateNewDish({
    image,
    name,
    category,
    ingredients,
    newIngredient,
    price,
    description
  }) {
    const errors = []

    if (!image) errors.push('Selecione a imagem do item.')
    if (!name) errors.push('Digite o nome do item.')
    if (!category) errors.push('Selecione a categoria do item.')
    if (ingredients.length === 0) errors.push('Informe pelo menos um ingrediente.')
    if (newIngredient) errors.push('Você esqueceu de adicionar um ingrediente digitado.')
    if (!price) errors.push('Digite o preço do item.')
    if (!description) errors.push('Digite uma descrição.')

    return errors
  }

  async function handleNewDish(event) {
    event.preventDefault()

    if (!isAdmin) {
      return (
        alert('Apenas administradores podem cadastrar itens.'),
        navigate('/')
      )
    }

    const errors = validateNewDish({
      image,
      name,
      category,
      ingredients,
      newIngredient,
      price,
      description
    })

    if (errors.length) {
      return alert(errors.join('\n'))
    }

    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', name)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('ingredients', JSON.stringify(ingredients))

    try {
      await api.post('/dishes', formData)
      alert('Item criado com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar o item.')
      }
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' />
          <h1>Novo prato</h1>
        </header>

        <Form onSubmit={handleNewDish}>
          <div className='infos line-1'>
            <Image className='wrapper wrapper-image'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>{filename || 'Selecione imagem'}</span>
                  <input id='image' name='image' type='file' onChange={handleAddImage} />
                </div>
              </label>
            </Image>

            <div className='wrapper wrapper-name'>
              <label htmlFor='name'>Nome</label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Ex.: Salada Ceasar'
                onChange={e => setName(e.target.value)}
              />
            </div>

            <Category className='wrapper wrapper-category'>
              <label>
                Categoria
                <select
                  name='selectCategory'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option value=''>Selecione</option>
                  <option value='Refeição'>Refeição</option>
                  <option value='Sobremesa'>Sobremesa</option>
                  <option value='Bebida'>Bebida</option>
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
              <Input
                id='price'
                name='price'
                type='number'
                placeholder='R$ 00,00'
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className='wrapper wrapper-textarea'>
            <label htmlFor='description'>Descrição</label>
            <Textarea
              id='description'
              name='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className='wrapper-button'>
            <Button id='btn-save' type='submit' title='Cadastrar' />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
