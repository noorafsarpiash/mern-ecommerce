import Header from "./componets/Header"
import Title from "./componets/Title"
import Banner from "./componets/Banner"
import Sale from "./componets/Sale"
import Container from "./componets/Container"



function App() {


  return (
    <main>

      <Banner />
      <Container className="py-5 md:py-10">
        <Sale />
      </Container>
    </main>
  )
}

export default App
