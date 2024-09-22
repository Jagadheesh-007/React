import axios from 'axios'
const API = "https://66e526d65cc7f9b6273c69ee.mockapi.io"
const getprojects = () => axios.get(`${API}/projects`);
export {getprojects}