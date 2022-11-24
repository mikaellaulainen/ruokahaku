import axios from "axios"
const url= 'fineli/api/v1/foods?q='

const getData= ( name ) => {
  const req= axios.get(`${url}${name}`)
  return req.then(res => res.data)
}

export default { getData }