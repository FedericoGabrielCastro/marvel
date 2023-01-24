import { RouteProvider } from "@routes/RouteProvider/RouteProvider"
import { Provider } from "react-redux"
import { store } from "./redux/store"
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
    <Provider store={store}>
      <RouteProvider/>
    </Provider>
  )
}

export default App
