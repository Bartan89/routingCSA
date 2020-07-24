import React from "react"
import "./App.css"

import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage"

import { Switch, Route } from "react-router-dom"
function App() {
  function Hello() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about/something" component={Hello} />
        <Route path="/discover" component={DiscoverMoviesPage} />
      </Switch>
      <Route path="/about" component={AboutPage} />
    </div>
  )
}

export default App
