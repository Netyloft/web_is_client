import {Modal} from "react-bootstrap";

const ModalWindow = ({visible, handleClose, title, children}) => {
    return(
        <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
    )
};

export {ModalWindow};