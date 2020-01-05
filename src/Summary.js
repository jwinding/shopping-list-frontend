import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


class Summary extends Component{

    render() {

        
        const {mostExpensive, cheapest, totalCost, isEmpty} = this.props.summary;  
        const {loaded} = this.props; 
        if(loaded && mostExpensive != null && cheapest!=null ){ 
            if(isEmpty){
                return (
                    <div className="card summary">
                        <div className = "card-body">
                            <h3 className="card-title">Summary</h3>
            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
            
                                <tbody>
                                    <tr>
                                        <td> Most expensive </td>
                                        <td>  </td>
                                        <td> 0 </td>
                                    </tr>
                                    <tr>
                                        <td> Cheapest </td>
                                        <td>  </td>
                                        <td> 0 </td>
                                    </tr>
                                    <tr>
                                        <td> Total cost </td>
                                        <td> </td>
                                        <td>0 </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Shopping cart is empty. </p>
                        </div>                        
                    </div>
                )
            } else {
                return (
                    <div className="card summary">
                        <div className = "card-body">
                            <h3 className="card-title">Summary</h3>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td> Most expensive </td>
                                        <td> {mostExpensive.name} </td>
                                        <td>
                                        <NumberFormat value= {mostExpensive.cost} 
                                            displayType={'text'} thousandSeparator={true}
                                            decimalScale={2} />
                                             </td>
                                    </tr>
                                    <tr>
                                        <td> Cheapest </td>
                                        <td> {cheapest.name} </td>
                                        <td>  
                                            <NumberFormat value= {cheapest.cost}
                                            displayType={'text'} thousandSeparator={true}
                                            decimalScale={2} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Total cost </td>
                                        <td> </td>
                                        <td>  
                                            <NumberFormat value= {totalCost}
                                            displayType={'text'} thousandSeparator={true}
                                            decimalScale={2} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) 
            }
        } else { 
            return (
            <div className="card summary">
            <div className = "card-body">
                <h3 className="card-title">Summary</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Cost</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> Most expensive </td>
                            <td> loading... </td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td> Cheapest </td>
                            <td> loading... </td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td> Total cost </td>
                            <td> </td>
                            <td>... </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> )
        }

    }

}

export default Summary; 