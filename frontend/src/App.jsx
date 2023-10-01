import { Home } from './pages'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Layout from './layouts/Layout'

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return (
   <Layout />
  )
}

export default App;