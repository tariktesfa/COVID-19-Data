import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-items">
      <IoIosArrowBack className="arrow" />
      <h2 className="date">2022</h2>
      <h4 className="header-text">Countries&apos;s COVID-19 Data</h4>
    </div>
    <div className="icons">
      <span className="icons-mic">
        <BiMicrophone />
      </span>
      <span className="setting">
        <BiCog />
      </span>
    </div>
  </div>
);

export default Navbar;
