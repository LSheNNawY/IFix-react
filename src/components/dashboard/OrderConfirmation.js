import React from "react";
import {Modal, Container} from 'react-bootstrap'

export default function OrderConfirmation() {
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
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}
