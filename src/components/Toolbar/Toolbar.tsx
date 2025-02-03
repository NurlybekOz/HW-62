import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'

const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <NavLink to='/' className="navbar-brand"><img src={logo} className='logo' alt=""/></NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Info' className="nav-link">Info</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Contacts' className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;