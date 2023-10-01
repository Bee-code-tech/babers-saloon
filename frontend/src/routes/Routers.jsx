import {Routes, Route} from 'react-router-dom'
import {Home,Blog, About, Contact, SignUp, SignIn} from '../pages'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/blog' element={<Blog/>} />
    </Routes>
  )
}

export default Routers