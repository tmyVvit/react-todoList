import React, {Component} from 'react'
import '../App.css';

export default class List extends Component {


    render(){
        let list = this.props.list;
        let listInfo = [];
        list.map(item=>{
            listInfo.push(<li id={item.id} class={item.complete?"checked":""}>
                <input type="checkbox"  checked={item.complete?"checked":""} onClick={(id)=>this.check(id)} />
                {item.content}
            </li>)
        })
        return (
            <ol>
                {listInfo}
            </ol>
        );
    }
}