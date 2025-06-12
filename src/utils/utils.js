export function capitalizeFirstLetter(text) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatPriceToBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
}

export function normalizePriceInput(priceString) {
  if (!priceString || typeof priceString !== 'string') return 0

  const cleaned = String(priceString)
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace('R$', '')
    .replace(',', '.')

  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? 0 : parsed
}
