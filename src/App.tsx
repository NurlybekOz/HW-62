import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import Info from "./containers/Info/Info.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

const App = () => {


    return (
        <>
            <header className="mb-5">
            <Toolbar />
        </header>
        <main className='container'>
            <Routes>
                <Route path="/"
                       element={(<Home/>)}></Route>
                <Route path="/Info"
                       element={(<Info/>)}></Route>
                <Route path="/Contacts"
                       element={(<Contacts/>)}></Route>
            </Routes>
        </main>

        </>
    )
};

export default App
