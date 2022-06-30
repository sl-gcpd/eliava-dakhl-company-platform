import axios from "axios";

export default class APIService {
    static GetAllProducts() {
        return fetch("http://127.0.0.1:8000/api/product", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetFilteredProducts(queryParameters) {
        return fetch(`http://127.0.0.1:8000/api/product/search?${queryParameters}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetProduct(id) {
        return fetch(`http://127.0.0.1:8000/api/product/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetUser(id) {
        return fetch(`http://127.0.0.1:8000/auth/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static LoginUser = async (body) => {
        console.log(body)
        const formData = new FormData()
        formData.append("email", body.email)
        formData.append("password", body.password)

        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/auth/login",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
        });
    }

    static RegisterUser(body) {
        const formData = new FormData()
        formData.append("email", body.email)
        formData.append("firstName", body.name)
        formData.append("password2", body.confirmPassword)
        formData.append("password", body.password)

        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/auth/register",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
        })
    }

    static Logout() {
        return fetch("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static UserDetails(id) {
        return fetch(`http://127.0.0.1:8000/auth/user/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }
}
