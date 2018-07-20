import * as fType from '../constants/FilterType'
import React, {Component} from 'react'
import '../App.css';

export default class Filter extends Component{

    render(){
        const {filterType, onSetFilter} = this.props;
        return (
            <div>
                <ul id="filters">
                <li>
                <a href="#"
                    data-filter={fType.ALL}
                    id={this.props.id}
                    className={filterType===fType.ALL?"selected":""}
                    onClick={()=>onSetFilter(fType.ALL)}>
                    All
                </a>
                <a href="#"
                    data-filter={fType.ACTIVE}
                    id={this.props.id}
                    className={filterType===fType.ACTIVE?"selected":""}
                    onClick={()=>onSetFilter(fType.ACTIVE)}>
                    ACTIVE
                </a>
                <a href="#"
                    data-filter={fType.COMPLETE}
                    id={this.props.id}
                    className={filterType===fType.COMPLETE?"selected":""}
                    onClick={()=>onSetFilter(fType.COMPLETE)}>
                    Complete
                </a>
            </li>
                </ul>
            </div>
            
        );
    }
}