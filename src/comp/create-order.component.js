import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);

        this.onChangeTable = this.onChangeTable.bind(this);
        this.onChangeMenu = this.onChangeMenu.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            table: 0,
            menu: '',
            date: new Date(),
            users: [],
        }
    }
    
    componentDidMount() {
        this.setState({
            users: ['test user'],
            table: 1
        })

        axios.get('http://localhost:5000/tables/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.table),
                        table: response.data[0].table
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeTable(e) {
        this.setState({
            table: e.target.value
        });
    }
    
    onChangeMenu(e) {
        this.setState({
            menu: e.target.value
        });
    }
    
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
    
        const order = {
            table: this.state.table,
            menu: this.state.menu,
            date: this.state.date
        }
    
        // console.log(order);

        axios.post('http://localhost:5000/orders/add', order)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    
    
    render() {
        return (
            <div className="container">
                <h3> <ion-icon name="add-circle"></ion-icon>Add Order</h3>
                <hr></hr>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group"> 
                        <label> Table #: </label>
                        <select ref="userInput" required className="form-control" value={ this.state.table } onChange={ this.onChangeTable }>
                            {
                                this.state.users.map(function(table) {
                                    return <option key={ table } value={ table }> { table } </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>Menu: </label>
                        <input type="text" required className="form-control" value={ this.state.menu } onChange={ this.onChangeMenu } />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Summit Order" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}