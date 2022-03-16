import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <IoIosArrowBack />
    <h2 className="date">3/16/2022</h2>
    <p className="header-text">Countries&apos;s COVID-19 Data</p>
    <span className="icons-mic">
      <BiMicrophone />
    </span>
    <span className="setting">
      <BiCog />
    </span>
  </div>
);

export default Navbar;
