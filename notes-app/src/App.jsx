
import {Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Archive } from './pages/archive'
import { Layout } from './layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element={<Home />} />      
          <Route path='/archive' element = {<Archive/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
