import Routes  from "./Router"
import { GlobalCss }  from "./Global"
import { UserProvider } from "./Context/user"

function App() {
  return <UserProvider>
  <GlobalCss/>
  <Routes/>
  </UserProvider>
  
}

export default App
