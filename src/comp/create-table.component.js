import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTable extends Component {
    constructor(props) {
        super(props);

        this.onChangeTable = this.onChangeTable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            table: '',
        }
    }
    
    onChangeTable(e) {
        this.setState({
            table: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const table = {
            table: this.state.table,
        }
    
        // console.log(table);

        axios.post('http://localhost:5000/tables/add', table)
            .then(res => console.log(res.data));

        this.setState({
            table: '',
        });
    }

    render() {
        return (
            <div className="container">
                <h3> <ion-icon name="add-circle"></ion-icon> Add Table</h3>
                <hr></hr>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Table #: </label>
                        <input  type="text" required className="form-control" value={ this.state.table } onChange={ this.onChangeTable }
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Table" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        )
    }
}