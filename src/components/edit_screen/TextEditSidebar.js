import React, { Component } from 'react';
import LogoInputModal from '../modals/LogoInputModal';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);
        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: this.props.logo.text,
            textColor: this.props.logo.textColor,
            fontSize: this.props.logo.fontSize,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin
         }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            console.log("Updating State")
            this.setState({
                text: this.props.logo.text,
                textColor: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize,
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius,
                borderThickness: this.props.logo.borderThickness,
                padding: this.props.logo.padding,
                margin: this.props.logo.margin
            })
        }
    }

    componentDidMount = () => {
        console.log("TextEditSidebar did mount");
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }
    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChange to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }
    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }
    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }
    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChange to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }
    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    handleEnterClick = (logoText) => {
        logoText = logoText.trim();
        for (let i = 0; i < logoText.length; i++) {
            logoText = logoText.replace(" ", "\u00a0");
        }
        console.log("handleEnterClick " + logoText);
        this.setState({text: logoText}, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text,
            this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor,
            this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
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
                <div className="card blue-grey darken-1 center-align">
                    <div className="card-content white-text">
                        <LogoInputModal logo={this.props.logo} onEnter={this.handleEnterClick}/>
                        <button className={undoClass} style={{margin:5}} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} style={{margin:5}} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title" style={ {whiteSpace: "nowrap", 
                        overflow: "hidden", textOverflow: "ellipsis"} }>{this.props.logo.text}</span>
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