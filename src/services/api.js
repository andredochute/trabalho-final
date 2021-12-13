import axios from 'axios'

const api = axios.create({
  baseURL: 'https://meuapp.andrlopes.repl.co/'
})

export default api