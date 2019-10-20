import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            inputValue:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleInputChange(e){
        this.setState({
          inputValue:e.target.value
        })
    }
    handleDelete(index){
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({list})
    }
    render(){
      return (
          <div>
              <div>
                  <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                  <button onClick={this.handleClick}>add</button>
              </div>
              <ul>
                  {
                     this.state.list.map((item,index)=>{
                         return (<TodoItem 
                            delete={this.handleDelete} 
                            content={item} 
                            key={index} 
                            index={index}/>
                         )
                     }) 
                  }
              </ul>
          </div>
      )
  }
}

export default TodoList;
