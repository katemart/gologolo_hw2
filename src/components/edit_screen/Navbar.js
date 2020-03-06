import React from 'react'
//import { Modal } from 'materialize-css';

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
    //const {key} = this.props.logo;
    // FOR DELETE: onClick={this.props.deleteLogoCallback.bind(this, key)}
    return (
      <nav>
        <div className="nav-wrapper">
          <div className='brand-logo'
            style={{ cursor: "pointer" }}
            onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li style={ {cursor: "pointer"} }>&#128465;</li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;