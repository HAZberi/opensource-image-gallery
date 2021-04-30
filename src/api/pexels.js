import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "563492ad6f917000010000019e71e1aa2ee241b6bc94a04ca1ca38a9",
  },
});