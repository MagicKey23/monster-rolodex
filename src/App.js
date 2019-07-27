import React, {Component} from 'react';
import './App.css';
import {CardList} from './component/card-list-component'
import {SearchBox} from './component/search-box/search-box.component'
class App extends Component
{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }
  handlerChange = (e) => {
    this.setState({searchField:e.target.value},() => console.log(this.state))
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
        placeholder='search monster'
        handleChange={e => this.handlerChange(e)}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
