import { Container } from './styles'

import { Item } from '../Item'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'


export function Section({ title }) {
  return (
    <Container>
      <h3>{title}</h3>

      <div className='carousel'>
        <div className='fade-left'> </div>
        <div className='fade-right'> </div>

        <button type='button' className='arrow'>
          <PiCaretLeftBold size={27} />
        </button>

        <Item
          title='Spaguetti Gambe'
          description='Massa fresca com camarões e pesto.'
          price={79.97}
        />

        <Item
          title='Torradas de Parma'
          description='Presunto de parma e rúcula em um pão com fermentação natural.'
          price={25.97}
        />

        <Item
          title='Spaguetti Gambe'
          description='Massa fresca com camarões e pesto.'
          price={79.97}
        />

        <Item
          title='Torradas de Parma'
          description='Presunto de parma e rúcula em um pão com fermentação natural.'
          price={25.97}
        />

        <button type='button' className='arrow'>
          <PiCaretRightBold size={27} />
        </button>
      </div>
    </Container>
  )
}
