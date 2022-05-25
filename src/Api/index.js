import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://peaceful-earth-04392.herokuapp.com",
});

export default fetcher;
