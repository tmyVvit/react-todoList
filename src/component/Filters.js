import React, {Component} from 'react'
import '../App.css';
import Filter from './Filter';

export default class Filters extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: undefined,
            filterList:[{
                id: "all",
                class: "selected",
                href:"#"
            },
            {
                id: "active",
                class: "",
                href:"#"
            },
            {
                id: "complete",
                class: "",
                href:"#"
            }],
        }
    }
    handleFilter= (e)=>{
        let id = e.target.id;
        let filterList = this.state.filterList.map(elem=>{
            if(elem.id===id){
                elem.class = "selected";
            }else elem.class= "";
            return elem;
        });

        this.props.setFilter(id);
    }
    render(){
        let list = this.state.filterList.map(elem=>
            <Filter id={elem.id} 
                className={elem.class}
                href={elem.href}
                handleFilter={(e)=>this.handleFilter(e)} 
            />
        );
        
        return (
            <div>
                <ul id="filters">
                   {list}
                </ul>
            </div>
        );
    }
}