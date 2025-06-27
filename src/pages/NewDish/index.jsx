import { useNavigate } from 'react-router-dom'

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
import { api } from '../../services/api'

import { Container, Form, Image, Category } from './styles'

export function NewDish() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const navigate = useNavigate()
  const dishForm = useDishForm()

  const {
    setName,
    category,
    setCategory,
    price,
    setDescription,
    ingredients,
    newIngredient,
    setNewIngredient,
    filename,
    errors,
    setErrors,
    handleChangePrice,
    handleAddImage,
    handleAddIngredient,
    handleRemoveIngredient,
    validate,
    formatDataForSubmit
  } = dishForm

  async function handleNewDish(event) {
    event.preventDefault()

    if (!isAdmin) {
      alert('Apenas administradores podem cadastrar itens.')
      return navigate('/')
    }

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const {
      name: formattedName,
      category: formattedCategory,
      price: formattedPrice,
      description: formattedDescription,
      ingredients: formattedIngredients,
      image
    } = formatDataForSubmit()


    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', formattedName)
    formData.append('category', formattedCategory)
    formData.append('price', formattedPrice)
    formData.append('description', formattedDescription)
    formData.append('ingredients', JSON.stringify(formattedIngredients))

    try {
      await api.post('/dishes', formData)
      alert('Item cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response?.data?.message || 'Não foi possível cadastrar o item.')
      }
    }
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <header id='header-new'>
          <ButtonText icon title='voltar' onClick={handleBack} />
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
                  <input
                    id='image'
                    name='image'
                    type='file'
                    onChange={handleAddImage}
                  />
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
                placeholder='Ex.: Salada Ceasar'
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
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={e => setDescription(e.target.value)}
            />
            <ErrorMessage errorMsg={errors.description} />
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
