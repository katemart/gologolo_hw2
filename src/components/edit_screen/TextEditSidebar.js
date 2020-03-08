import React, { Component } from 'react';
import LogoInputModal from '../modals/LogoInputModal';
import ErrorModal from '../modals/ErrorModal';
import Materialize from 'materialize-css';

class TextEditSidebar extends Component {
    componentDidMount = () => {
        console.log("TextEditSidebar did mount")
        let eModal = document.getElementById("errorModal");
        this.mInit = Materialize.Modal.init(eModal, {});
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.completeUserEditing(this.createObject("textColor", event.target.value));
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChange to " + event.target.value);
        this.completeUserEditing(this.createObject("fontSize", event.target.value));
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.completeUserEditing(this.createObject("backgroundColor", event.target.value));
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.completeUserEditing(this.createObject("borderColor", event.target.value));
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.completeUserEditing(this.createObject("borderRadius", event.target.value));
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChange to " + event.target.value);
        this.completeUserEditing(this.createObject("borderThickness", event.target.value));
    }

    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        this.completeUserEditing(this.createObject("padding", event.target.value));
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        this.completeUserEditing(this.createObject("margin", event.target.value));
    }

    handleEnterClick = (logoText) => {
        logoText = logoText.trim();
        for (let i = 0; i < logoText.length; i++) {
            logoText = logoText.replace(" ", "\u00a0");
        }
        console.log("handleEnterClick " + logoText);
        if (logoText.trim().length >= 1) {
            this.completeUserEditing(this.createObject("text", logoText));
        } 
        else {
            console.log("invalid name");
            this.mInit.open();
        }
    }

    // create function to change one property of logo at a time
    createObject(key, value) {
        const newObj = Object.assign({}, this.props.logo);      //deep copy of props.logo to newObj
        newObj[key] = value;                                    //object.key = value
        return newObj;
    }

    // accesses each object property at a time
    completeUserEditing = (obj) => {
        console.log("completeUserEditing");
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, obj.text,
            obj.textColor, obj.fontSize, obj.backgroundColor, obj.borderColor,
            obj.borderRadius, obj.borderThickness, obj.padding, obj.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "teal lighten-1 btn-small";
        let redoDisabled = !this.props.canRedo();
        let redoClass = undoClass;
        if (undoDisabled)
            undoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <ErrorModal/>
                <div className="card blue-grey darken-1 center-align">
                    <div className="card-content white-text">
                        <LogoInputModal logo={this.props.logo} onEnter={this.handleEnterClick}/>
                        <button className={undoClass} style={{margin:5}} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} style={{margin:5}} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.logo.text}</span>
                        <div className="row">
                            <div className="col s8">Color:</div>
                            <div className="col s4">
                                <input type="color"
                                    onChange={this.handleTextColorChange}
                                    value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Font Size:</div>
                            <div className="col s4">
                                <p>{this.props.logo.fontSize}</p>
                            </div>
                            <div className="col s12">
                                <input type="range" min="4" max="100"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Background Color:</div>
                            <div className="col s4">
                                <input type="color"
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Border Color:</div>
                            <div className="col s4">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Border Radius:</div>
                            <div className="col s4">
                                <p>{this.props.logo.borderRadius}</p>
                            </div>
                            <div className="col s12">
                                <input type="range" min="0" max="100"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Border Thickness:</div>
                            <div className="col s4">
                                <p>{this.props.logo.borderThickness}</p>
                            </div>
                            <div className="col s12">
                                <input type="range" min="0" max="100"
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Padding:</div>
                            <div className="col s4">
                                <p>{this.props.logo.padding}</p>
                            </div>
                            <div className="col s12">
                                <input type="range" min="0" max="100"
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8">Margin:</div>
                            <div className="col s4">
                                <p>{this.props.logo.margin}</p>
                            </div>
                            <div className="col s12">
                                <input type="range" min="0" max="100"
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar