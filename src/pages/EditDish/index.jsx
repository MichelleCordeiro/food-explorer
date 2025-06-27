import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { PiUploadSimple, PiCaretDown } from 'react-icons/pi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { DishIngredient } from '../../components/DishIngredient'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { ErrorMessage } from '../../components/ErrorMessage'

import { useAuth } from '../../hooks/auth'
import { useDishForm } from '../../hooks/useDishForm'
import { formatPriceToBRL } from '../../utils/utils'
import { api } from '../../services/api'

import { Container, Form, Image, Category } from './styles'

export function EditDish() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const navigate = useNavigate()
  const params = useParams()

  const {
    name,
    setName,
    category,
    setCategory,
    price,
    setPrice,
    description,
    setDescription,
    ingredients,
    setIngredients,
    newIngredient,
    setNewIngredient,
    newImage,
    setNewImage,
    filename,
    setFilename,
    originalFilename,
    setOriginalFilename,
    errors,
    handleChangePrice,
    handleAddImage,
    handleAddIngredient,
    handleRemoveIngredient,
    validate,
    formatDataForSubmit,
    hasChanged,
    setInitialData
  } = useDishForm({ isEdit: true })

  async function handleEditDish(event) {
    event.preventDefault()

    if (!isAdmin) {
      return (
        alert('Apenas administradores podem editar itens.'),
        navigate('/')
      )
    }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) return

    const { name, category, price, description, ingredients } = formatDataForSubmit()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('description', description)
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
      alert(error.response?.data?.message || 'Não foi possível atualizar o item.')
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

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const { data } = await api.get(`/dishes/${params.id}`)

        setName(data.name)
        setCategory(data.category)
        setPrice(formatPriceToBRL(data.price))
        setDescription(data.description)

        setIngredients(data.ingredients.map(ing => ing.name))
        setOriginalFilename(data.image)

        setInitialData({
          name: data.name,
          category: data.category,
          price: data.price,
          description: data.description,
          ingredients: data.ingredients.map(ing => ing.name)
        })

      } catch (error) {
        console.error('Erro ao carregar item:', error.response?.data || error.message)
        alert('Erro ao carregar os dados do item.')
        navigate('/')
      }
    }
    fetchDishes()
  }, [params.id])

  return (
    <Container>
      <Header />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' onClick={handleBack} />
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
                  <input id='image' name='image' type='file' onChange={handleAddImage} />
                </div>
                <ErrorMessage errorMsg={errors.image} />
              </label>
            </Image>
            <Image className='wrapper wrapper-image desktop-only'>
              <label htmlFor='image'>
                Imagem do prato
                <div>
                  <PiUploadSimple size={24} />
                  <span>{filename || 'Selecione imagem'}</span>
                  <input id='image' name='image' type='file' onChange={handleAddImage} />
                </div>
                <ErrorMessage errorMsg={errors.image} />
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
              <ErrorMessage errorMsg={errors.name} />
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
              <ErrorMessage errorMsg={errors.category} />
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
              <ErrorMessage errorMsg={errors.ingredients} />
              <ErrorMessage errorMsg={errors.newIngredient} />
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
              <ErrorMessage errorMsg={errors.price} />
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
            <ErrorMessage errorMsg={errors.description} />
          </div>

          <div className='wrapper-button'>
            <Button
              className='btn-edit btn-delete'
              type='button'
              title='Excluir prato'
              onClick={handleDeleteDish}
            />

            <Button
              className='btn-edit btn-save'
              type='submit'
              title='Salvar alterações'
              disabled={!hasChanged}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
