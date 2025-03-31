import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import './Header.scss'


const Header = ({filterText,  onFilterTextChange}) => {
  

  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <NavBar />
      <SearchBar filterText={filterText}
        onFilterTextChange={onFilterTextChange}/>
    </header>
  );
};

export default Header;
