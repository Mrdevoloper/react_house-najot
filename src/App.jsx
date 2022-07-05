import { Routes, Route } from 'react-router-dom'
import Main  from './components/Main/Main'
import Admin from './components/Admin/Admin'
import HEADER from './components/Header/Header'
function App() {
    return(<>
	<HEADER></HEADER>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>)
}
export default App