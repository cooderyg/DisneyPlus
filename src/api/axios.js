import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "1609961e6087bc908a47717d3912b94c",
        language: "ko-KR"
    }
})

export default instance;