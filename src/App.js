import { useState } from "react"

import Result from "./components/Result"
import Navi from './components/Navbar'

import foodService from './services/food'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const App = () =>{
  const [search,setSearch]= useState('')
  const [result,setResult] = useState([])

  const getResult= (e) => {
    e.preventDefault()
    foodService.getData(search).then(res => {
      setResult(res)
    },[])
  }

  return (
    <div className="App">
      <Navi/>
      <Form onSubmit={getResult} className="bg-info rounded-3 col-lg-4 col-md-6 col-sm-8 mx-3 mx-sm-auto mt-3 p-3">
        <Form.Group>
          <InputGroup>
            <Form.Control value={search} onChange={({ target }) => setSearch(target.value)} type="text" placeholder="Etsi ruoka-aineen tai annoksen nimellä"/>
            <Button variant="dark">Hae</Button>
          </InputGroup>
        </Form.Group>
      </Form>
      <Result result={result}/>
    </div>
  )
}

export default App;
