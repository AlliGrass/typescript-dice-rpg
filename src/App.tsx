import './App.css'
import { DefaultsProvider } from './contexts/DefaultsContext'
import { PlayerProvider } from './contexts/PlayerContext'
import BasePage from './pages/BasePage'

function App() {

  return (
    <DefaultsProvider>
      <PlayerProvider>
        <BasePage/>
      </PlayerProvider>
    </DefaultsProvider>
  )
}

export default App
