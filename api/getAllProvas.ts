// Fetch ou Axios
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND;

const response = await axios.get(`${BASE_URL}/exams`);

export const ProvasArray = response.data;


//console.log(responseProvas.data);
