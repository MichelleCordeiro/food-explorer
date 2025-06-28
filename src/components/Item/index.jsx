import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { QuantityItem } from '../QuantityItem'
import { Button } from '../Button'
import { PiHeart, PiPencilSimpleLight } from 'react-icons/pi'

import { useSearch } from '../../contexts/SearchContext'

import { Container, Cart } from './styles'

export function Item({ data, isAdmin }) {
  const [quantity, setQuantity] = useState(1)
  const { clearSearch } = useSearch()

  const navigate = useNavigate()

  function handleToEdit() {
    navigate(`/edit/${data.id}`)
    clearSearch()
  }

  function handleToDetails(id) {
    navigate(`/details/${id}`)
    clearSearch()
  }

  return (
    <Container $isAdmin={isAdmin}>
      {isAdmin ? (
        <>
          <div id='wrapper-heart'>
            <PiPencilSimpleLight size={'2.4rem'} onClick={handleToEdit} />
          </div>

          <div id='wrapper-infos' onClick={() => handleToDetails(data.id)}>
            <img src={data.src} alt='Foto do item' />

            <h3>{data.title}</h3>
            <span className='description desktop-only'>{data.description}</span>
            <span className='price'>{data.price}</span>
          </div>
        </>
      ) : (
        <>
          <div id='wrapper-heart'>
            <PiHeart size={'2.4rem'} />
          </div>

          <div id='wrapper-infos' onClick={() => handleToDetails(data.id)}>
            <img src={data.src} alt='Foto do item' />

            <h3>{data.title}</h3>
            <span className='description desktop-only'>{data.description}</span>
            <span className='price'>{data.price}</span>
          </div>

          <Cart>
            <QuantityItem quantity={quantity} setQuantity={setQuantity} />
            <Button className='btn-cart' title='incluir' />
          </Cart>
        </>
      )}
    </Container>
  )
}
