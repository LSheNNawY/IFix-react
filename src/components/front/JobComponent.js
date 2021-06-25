import React, { useState } from "react";
import dateFormat from "dateformat";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";

import { Modal, Button } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import { notify } from "../../helpers/generalFunctions";

import "react-toastify/dist/ReactToastify.css";

export default function JobComponent({ job }) {
    const [empJob, setEmpJob] = useState(job);

    const [showStartDateModal, setShowStartDateModal] = useState(false);
    const [showEndDateModal, setShowEndDateModal] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [price, setPrice] = useState(job.price);
    const [successMsg, setSuccessMsg] = useState(false);

    const handleShowStartModal = () => setShowStartDateModal(true);
    const handleCloseStartModal = () => setShowStartDateModal(false);

    const handleShowEndModal = () => setShowEndDateModal(true);
    const handleCloseEndModal = () => setShowEndDateModal(false);

    const handleShowPriceModal = () => setShowPriceModal(true);
    const handleClosePriceModal = () => setShowPriceModal(false);

    const handleSubmitStartDate = (e) => {
        axios
            .put(
                `${process.env.REACT_APP_API_URL}/jobs/${empJob._id}/updateStarted`,
                {
                    started_at: startDate,
                }
            )
            .then(({ data }) => {
                if (data.ok) {
                    setEmpJob({ ...empJob, started_at: startDate });
                    handleCloseStartModal();
                    setSuccessMsg(true);
                    notify("💥 Starting job .....", "success");
                } else {
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmitEndDate = (e) => {
        axios
            .put(
                `${process.env.REACT_APP_API_URL}/jobs/${empJob._id}/updateEnded`,
                {
                    ended_at: endDate,
                }
            )
            .then(({ data }) => {
                if (data.ok) {
                    setEmpJob({ ...empJob, ended_at: endDate });
                    handleCloseEndModal();
                    setSuccessMsg(true);
                    notify("💥 Job ended .....", "success");
                } else {
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmitPrice = (e) => {
        axios
            .put(
                `${process.env.REACT_APP_API_URL}/jobs/${empJob._id}/updatePrice`,
                {
                    price,
                }
            )
            .then(({ data }) => {
                if (data.ok) {
                    setEmpJob({ ...empJob, price });
                    handleClosePriceModal();
                    setSuccessMsg(true);
                    notify("💥 Price updated .....", "success");
                } else {
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="services__item">
            {/* start job modal */}
            <Modal
                show={showStartDateModal}
                onHide={handleCloseStartModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Start a job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DateTimePicker
                        minDate={new Date()}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                        }}
                        value={startDate}
                    />
                </Modal.Body>
                <Modal.Footer className="mt-4">
                    <Button variant="secondary" onClick={handleCloseStartModal}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(e) => handleSubmitStartDate(e)}
                    >
                        Start
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* end job modal */}
            <Modal
                show={showEndDateModal}
                onHide={handleCloseEndModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>End a job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DateTimePicker
                        minDate={new Date()}
                        selected={endDate}
                        onChange={(date) => {
                            setEndDate(date);
                        }}
                        value={endDate}
                    />
                </Modal.Body>
                <Modal.Footer className="mt-4">
                    <Button variant="secondary" onClick={handleCloseEndModal}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(e) => handleSubmitEndDate(e)}
                    >
                        End
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* price modal */}
            <Modal
                show={showPriceModal}
                onHide={handleClosePriceModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter price</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="number"
                        min={empJob.price}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer className="mt-4">
                    <Button variant="secondary" onClick={handleCloseEndModal}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(e) => handleSubmitPrice(e)}
                    >
                        End
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="col-xs-12 col-lg-8" style={{ margin: "auto" }}>
                {successMsg ? <ToastContainer /> : null}
                <div className="row job_container">
                    <div className="col-3">
                        <div className="services__item__icon  ">
                            <i className="fas fa-bolt"></i>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="services__item__text"></div>
                        <div className="dates">
                            <div className="row ">
                                <div className="col-6">
                                    <h4>
                                        Started At:
                                        <h6>
                                            {empJob.started_at ? (
                                                <i className="badge badge-success h6">
                                                    {dateFormat(
                                                        empJob.started_at,
                                                        "mmmm dS, yyyy - h:MM TT"
                                                    )}
                                                </i>
                                            ) : (
                                                <div>
                                                    <i className="badge badge-warning h6">
                                                        Pending
                                                    </i>
                                                    <span
                                                        onClick={
                                                            handleShowStartModal
                                                        }
                                                        className="mx-4 text-warning"
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        title="Start"
                                                    >
                                                        <i className="far fa-lg fa-edit"></i>
                                                    </span>
                                                </div>
                                            )}
                                        </h6>
                                    </h4>
                                </div>
                                <div className="col-6 ">
                                    <h4>
                                        Ended At:
                                        <h6>
                                            {empJob.ended_at ? (
                                                <i className="badge badge-success h6">
                                                    {dateFormat(
                                                        empJob.ended_at,
                                                        "mmmm dS, yyyy - h:MM TT"
                                                    )}
                                                </i>
                                            ) : (
                                                <div>
                                                    <i className="badge badge-warning h6">
                                                        Pending
                                                    </i>
                                                    <span
                                                        onClick={
                                                            handleShowEndModal
                                                        }
                                                        className="mx-4 text-warning"
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        title="Start"
                                                    >
                                                        <i className="far fa-lg fa-edit"></i>
                                                    </span>
                                                </div>
                                            )}
                                        </h6>
                                    </h4>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <span className="h4 d-block my-1">
                                            Price :
                                        </span>
                                        <i
                                            className={`${
                                                empJob.ended_at
                                                    ? "h6 badge badge-success"
                                                    : "h6"
                                            }`}
                                        >
                                            {empJob.price} EGP
                                        </i>

                                        {!empJob.ended_at ? (
                                            <span
                                                onClick={handleShowPriceModal}
                                                className="mx-4 text-warning"
                                                style={{
                                                    fontSize: "14px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <i className="far fa-lg fa-edit"></i>
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                                {/* <div className="col-6">
                                    <i
                                        className="far fa-edit"
                                        style={{
                                            fontSize: "30px",
                                            padding: "30px",
                                        }}
                                    ></i>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
