import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'bbf0bffa05a549e39c48ccd3be0f31a9'
    }
})