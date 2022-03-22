import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-items">
      <IoIosArrowBack className="arrow" />
      <h3 className="date">2022</h3>
      <p className="header-text">Countries&apos;s COVID-19 Data</p>
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
