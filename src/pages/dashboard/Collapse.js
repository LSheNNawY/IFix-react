import React from "react";
import "../../styles/CollapseTable.css";
function CollapseTable({ professions }) {
    return (
        <>
            <div className="container">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Employee</div>
                        <div className="panel-body">
                            <table className="table table-condensed table-striped">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>DESCRIPTION</th>
                                    <th>IMAGE</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                {professions.map((item, index) => {
                                    return (
                                        <>
                                            <tr
                                                data-toggle="collapse"
                                                data-target={"#demo1"+index}
                                                class="accordion-toggle"
                                            >
                                                <td>
                                                    <button class="btn btn-default btn-xs">
                                                        <span class="glyphicon glyphicon-eye-open"></span>
                                                    </button>
                                                </td>
                                                <td>{index + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>{item.img}</td>
                                                <td>
                                                    <button className="btn btn-primary">EDIT</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="12" className="hiddenRow">
                                                    <div className="accordian-body collapse" id={"demo1"+index}>
                                                        <table className="table table-striped">
                                                            <thead>
                                                            <tr className="info">
                                                                <th>Title</th>
                                                                <th>Description</th>
                                                                <th>Price</th>
                                                            </tr>
                                                            </thead>

                                                            <tbody>
                                                            {
                                                                professions[index].services.map((service,i)=>{
                                                                    return (
                                                                        <>
                                                                            <tr data-toggle="collapse"  class="accordion-toggle">

                                                                                <td> {service.title}</td>
                                                                                <td> {service.description}</td>
                                                                                <td> {service.price}</td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CollapseTable;