import { describe, expect, vi, it, beforeAll, afterEach } from 'vitest'
import { api } from '../../lib/axios'
import { mockGifsData } from '../../../__tests__/mocks/api/mockGifsData'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Home } from '.'

describe('Page: Home', () => {
  beforeAll(async () => {
    // vai executar quando toda a plicação estiver pronta
  })
  afterEach(cleanup)

  it('should be field search empty', async () => {
    vi.spyOn(api, 'get').mockResolvedValue({ data: mockGifsData })

    render(<Home />)
    const searchInput = screen.getByTestId('form-send')
    const option = fireEvent.change(searchInput, '')

    expect(option).toBeTruthy()
  })

  it('should be submit form', async () => {
    render(<Home />)
    const form = screen.getByTestId('form-send')
    const input = screen.getByTestId('input')

    await userEvent.type(input, 'dog')
    fireEvent.submit(form)
    

    expect(input.value).toBe('dog')
  })
})
