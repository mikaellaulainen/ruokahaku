import { useState } from "react"

import Result from "./components/Result"

import foodService from './services/food'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const App = () =>{
  const [search,setSearch]= useState('')
  const [result,setResult] = useState([])

  const getResult= (e) => {
    e.preventDefault()
    console.log(search)
    foodService.getData(search).then(res => {
      setResult(res)
    },[])
  }

  return (
    <div className="App">
      <h1 className="text-center m-3">Ruokahaku</h1>
      <Form onSubmit={getResult} className="bg-info rounded-3 col-lg-6 col-md-8 col-sm-10 mx-3 mx-sm-auto mt-3 p-3">
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
