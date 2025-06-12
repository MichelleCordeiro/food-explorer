export function validateBaseDish({ name, category, ingredients, newIngredient, price, description }) {
  const errors = {}

  if (!name.trim()) errors.name = 'Digite o nome do item.'
  if (!category) errors.category = 'Selecione a categoria do item.'
  if (!price || isNaN(price) || price=== 0)
    errors.price = 'Digite o preço do item.'
  if (!description.trim()) errors.description = 'Digite uma descrição.'
  if (ingredients.length === 0)
      errors.ingredients = 'Informe pelo menos um ingrediente.'
  if (newIngredient?.trim())
    errors.newIngredient = ' Você esqueceu de adicionar um ingrediente digitado.'

  return errors
}

export function validateNewDish(data) {
  const errors = validateBaseDish(data)

  if (!data.image) {
    errors.image = 'Selecione a imagem do item.'
  }

  return errors
}

export function validateEditDish(data) {
  const errors = validateBaseDish(data)

  const { newImage, originalFilename } = data
  const isUpdatingImage = newImage && newImage.name !== originalFilename

  if (!isUpdatingImage && !originalFilename) {
    errors.image = 'Selecione a imagem do item.'
  }

  return errors
}
