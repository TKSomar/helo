import React, {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleTitleChange(){

    }

    handleImgChange(){

    }

    handleContentChange(){
        
    }

    render() {
        return (
            <div className="Form">
            <Nav></Nav>
                <p>This is the Form Component.</p>
            </div>
        )
    }
}