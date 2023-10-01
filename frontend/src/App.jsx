import { Home } from './pages'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return (
    
      <Home />
   
  )
}

export default App;