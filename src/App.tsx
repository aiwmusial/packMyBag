import { Routes, Route } from "react-router-dom"
import  { Container } from "react-bootstrap"
import { Home } from "./pages/Home.tsx" 
import { Clothes } from "./pages/Clothes.tsx"
import { Navbar } from "./components/Navbar.tsx"


function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
