import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

class ErrorModal extends Component {
    constructor(props) {
        super(props);

        console.log("Error modal constructor")
    }

    render() {
        return (
            <div>
                <Modal
                    actions={[
                        <Button flat modal="close" node="button" className="teal lighten-1">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Invalid logo text"
                    id="errorModal"
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                >
                    Text must be at least one character or longer
                </Modal>
            </div>
        )
    }
}

export default ErrorModal