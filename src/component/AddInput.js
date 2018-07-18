import React, {Component} from 'react'
import '../App.css';
export default class AddInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',
        }
    }
    handleChange = (e)=> {
        this.setState({
            input:e.target.value
        })
    }

    addInput = (e)=>{
        if(this.state.input !== ""){
            this.props.add(this.state.input);
            this.setState({input:''})
        }
    }
    render() {
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" value={this.state.input} onChange={this.handleChange}/>
                <div id="button" onClick={this.addInput}>Add</div>
            </div>
        );
    }
}