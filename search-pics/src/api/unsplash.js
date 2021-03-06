import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID g8dQej2zQ2DYDQpqQqhmOK4LOeM0V9HeRsvCiUdfR8g",
  },
});
