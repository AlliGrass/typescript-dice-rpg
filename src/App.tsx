import './App.css'
import { DefaultsProvider } from './contexts/DefaultsContext'
import BasePage from './pages/BasePage'

function App() {

  return (
    <DefaultsProvider>
        <BasePage/>
    </DefaultsProvider>
  )
}

export default App
