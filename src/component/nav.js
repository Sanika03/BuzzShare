import "../styles/nav.css";

export const Nav = () => {
  
  const getTitle = () => <div className="app-heading">
    <img src="https://res.cloudinary.com/dnagcmyka/image/upload/v1687499676/BuzzShare_2_eosvva.png" className="app-logo" alt="App logo"/>
    <p className="app-title">BuzzShare</p>
  </div>

  return (
    <div className="main-nav">
      {getTitle()}
    </div>
  );
}