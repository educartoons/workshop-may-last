import { ChangeEvent } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import AuthLookup from './AuthLookup'

describe('<AuthLookup />', () => {
  let email = ''

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    email = event.target.value
  }

  const { rerender } = render(
    <BrowserRouter>
      <AuthLookup
        email={email}
        handleChangeEmail={handleChangeEmail}
        handleNextStep={() => {}}
      />
    </BrowserRouter>
  )

  test('renders an input and a button disabled', () => {
    const input = screen.queryByRole('textbox')
    const button = screen.queryByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test('renders an input and a button disabled=false', async () => {
    rerender(
      <BrowserRouter>
        <AuthLookup
          email="email@email.com"
          handleChangeEmail={handleChangeEmail}
          handleNextStep={() => {}}
        />
      </BrowserRouter>
    )

    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })
})
