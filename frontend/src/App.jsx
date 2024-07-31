import React from 'react'
import { Container, Grid } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import './App.css'
import Contact from './pages/Contace/Contact'


const App = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
            <Header/>
            <div className='main-container'>
              <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </div>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
