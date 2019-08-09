import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
    <tr>
        <td>{ props.order.table }</td>
        <td>{ props.order.menu }</td>
        <td>{ props.order.date.substring(0,10) }</td>
        <td>
            <Link to={"/edit/"+ props.order._id}>Edit Menu</Link> | <a href="#" onClick={() => { props.deleteOrder(props.order._id) }}>Finish</a>
        </td>
    </tr>
);

export default class OrdersList extends Component {
    constructor(props) {
        super(props);

        this.deleteOrder = this.deleteOrder.bind(this)

        this.state = {orders: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/orders/')
            .then(response => {
                this.setState({ 
                    orders: response.data 
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteOrder(id) {
        axios.delete('http://localhost:5000/orders/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            orders: this.state.orders.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.orders.map(currentOrder => {
            return <Order order={currentOrder} deleteOrder={this.deleteOrder} key={currentOrder._id}/>;
        })
    }

    render() {
        return (
            <div className="container">
                <h1> <ion-icon name="list-box"></ion-icon> Table Status</h1>
                <hr></hr>
                
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Table #</th>
                            <th>Menu</th>
                            <th>Date</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}