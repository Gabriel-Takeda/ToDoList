import './global.css'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { SectionItems } from './components/SectionItems'
import { ContainerHome } from './components/ContainerHome'

function App() {
  return (
    <ContainerHome>
      <Header/>
      <Form/>
    </ContainerHome>
  )
}

export default App
