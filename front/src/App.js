import './App.css';
import './irakli_khotchava.jpg'
import {SingleItem} from "./components/SingleItem";
import {Search} from "./components/Search";
import {ListItem} from "./components/ListItem";

const image = require('./asdf.jpg')
const App = () => {
    const item = {
        name: "asdasdf",
        img: "./irakli_khotchava.jpg",
        price: 123
    }
    return (
        <div className="container">
            <SingleItem name="Ramaz" categories={['Dekan', 'Kamendant']} price={859.99}
                        description="very high quality eyebrows, very low quality LaTeX templates" img={image}/>

        </div>
    );
}

export default App;
