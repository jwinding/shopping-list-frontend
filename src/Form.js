import React, { Component } from 'react';
import ShoppingList from './ShoppingList'; 

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }

class Form extends Component{


    constructor(props) {
        super(props);
        this.initialState = { 
            name: '',
            cost: 0, 
        };
        this.state = this.initialState; 
    }

    handleChange = event => { 
        const {name, value } = event.target; 
        this.setState({
            [name]: value, 
        }); 
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
    
    render() {
        const {name, cost} = this.state; 
        const {list, removeItem} = this.props; 
        return (
            <form>
                <table className="table">
                    <TableHeader /> 
                   
                    <ShoppingList list = {list } removeItem = {removeItem} />
                        {/* <label for="name">Item</label> */}
                    <tbody>
                        <tr>
                            <td> 
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="form-control" 
                                    placeholder="Item" aria-label="item"
                                    value={name}
                                    onChange={this.handleChange} />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="cost"
                                    id="cost"
                                    className="form-control" 
                                    placeholder="0" aria-label="cost"
                                    value={cost}
                                    onChange={this.handleChange} />
                            </td>
                            <td>
                                <input type="button" 
                                className = "btn btn-primary"
                                value="Add item" onClick={this.submitForm} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        ) 
    }

}

export default Form; 