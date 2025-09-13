import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Login from "./Login"

describe("Login page", () => {
  it("renders login form correctly", () => {
    render(<Login />)

    const emailInput = screen.getByPlaceholderText("you@example.com")
    const passwordInput = screen.getByPlaceholderText("********")

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: "rama@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "conelo" } })

    expect(emailInput).toHaveValue("rama@example.com")
    expect(passwordInput).toHaveValue("conelo")

    const submitButton = screen.getByRole("button", { name: /masuk/i })
    expect(submitButton).toBeInTheDocument()

    expect(screen.getByText(/lupa password\?/i)).toBeInTheDocument()
    expect(screen.getByText(/daftar disini/i)).toBeInTheDocument()
    expect(screen.getByText(/kembali ke halaman awal/i)).toBeInTheDocument()
  })

  it("submits the form", () => {
    const handleSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())

    render(
      <form onSubmit={handleSubmit}>
        <Login />
      </form>
    )

    const submitButton = screen.getByRole("button", { name: /masuk/i })
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
