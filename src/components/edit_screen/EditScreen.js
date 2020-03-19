// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
    }

    handleKeyUndoRedo = (event) => {
        // key codes: z = 90 and y = 89
        // command key = metaKey
        if (event.keyCode === 89 && (event.ctrlKey || event.metaKey)) {
            this.props.redoCallback();
        } else if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
            this.props.undoCallback();
        }
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container" onKeyDown={this.handleKeyUndoRedo} tabIndex="-1">
                <Navbar goToHomeCallback={this.props.goToHomeCallback}
                        deleteLogoCallback={this.props.deleteLogoCallback}
                        logo={this.props.logo}
                />
                <div className="row" >
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}    
                        redoCallback={this.props.redoCallback}  
                        canRedo={this.props.canRedo}                   
                    />
                    <TextEditWorkspace logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen