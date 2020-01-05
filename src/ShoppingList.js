import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

const TableBody = props => {
    if(props.list) { 
        const rows = props.list.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>
                    <NumberFormat value={row.cost} 
                    displayType={'text'} thousandSeparator={true}
                     decimalScale={2} />
                </td>
                <td> 
                    <input type="button" value="Delete" 
                    className="btn btn-danger"
                    onClick={() => props.removeItem(row.id)} />
                </td>
            </tr>
        )
        })
        return <tbody>{rows}</tbody>
    } else {
        return (
            <tr>
                <td>No items</td>
                <td>0 </td>
                <td></td>
            </tr> 
        ); 
    }
  }

class ShoppingList extends Component{

    render() {
        const {list, removeItem} = this.props ; 

        return (
            // <p>Shopping List works!</p>
            // <table className="table">
                <TableBody list = {list} removeItem={removeItem} /> 
            // </table>
        );
        
    }

}

export default ShoppingList; 