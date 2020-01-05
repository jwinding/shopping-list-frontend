import React, { Component } from 'react';

import Form from './Form'; 
import ShoppingList from './ShoppingList';
import Summary from './Summary';


class App extends Component{

  constructor(props){
    super(props); 
    this.state = {
      list : [ 
        {name:"Milk" , cost:12.3},
        {name: "Bananas" , cost: 20},
     ] , 
      summary : {
        mostExpensive: {
            "name": "urs",
            "cost": 1233.0,
            "id": 4
        },
        cheapest: {
            "name": "Microsoft",
            "cost": 10.5,
            "id": 2
        },
        totalCost: 1243.5
    }, 
      loaded : false, 
    }; 

    this.deleteItem = this.deleteItem.bind(this); 
    this.submitItem = this.submitItem.bind(this); 
  }

  render() {
    return (
      <div className="App">
          <div className="container">
                <h1 class="mb-3 mt-3 display-3">Shopping list</h1> 
            <div className="row">
              <div className="col-sm">
              <Form
                  handleSubmit = {this.submitItem}  
                  list = {this.state.list } 
                  removeItem = {this.deleteItem}  /> 
                {/* <ShoppingList list = {this.state.list } removeItem = {this.deleteItem} /> */}
              </div>
              <div className="col-md-auto">
                <Summary summary={this.state.summary} loaded = {this.state.loaded} />
              </div>
            </div>

        


            
          </div> 
      </div>
    );
  }

  componentDidMount(){
    this.getSummary();
    this.getList();  
  }


  getList(){
    const url = "http://localhost:8080";
    fetch(url)
      .then( result => result.json() )
      .then( result => {
        this.setState({
          list: result, 
        }) 
      })
  }

  getSummary(){

    const url = "http://localhost:8080/summary";
    fetch(url)
      .then( result => result.json() )
      .then( result => {
        this.setState({
          summary: result, 
          loaded: true,
        })
      })

  }

  
  getData(){
    const url = "http://localhost:8080";
    fetch(url)
      .then( result => result.json() )
      .then( result => {
        this.setState({
          list: result, 
        }); 
        this.getSummary(); 
      })

  }

  submitItem(item){
    // console.log('submitted an item!'); 
    // console.log(item); 
    const url = "http://localhost:8080/";
    fetch(url, { 
      method: 'post',
      headers: {'Content-Type': 'application/json',
    'transfer-encoding':'chunked' },
      body: JSON.stringify( { "name" : item.name, "cost": item.cost } ) , 
    })
      .then( result => result.json() )
      .then( result => {
        // console.log(result); 
        this.getData(); 
      })
  }

  deleteItem(index){ //important to use the index of the actual object,
                      // not its place in the displayed list! 
    const url = "http://localhost:8080/" + index;
    fetch(url, { 
      method: 'delete',
      headers: {'Content-Type': 'application/json'} })
      .then( result => result.json() )
      .then( result => {
        console.log(result); 
        this.getData(); 
      })
  }

}


export default App;
