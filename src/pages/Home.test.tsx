import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Home from "./Home"

describe("Home component", () => {
  it("renders brand name", () => {
    render(<Home />)
    expect(screen.getByText("UsahaPro")).toBeInTheDocument()
  })

  it("renders main heading", () => {
    render(<Home />)
    expect(
      screen.getByText(/Masa Depan Digital/i)
    ).toBeInTheDocument()
  })

  it("renders pricing section", () => {
    render(<Home />)
    expect(
      screen.getByText("Pilih Paket Terbaik")
    ).toBeInTheDocument()
    expect(screen.getByText("Basic")).toBeInTheDocument()
    expect(screen.getByText("Business")).toBeInTheDocument()
    expect(screen.getByText("Entrepreneur")).toBeInTheDocument()
  })

  it("toggles mobile menu", () => {
    render(<Home />)

    const toggleButton = screen.getByRole("button", { name: /toggle navigation/i })

    const menu = screen.getByTestId("mobile-menu")

    expect(menu.className).toContain("max-h-0")
    fireEvent.click(toggleButton)
    expect(menu.className).toContain("max-h-96")
  })

  it("renders contact section", () => {
    render(<Home />)
    expect(
      screen.getByText("Mari Berkolaborasi")
    ).toBeInTheDocument()
    expect(
      screen.getByText(/hello@usahapro.co.id/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Subang, Jawa Barat/i)
    ).toBeInTheDocument()
  })

  it("renders contact form with inputs and submit button", () => {
    render(<Home />)

    const nameInput = screen.getByPlaceholderText("Nama lengkap")
    const emailInput = screen.getByPlaceholderText("email@example.com")
    const companyName = screen.getByPlaceholderText("Nama perusahaan")
    const messageTextarea = screen.getByPlaceholderText("Ceritakan tentang usaha Anda...")
    const submitButton = screen.getByRole("button", { name: /kirim pesan/i })

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(companyName).toBeInTheDocument()
    expect(messageTextarea).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: "Rama" } })
    fireEvent.change(emailInput, { target: { value: "rama@example.com" } })
    fireEvent.change(companyName, { target: { value: "Tim Code Workshop" } })
    fireEvent.change(messageTextarea, { target: { value: "Halo, saya mau kerja sama" } })

    expect(nameInput).toHaveValue("Rama")
    expect(emailInput).toHaveValue("rama@example.com")
    expect(companyName).toHaveValue("Tim Code Workshop")
    expect(messageTextarea).toHaveValue("Halo, saya mau kerja sama")

    fireEvent.click(submitButton)

    expect(submitButton).toBeEnabled()
  })

  it("renders footer", () => {
    render(<Home />)
    expect(
      screen.getByText(/© 2025 UsahaPro/i)
    ).toBeInTheDocument()
  })
})
