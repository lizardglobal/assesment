const Header = ({ title }) => {
    return (
      <header className="header text-center mt-3">
        <h1>{title}</h1>
      </header>
    );
  }

  Header.defaultProps = {
      title: 'Assessment',
  }
  
  export default Header;
  