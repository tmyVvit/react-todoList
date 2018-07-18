import React, {Component} from 'react'
import '../App.css';

export default class List extends Component {

    check = (e)=>{
        // console.log(e.target.id);
        this.props.handleCheck(e.target.id);
    }

    filterExe = (elem) => {
        let filterType = this.props.filterType;
        if(filterType==="all") return true;
        if(filterType==="active") return !elem.complete;
        if(filterType==="complete") return elem.complete;
    }
    render(){
        let list = this.props.list;
        let listInfo = [];

        list.filter(this.filterExe).map(item=>{
            listInfo.push(<li id={item.id} className={item.complete?"checked":""}>
                <input id={item.id} type="checkbox"  checked={item.complete?"checked":""} onChange={(e)=>this.check(e)} />
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