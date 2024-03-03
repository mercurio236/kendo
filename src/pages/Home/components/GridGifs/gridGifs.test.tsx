import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { mockGifsData } from '../../../../../__tests__/mocks/api/mockGifsData'
import { GridGifs } from './index'

describe('Component: GridGifs', () => {
  it('should be render data gifs', async () => {
    render(<GridGifs data={[mockGifsData]} />)

    expect(screen.findByText(/^3oEjHUkNtgL7kwrCmI/i))
  })

  it('should be render empty', () =>{
    render(<GridGifs data={[]} />)

    expect(screen.findByText('')).toBeTruthy()
  })
})
