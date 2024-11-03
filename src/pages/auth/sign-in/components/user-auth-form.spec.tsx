import { queryClient } from "@/lib/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from "react-router-dom"
import { expect } from "vitest"
import { UserAuthForm } from './user-auth-form'

describe('SignIn', () => {
  it('Should be able to view in the documento', async () => {
    const wrapper = render(<UserAuthForm />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        )
      }
    })

    expect(wrapper.getByPlaceholderText('name@example.com')).toBeInTheDocument();
    expect(wrapper.getByPlaceholderText('******')).toBeInTheDocument();
    expect(wrapper.getByRole('button', { name: 'Fazer login' })).toBeInTheDocument();
  })

  it('should display validation errors', async () => {
    const user = userEvent.setup()
    const wrapper = render(<UserAuthForm />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        )
      }
    })

    await user.click(wrapper.getByRole('button', { name: 'Fazer login' }))

    expect(wrapper.getByText('E-mail inválido')).toBeInTheDocument();
    expect(wrapper.getByText('A senha deve ter pelo menos 6 caracteres')).toBeInTheDocument();
  });
})