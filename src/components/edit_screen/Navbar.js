import React from 'react'
import DeleteConfirmModal from '../modals/DeleteConfirmModal';

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
    console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
    console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  render() {
    //"linear-gradient(to bottom, #b8b808, #26a69a)"
    return (
      <nav>
        <div className="nav-wrapper" style={{backgroundImage: "linear-gradient(to bottom, #b8b808, #26a69a)"}}>
          <div className='brand-logo'
            style={{ cursor: "pointer", padding: 10 }}
            onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right">
            <li style={ {cursor: "pointer"} }>
              <DeleteConfirmModal deleteLogo={this.props.deleteLogoCallback.bind(this, this.props.logo.key)}/>
            </li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;