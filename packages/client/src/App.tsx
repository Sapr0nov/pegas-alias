import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNavigation from './components/page-navigation/page-navigation';
import { Main } from './pages/main';
import { Login } from './pages/login/login';
import { SignUp } from './pages/sign-up/sign-up';
import NewGame from './pages/new-game';
import Profile from './pages/profile';
import Rules from './pages/rules';
import Leaders from './pages/leaders';

import './scss/style.scss';

export function App() {
  // useEffect(() => {
  //   // Предустановка я.практикум:
  //   // const fetchServerData = async () => {
  //   //   const url = `http://localhost:${__SERVER_PORT__}`
  //   //   const response = await fetch(url)
  //   //   const data = await response.json()
  //   //   console.log(data)
  //   // }
  //   //
  //   // fetchServerData()
  // }, [])
  return <div className="app">
    <Router>
      <PageNavigation />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/about" element={<Login/>}/>
        <Route path="/new-game" element={<NewGame/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/leaders" element={<Leaders/>}/>
      </Routes>
    </Router>
  </div>
}

