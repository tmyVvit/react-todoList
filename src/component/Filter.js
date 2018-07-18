import React, {Component} from 'react'
import '../App.css';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: this.props.currentFilter,
        }
    }
    changeFilter = (e)=>{
        this.props.handleFilter(e);
    }
    render(){
        return (
            <li>
                <a href={this.props.href}
                    data-filter={this.props.id}
                    id={this.props.id}
                    className={this.props.className}
                    onClick={(e)=>this.changeFilter(e)}>
                    {this.props.id}
                </a>
            </li>
        );
    }
}