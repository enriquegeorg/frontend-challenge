import './Header.css';

function Header({ children }) {
  return (
    <>
      <header className="headerContainer">
        <div className="imgContainer">
          <img src="/logo.png" alt="Gofind" />
        </div>
      </header>
      <body>
        {children}
      </body>
    </>
  );
}

export default Header 