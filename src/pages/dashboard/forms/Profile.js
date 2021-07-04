import { Button, Image, Modal } from "react-bootstrap";

const Profile = (props) => {
  const user = props.user;
  let show = props.show;

  const handleClose = () => {
    show = false;
    props.setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {user.picture ? (
            <Image
              src={"http://localhost:5000/uploads/users/" + user.picture}
              roundedCircle
              // width="120"
              // height="120"
              className="mr-2"
              style={{width: "300px", height: "300px"}}
            />
          ) : (
            <Image
              src={
                require("../../../assets/dashboard/img/faces/face-0.jpg")
                  .default
              }
              roundedCircle
              width="120"
              height="120"
              className="mr-2"
            />
          )}
          <Modal.Title>
            {user.firstName + " " + user.lastName}
            {user.role === "employee" ? (
              <span className="text-muted">
                <small>{user.profession}</small>
              </span>
            ) : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {user.phone}
          </p>
          {!user.dateOfBirth ?? (
            <p>
              <strong>Date of birth: </strong>
              {new Date(user.dateOfBirth).toDateString()}
            </p>
          )}
          <p>
            <strong>Address: </strong>
            {user.address}
          </p>
          <p>
            <strong>Status: </strong>
            <span
              className={
                user.status === "active"
                  ? "badge bg-success text-light"
                  : "badge bg-danger text-light"
              }
            >
              {user.status}
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
