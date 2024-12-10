
import axios from "axios";
const postFormApi = async (data: object) => {
  try {
    const response = await axios.post('http://localhost:5100/form', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
export default postFormApi;
