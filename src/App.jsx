import { RouteProvider } from "@routes/RouteProvider/RouteProvider"
import "@style/style.scss"

/**
 * App.
 * 
 * Purpose:
 * - Render the app with all providers.
 * 
 * @returns App with providers
 */
const App = () => {
  return (
    <RouteProvider/>
  )
}

export default App
