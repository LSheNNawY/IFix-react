import React from "react";
import {Modal, Container, Button} from 'react-bootstrap'

export default function OrderConfirmation({handleSubmit}) {
    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="show-grid">
                    <Container className="mt-3 w-100">
                        <p>test</p>
                        <Button onClick={handleSubmit}>Confirm</Button>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}
