import ContainerPrincipal from './components/containerPrincipal/ContainerPrincipal'
import Header from './components/header/Header'

function App() {

  return (
    <div className='bg-background-color h-max w-screen px-10 py-10 lg:px-40 md:w-full md:h-screen' >
      <Header />
      <ContainerPrincipal />
    </div>
  )
}

export default App
