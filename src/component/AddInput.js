import React, {Component} from 'react'
import '../App.css';
export default class AddInput extends Component {

    addInput = ()=>{
        
    }
    render() {
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" />
                <div id="button" onClick={this.addInput}>Add</div>
            </div>
        );
    }
}