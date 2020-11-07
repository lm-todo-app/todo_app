// import axios from "axios";
//
// const api = "http://localhost:8000/api/v1/";
// const loginURL = api + "login";
// const authURL = api + "token/auth";
// const usersURL = api + "users";
// // const userURL =  api + 'users/{0}'
//
// const cookie = this.getCookie("csrf_access_token");
// if (cookie) {
//   axios.defaults.headers.post["X-CSRF-TOKEN"] = cookie;
// }
//
// const login = (form) => {
//   axios
//     .post(loginURL, form)
//     .then(() => {
//       this.setState({ successOpen: true });
//       this.props.history.push("/");
//     })
//     .catch((error) => {
//       console.log(error.response);
//     });
// };
//
// const auth = () => {
//   axios
//     .post(authURL)
//     .then((resp) => {
//       this.setState({ isAuthenticated: true, isLoading: false });
//     })
//     .catch(() => {
//       this.setState({ isAuthenticated: false, isLoading: false });
//     });
// };
//
// const signup = (form) => {
//   axios
//     .post(usersURL, form)
//     .then(() => {
//       this.props.history.push("/");
//     })
//     .catch((error) => {
//       console.log(error.response);
//     });
// };
