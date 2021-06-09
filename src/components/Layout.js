import * as React from "react"
import Footer from "./Footer"
import Header from './Header'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col content-between justify-between min-h-screen">
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}
