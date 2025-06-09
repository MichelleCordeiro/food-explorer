import { normalizePriceInput } from './utils'

export function validateBaseDishFields({ name, category, ingredients, newIngredient, price, description }) {
  const errors = {}

  if (!name) errors.name = 'Digite o nome do item.'
  if (!category) errors.category = 'Selecione a categoria do item.'
  if (!ingredients || ingredients.length === 0)
    errors.ingredients = 'Informe pelo menos um ingrediente.'
  if (newIngredient?.trim())
    errors.newIngredient = 'Você esqueceu de adicionar um ingrediente digitado.'
  if (!price || price === 'R$ 0,00')
    errors.price = 'Digite o preço do item.'
  if (!description) errors.description = 'Digite uma descrição.'

  return errors
}

export function validateNewDish(data) {
  console.log('data: ', data)

  const errors = validateBaseDishFields(data)

  if (!data.image) {
    errors.image = 'Selecione a imagem do item.'
  }

  return errors
}

export function validateEditDish(data) {
  const errors = validateBaseDishFields(data)

  const { newImage, originalFilename } = data

  if (!newImage && !originalFilename) {
    errors.image = 'Selecione a imagem do item.'
  }

  return errors
}
