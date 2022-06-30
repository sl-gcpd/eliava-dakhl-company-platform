import './App.css';
import {HomePage} from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import APIService from "./APIService";
import {useEffect, useState} from "react";
import {Search} from "./components/Search";

const App = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        APIService.GetAllProducts().then((resp) => {
            setProducts(resp);
        })
    }, [])

    const singleBtnClicked = (searchInput, priceFilters, categoryFilters) => {
        const types = new Map(Object.entries(categoryFilters));
        const dict = {
            "Common": "CM",
            "Finishing": "FS",
            "Box": "BX",
            "Roofing": "RF",
            "Masonry": "MS",
            "Double Headed": "DH",
            "Drywall": "DW",
            "Annual Ring Shank": "RS",
            "Carpet": "CP",
            "Staple": "ST"
        }
        let type = '';
        types.forEach((value, key) => {
            if (value === true) {
                type += dict[key];
                type += "_";
            }
        });
        type.slice(0, -1);
        let qp = ``;
        if (searchInput !== "")
            qp += `kword=${searchInput}&`;
        if (priceFilters[0] !== "")
            qp += `priceFrom=${priceFilters[0]}&`
        if (priceFilters[1] !== "")
            qp += `priceTo=${priceFilters[1]}`
        if (type !== '')
            qp += `&type=${type}`;
        APIService.GetFilteredProducts(qp).then((resp) => {
            setProducts(resp);
        })
    }

    return (
        <div className="container">
            <div className="menu-search">
                <Header/>
                <Search searchBtnClicked={singleBtnClicked}
                        categories={["Common", "Finishing", "Box", "Roofing", "Masonry", "Double Headed", "Drywal", "Annual Ring Shank", "Carpet", "Staple"]}/>
            </div>
            <HomePage products={products} setProducts={setProducts}/>
            <Footer/>
        </div>
    );
}

export default App;
