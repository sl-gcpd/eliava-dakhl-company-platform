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

    static Login(body) {
        return fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((resp) => resp.json());
    }

    static Register(body) {
        return fetch("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((resp) => resp.json());
    }

    static Logout() {
        return fetch("http://127.0.0.1:8000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static ChangePassword(body) {
        return fetch("http://127.0.0.1:8000/auth/change-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
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
