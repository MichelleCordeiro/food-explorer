import { useState, useMemo } from 'react'

import { capitalizeFirstLetter, formatPriceToBRL, normalizePriceInput } from '../utils/utils'
import { validateEditDish, validateNewDish } from '../utils/validateDish'

export function useDishForm({ isEdit = false } = {}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [newImage, setNewImage] = useState(null)
  const [filename, setFilename] = useState('')
  const [originalFilename, setOriginalFilename] = useState('')

  const [initialData, setInitialData] = useState(null)
  const [errors, setErrors] = useState({})

  function handleChangePrice(event) {
    let value = event.target.value
    console.log('value: ', value)
    console.log('typeof value: ', typeof(value))
    value = value.replace(/\D/g, '') // remove non-digit/non-number
    const floatValue = Number(value) / 100

    const formatted = formatPriceToBRL(floatValue)
    console.log('formatted: ', formatted)
    console.log('typeof value: ', typeof value)

    setPrice(formatted)
  }

  function handleAddImage(event) {
    const file = event.target.files[0]
    if (!file) return

    setNewImage(file)
    setFilename(file.name)
  }

  function handleAddIngredient() {
    const ingredTrimmedLower = newIngredient.trim().toLowerCase()

    if (!ingredTrimmedLower) {
      alert('Digite algum ingrediente antes de adicionar')
      return
    }

    if (ingredients.includes(ingredTrimmedLower)) {
      alert('Ingrediente já adicionado')
      setNewIngredient('')
      return
    }

    setIngredients(prev => [...prev, ingredTrimmedLower])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prev => prev.filter(ingredient => ingredient !== deleted))
  }

  function validate() {
    const fields = {
      name: capitalizeFirstLetter(name.trim()),
      category,
      price: normalizePriceInput(price),
      description: capitalizeFirstLetter(description.trim()),
      ingredients,
      newIngredient,
      image: newImage,
      newImage,
      originalFilename
    }

    const errors = isEdit ? validateEditDish(fields) : validateNewDish(fields)
    setErrors(errors)

    return errors
  }

  function formatDataForSubmit() {
    return {
      name: capitalizeFirstLetter(name.trim()),
      category,
      price: normalizePriceInput(price),
      description: capitalizeFirstLetter(description.trim()),
      ingredients,
      image: newImage
    }
  }

  const hasChanged = useMemo(() => {
    if (!isEdit || !initialData) return true

    const currentPrice = normalizePriceInput(price)

    return (
      name !== initialData.name ||
      category !== initialData.category ||
      currentPrice !== initialData.price ||
      description !== initialData.description ||
      ingredients.join(',') !== initialData.ingredients.join(',') ||
      !!newImage
    )
  }, [name, category, price, description, ingredients, newImage, initialData, isEdit])

  console.log('hasChanged: ', hasChanged)

  return {
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
    setErrors,
    setFilename,
    handleChangePrice,
    handleAddImage,
    handleAddIngredient,
    handleRemoveIngredient,
    validate,
    formatDataForSubmit,
    hasChanged,
    setInitialData
  }
}
