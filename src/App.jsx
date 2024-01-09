import './App.css'
import Card from './components/Card/Card'

function App() {


  return (
    <>
      
      <Card 
       desc='description1'
       imgUrl="/assets/download.jpg" 
       hover='blue'
      />
      <Card
       name='card2'
       desc='description2'
       imgUrl="/assets/download.jpg" 
       hover='green'
      />
      <Card
       name='card3'
       desc='description3'
       imgUrl="/assets/download.jpg" 
       hover='purple'
       />
    </>
  )
}

export default App
