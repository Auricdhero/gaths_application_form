import axios from 'axios'

const sheetdb = axios.create({
  baseURL: 'https://sheetdb.io/api/v1/1awo7kmtjx9hi'
})

export default sheetdb