import * as React from "react"
import Footer from "./Footer"
import Header from './Header'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <>
      <Header>Este es el Header</Header>
      { children }
      <Footer>Este es el footer</Footer>
    </>
  )
}
