import React, {Component} from 'react'
import '../App.css';

export default class TodoItem extends Component {

    modify = (e)=>{
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    }

    handleKeyPress = (e) => {
        let keycode = (e.keyCode? e.keyCode:e.which);
        if(keycode == '13'){
            // e.target.blur();
            e.target.setAttribute('contentEditable', false);
            this.props.onModify(e.target.id, e.target.innerText);
        }
    }

    render(){
        const{item, onCheckItem} = this.props;
        const id = item.id;
        const complete = item.complete;
        const text = item.text;
        return (
            <li id={id}
                className={complete?"checked":""}
                onDoubleClick={(e)=>this.modify(e)}
                onKeyPress={(e)=>this.handleKeyPress(e)}>
                <input
                    type="checkbox"
                    checked={complete?"checked":""}
                    onChange={()=>onCheckItem(id)} />
                {text}
            </li>
        );
    }
}