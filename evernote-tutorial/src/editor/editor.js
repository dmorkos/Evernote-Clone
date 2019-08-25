import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }
    
    render() { 
        const {classes } = this.props
     return(
        <div className = {classes.EditorComponent}>
            <ReactQuill 
               value = {this.state.text} 
               onChange = {this.updateBody}>
             </ReactQuill>
        </div>
     );
    }
}
//withstyles returns another function 
//this.props
export default withStyles(styles)(EditorComponent)
