import React from 'react';
import ReactDOM from 'react-dom';
import { API_ENDPOINT } from "../API/api.dev";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class AdminDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderid: "",
            equipmentid: "",
            customerid: "",
            employeeid: "",
            contactformid: "",
            incidentid: "",
        }
    }
    deleteOrder() {
        let self = this;
        let orderid = this.state.orderid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderid
            })
        }
        fetch(API_ENDPOINT + "/delete_orders.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    orderid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteEquipment() {
        let self = this;
        let equipmentid = this.state.equipmentid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                equipmentid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_equipment.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    equipmentid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteCustomer() {
        let self = this;
        let customerid = this.state.customerid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_customers.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    customerid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteemployee() {
        let self = this;
        let employeeid = this.state.employeeid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employeeid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_employee.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    employeeid: "",
                })
            })
            .catch(err => console.log(err))
    }
    deletecontactform() {
        let self = this;
        let contactformid = this.state.contactformid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contactformid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_contactform.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    contactformid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteincident() {
        let self = this;
        let incidentid = this.state.incidentid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                incidentid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_incident.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    incidentid: "",
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col-3 col-12-medium">
                            <div class="fields">
                                <div class="field half">
                                    <label> Order ID</label>
                                    <input type="text" name="orderid" id="orderid" value={this.state.orderid} onChange={(e) => this.setState({ "orderid": e.target.value })} />
                                </div>
                                <ul class="actions">
                                    <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteOrder()} /></li>
                                </ul>
                            </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Equipment ID</label>
                                <input type="text" name="equipmentid" id="equipmentid" value={this.state.equipmentid} onChange={(e) => this.setState({ "equipmentid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteEquipment()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Customer ID</label>
                                <input type="text" name="customerid" id="customerid" value={this.state.customerid} onChange={(e) => this.setState({ "customerid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteCustomer()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Employee ID</label>
                                <input type="text" name="employeeid" id="employeeid" value={this.state.employeeid} onChange={(e) => this.setState({ "employeeid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteemployee()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Contact Form ID</label>
                                <input type="text" name="contactformid" id="contactformid" value={this.state.contactformid} onChange={(e) => this.setState({ "contactformid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deletecontactform()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Incident Form ID</label>
                                <input type="text" name="incidentid" id="incidentid" value={this.state.incidentid} onChange={(e) => this.setState({ "incidentid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteincident()} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AdminDelete;
