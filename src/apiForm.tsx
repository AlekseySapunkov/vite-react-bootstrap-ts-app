
import axios from "axios";
const postFormApi = async (data: object) => {
  try {
    const response = await axios.post('http://localhost:5100/form', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
  } catch (error) {
    console.error(error);
  }
}
export default postFormApi;
