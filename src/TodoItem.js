import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){
     this.props.delete(this.props.index)//把index传给这个方法
    }
  render(){
      return (
          <div onClick={this.handleDelete}>{this.props.content}</div>
      )
  }
}

export default TodoItem;