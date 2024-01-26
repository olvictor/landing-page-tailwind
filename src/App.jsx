
import './App.css'
import ContainerPrincipal from './components/containerPrincipal/ContainerPrincipal'
import Header from './components/header/Header'

function App() {

  return (
    <div className='bg-background-color h-screen px-40 py-10'>
      <Header />
      <ContainerPrincipal />
    </div>
  )
}

export default App
