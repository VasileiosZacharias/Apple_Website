import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'
import { navLists } from '../../constants'

describe('Navbar', () => {
  it('renders all nav list items', () => {
    render(<Navbar />)
    navLists.forEach(item => {
      expect(screen.getByText(item)).toBeTruthy()
    })
  })
})
