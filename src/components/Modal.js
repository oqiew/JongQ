import React, { Component } from "react"
import { Button, Modal, Center, NativeBaseProvider } from "native-base"
import { useState } from "react"
import { isEmpty } from "./Method"

export class ModelJongQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: true
        }
    }
    Close() {
        if (!isEmpty(this.props.action)) {
            this.props.action()
        }
        this.setState({
            showModal: false
        })
    }
    render() {
        const { title, text, action } = this.props;
        return (
            <>
                <Modal isOpen={this.state.showModal} onClose={this.Close.bind(this)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>{title}</Modal.Header>
                        <Modal.Body>
                            {text}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group variant="ghost" space={2}>
                                <Button
                                    onPress={this.Close.bind(this)}
                                >
                                    ตกลง
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default ModelJongQ