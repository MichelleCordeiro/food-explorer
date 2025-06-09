import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishIngredient } from '../../components/DishIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { capitalizeFirstLetter, normalizePriceInput, formatPriceToBRL } from '../../utils/utils'
import { validateEditDish } from '../../utils/validateDish'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Image, Category, ErrorMessage } from './styles'

export function EditDish() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [newImage, setNewImage] = useState(null)
  const [filename, setFilename] = useState('')
  const [originalFilename, setOriginalFilename] = useState('')

  const [errors, setErrors] = useState({})

  const navigate = useNavigate()
  const params = useParams()

  function handleChangePrice(event) {
    let value = event.target.value
    value = value.replace(/\D/g, '')
    const floatValue = Number(value) / 100

    const formatted = formatPriceToBRL(floatValue)

    setPrice(formatted)
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    if (!file) return

    setNewImage(file)
    setFilename(file.name)
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === '') {
      alert('Digite algum ingrediente antes de adicionar')
      return
    }
    setIngredients(prevState => [...prevState, newIngredient.trim().toLowerCase()])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleEditDish(event) {
    event.preventDefault()

    if (!isAdmin) {
      return (
        alert('Apenas administradores podem cadastrar itens.'),
        navigate('/')
      )
    }

    const formattedName = capitalizeFirstLetter(name.trim())
    const formattedDescription = capitalizeFirstLetter(description.trim())

    const validationErrors = validateEditDish({
      name: formattedName,
      category,
      ingredients,
      newIngredient,
      price,
      description: formattedDescription,
      newImage,
      originalFilename
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const formattedPrice = normalizePriceInput(price)

    const formData = new FormData()
    formData.append('name', formattedName)
    formData.append('category', category)
    formData.append('price', formattedPrice)
    formData.append('description', formattedDescription)
    formData.append('ingredients', JSON.stringify(ingredients))

    try {
      await api.patch(`/dishes/${params.id}`, formData)

      if (newImage && newImage.name !== originalFilename) {
        const imgData = new FormData()
        imgData.append('image', newImage)

        await api.patch(`/dishes/${params.id}`, imgData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      }

      alert('Item atualizado com sucesso!')
      navigate('/')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o item.')
      }
    }
  }

  async function handleDeleteDish() {
    if (!isAdmin) {
      return (
        alert('Apenas administradores podem excluir itens.'),
        navigate('/')
      )
    }

    const confirm = window.confirm('Deseja realmente excluir o item?')

    if (!confirm) return

    try {
      await api.delete(`/dishes/${params.id}`)

      alert('Item excluído com sucesso!')
      navigate('/')

    } catch {
      alert('Erro ao excluir o item.')
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const { data } = await api.get(`/dishes/${params.id}`)
        setName(data.name)
        setCategory(data.category)
        setPrice(formatPriceToBRL(data.price))
        setDescription(data.description)
        setIngredients(data.ingredients.map(ing => ing.name))
        setOriginalFilename(data.image)
      } catch (error) {
        alert('Erro ao carregar os dados do prato.')
        navigate('/')
      }
    }
    fetchDish()
  }, [params.id, navigate])

  return (
    <Container>
      <Header />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' />
          <h1>Editar prato</h1>
        </header>

        <Form onSubmit={handleEditDish}>
          <div className='infos line-1'>
            <Image className='wrapper wrapper-image mobile-only'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>{filename || 'Selecione imagem para alterá-la'}</span>
                  <input id='image' name='image' type='file' onChange={handleChangeImage} />
                </div>
                <ErrorMessage>{errors.image}</ErrorMessage>
              </label>
            </Image>
            <Image className='wrapper wrapper-image desktop-only'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>{filename || 'Selecione imagem'}</span>
                  <input id='image' name='image' type='file' onChange={handleChangeImage} />
                </div>
                <ErrorMessage>{errors.image}</ErrorMessage>
              </label>
            </Image>

            <div className='wrapper wrapper-name'>
              <label htmlFor='name'>Nome</label>
              <Input
                id='name'
                name='name'
                type='text'
                value={name}
                placeholder='Salada Ceasar'
                onChange={e => setName(e.target.value)}
              />
              <ErrorMessage>{errors.name}</ErrorMessage>
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
              <ErrorMessage>{errors.category}</ErrorMessage>
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
              <ErrorMessage>{errors.ingredients}</ErrorMessage>
              <ErrorMessage>{errors.newIngredient}</ErrorMessage>
            </div>

            <div className='wrapper wrapper-price'>
              <label htmlFor='price'>Preço</label>
              <Input
                id='price'
                name='price'
                type='text'
                placeholder='R$ 00,00'
                value={price}
                onChange={handleChangePrice}
              />
              <ErrorMessage>{errors.price}</ErrorMessage>
            </div>
          </div>

          <div className='wrapper wrapper-textarea'>
            <label htmlFor='description'>Descrição</label>
            <Textarea
              id='description'
              name='description'
              value={description}
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={e => setDescription(e.target.value)}
            />
            <ErrorMessage>{errors.description}</ErrorMessage>
          </div>

          <div className='wrapper-button'>
            <Button
              className='btn-edit btn-delete'
              type='button'
              title='Excluir prato'
              onClick={handleDeleteDish}
            />

            <Button className='btn-edit btn-save' type='submit' title='Salvar alterações' />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
