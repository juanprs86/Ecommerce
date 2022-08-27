import logo from '../NavBar/logo.png';
import '../NavBar/navbar.css';
import CartWidget from './CartWidget';

const navbar = () => {
    return (
        <div className="navbar-container">
            <img width={`130px`} src={logo} alt="logo" />           
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>              
            </ul> 
            <CartWidget />          
        <div>           
        <button className="login-button">Login</button>
            </div>
        </div>
    )
}

export default navbar        
                
                
                
                
                
                
            
            