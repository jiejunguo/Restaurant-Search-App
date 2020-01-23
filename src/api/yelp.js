import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MrOo0fEf7GyH3Xcw18wcu8gQ3IOCrJGdWxwOuQ5xiKUnOurIpytSmIsyWhBgCO0vAn9ysUfa2qW56OT7SVPswSVVxMDaaqup3km0fILGdZ0wN474yH5A1c0YNI4mXnYx"
  }
});
