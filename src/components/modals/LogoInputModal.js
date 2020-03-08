import React, { Component } from 'react';
import {Modal, Button} from 'react-materialize';
import TextInput from 'react-materialize/lib/TextInput';

class LogoInputModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.logo.text
        }
    }

    handleLogoTextChange = (event) => {
        //console.log("handleLogoTextChange to " + event.target.value);
        this.setState({text: event.target.value});
    }

    handleEnterClick = (event) => {
        console.log("%c " + this.state.text, "color: yellow");
        this.props.onEnter(this.state.text);
    }

    render() {
        return (
        <div>
            <Modal
                actions={[
                    <Button className="teal lighten-1" flat modal="close" node="button" onClick={this.handleEnterClick}>Enter</Button>,
                    <Button className="red lighten-2" flat modal="close" node="button" >Close</Button>
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
                trigger={<Button style={{cursor: "pointer"}} node="button">&#9998;</Button>}
            >
                <TextInput
                    label="Logo Text"
                    onChange={this.handleLogoTextChange}
                    value={this.state.text}
                />
            </Modal>
        </div>
        )
    }
}

export default LogoInputModal