import React, { Component } from 'react';
import {Modal, Button} from 'react-materialize';
import TextInput from 'react-materialize/lib/TextInput';

class LogoInputModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.logo.text,
            isValid: this.props.logo.text
        }
    }

    handleLogoTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleEnterClick = (event) => {
        console.log(this.state.text);
        this.props.onEnter(this.state.text);
    }

    render() {
        let textValid = this.state.text.trim();
        let btnVisible = "teal lighten-1" + (textValid ? "" : " disabled"); 
        let errorVisible = (textValid ? " hidden" : " visible");
        return (
        <div>
            <Modal
                actions={[
                    <Button className={btnVisible} style={{margin:2}} flat modal="close" node="button" onClick={this.handleEnterClick}>Enter</Button>,
                    <Button className="teal lighten-1" style={{margin:2}} flat modal="close" node="button" >Cancel</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Please input some text for your logo"
                id="modal-0"
                options={{
                    dismissible: false,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: () => this.setState({text: this.props.logo.text}),
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={
                <Button style={{cursor: "pointer"}} node="button">&#9998; 
                    <span className="hide-on-med-and-down"> EDIT LOGO TEXT</span>
                </Button>}>
                <TextInput
                    placeholder="Logo Text"
                    onChange={this.handleLogoTextChange}
                    value={this.state.text}/>
                <span style={{visibility: errorVisible, color: "#ef5350", fontSize: 20}}>Text must be at least one character or longer</span>
            </Modal>
        </div>
        )
    }
}

export default LogoInputModal