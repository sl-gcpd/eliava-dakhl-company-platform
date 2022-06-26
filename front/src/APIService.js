export default class APIService {
    static GetAllProducts() {
        return fetch("http://127.0.0.1:8000/api/product", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }
    static GetProduct(id) {
        return fetch("http://127.0.0.1:8000/api/product/${id}", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }
}
