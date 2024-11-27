import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handler for the "SignUp/Login" click
  const handleLoginSignupClick = () => {
    navigate('/LoginSignup'); // Navigate to the LoginSignup page
  };

  return (
    <div className="nav">
      <div className="nav-logo">Ev-T-Pravin</div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
        <li 
          className="nav-Sl"
          onClick={handleLoginSignupClick} // Attach the click handler
        >
          SignUp/Login
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
