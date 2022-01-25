import axios from "axios";

const instance = axios.create{
    baseURL: "https://newcrud-app.herokuapp.com/",
};
export default instance;