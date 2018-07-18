import React, {Component} from 'react'
import '../App.css';

export default class TodoItem extends Component {

    check = (e)=>{
        // console.log(e.target.id);
        this.props.handleCheck(e.target.id);
    }

    modify = (e)=>{
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    }

    handleKeyPress = (e) => {
        let keycode = (e.keyCode? e.keyCode:e.which);
        if(keycode == '13'){
            // e.target.blur();
            e.target.setAttribute('contentEditable', false);
            this.props.listModify(e.target.id, e.target.innerText);

        }
    }

    render(){
        return (
            <li id={this.props.id}
                className={this.props.complete?"checked":""}
                onDoubleClick={(e)=>this.modify(e)}
                onKeyPress={(e)=>this.handleKeyPress(e)}>
                <input
                    id={this.props.id}
                    type="checkbox"
                    checked={this.props.complete?"checked":""}
                    onChange={(e)=>this.check(e)} />
                {this.props.content}
            </li>
        );
    }
}