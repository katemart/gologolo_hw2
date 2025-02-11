import React, { Component } from 'react'
import {Modal, Button} from 'react-materialize'

class DeleteConfirmModal extends Component {
    constructor(props) {
        super(props);

        console.log("Delete modal constructor")
    }

    render() {
        return (
        <div>
            <Modal
                actions={[
                    <Button className="teal lighten-1" style={{margin:2}} flat modal="close" node="button" 
                        onClick={this.props.deleteLogo}>Yes
                    </Button>,
                    <Button className="teal lighten-1" style={{margin:2}} flat modal="close" node="button" >No</Button>
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
                trigger={<Button style={{fontSize:30}}flat node="button">&#128465;</Button>}
            >
                <p style={{color: "#ef5350", fontSize:20}}>
                    This action can not be undone
                </p>
            </Modal>
        </div>
        )
    }
}

export default DeleteConfirmModal