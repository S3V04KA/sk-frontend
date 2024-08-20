import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <button><FontAwesomeIcon icon={faCircleUser} color='#36B93F' size='3x'/></button>
      <div className='search-container'>
        <input type="text" placeholder="Поиск" />
        <button><FontAwesomeIcon icon={faMagnifyingGlass} color='#36B93F' size='2x'/></button>
      </div>
      <button><FontAwesomeIcon icon={faBars} color='#36B93F' size='3x'/></button>
    </div>
  )
}

export default Header;