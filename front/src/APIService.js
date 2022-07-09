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

    static GetCartItems(id) {
        return fetch(`http://127.0.0.1:8000/cart/items?user=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static AddCartItem(body) {
        console.log(JSON.stringify(body))
        return fetch("http://127.0.0.1:8000/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((resp) => resp.json());
    }

    static GetUser(id, token) {
        console.log(token)
        return fetch(`http://127.0.0.1:8000/auth/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            auth: {
                "Token": token
            }
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
        formData.append("password", body.password)
        formData.append("password2", body.confirmPassword)
        formData.append("profilePicture", "")

        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/auth/register",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
        })
    }

    static Logout() {
        return fetch("http://127.0.0.1:8000/auth/logout", {
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
