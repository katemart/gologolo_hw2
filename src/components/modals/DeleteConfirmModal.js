import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'

class DeleteConfirmModal extends Component {
    constructor(props) {
        super(props);

        console.log("Delete modal constructor")
    }

    handleYesClick = (event) => {
        console.log("yes click");
    }

    render() {
        return (
        <div>
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green" onClick={this.handleYesClick}>Enter</Button>,
                    <Button flat modal="close" node="button" waves="red" >No</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Are you sure you want to delete this logo?"
                id="modal-0"
                options={{
                    dismissible: false,
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
                trigger={<Button flat node="button">&#128465;</Button>}
            >
                <p>
                    This logo will not be retrievable
                </p>
            </Modal>
        </div>
        )
    }
}

export default DeleteConfirmModal