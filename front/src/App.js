import './App.css';
import {HomePage} from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="container">
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;
