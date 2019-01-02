import axios from "axios";

export default axios.create({
	headers : {
		Authorization: "Client-ID b8ca0e264578e1ba30b9f455d7ca75bb973a9ee04351dae8b64f371e3aa6cd5a"
	},
	baseURL: "https://api.unsplash.com"
});