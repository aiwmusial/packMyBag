import { Routes, Route } from "react-router-dom"
import  { Container } from "react-bootstrap"
import { Home } from "./pages/Home.tsx" 
import { Clothes } from "./pages/Clothes.tsx"
import { Navbar } from "./components/Navbar.tsx"
import { PackingListProvider } from "./context/PackingListContext.tsx"


function App() {

  return (
    <PackingListProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
      </Container>
    </PackingListProvider>
  )
}

export default App
