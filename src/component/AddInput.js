import React, {Component} from 'react'
import '../App.css';
export default class AddInput extends Component {
    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }

    addInput = ()=>{
        const input = this.inputText.current.value;
        console.log(input)
        if(input !== "")
            this.props.onAddItem(input);
    }
    render() {
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" ref={this.inputText}/>
                <div id="button" onClick={this.addInput}>Add</div>
            </div>
        );
    }
}