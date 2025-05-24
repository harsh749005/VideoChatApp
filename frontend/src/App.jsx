import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import {SocketProvider} from './Providers/Socket'

function App() {

  return (
    <>
    <Routes>
      

      <Route path='/' element={<Home/>}/>
      
    </Routes>
    </>
  )
}

export default App
