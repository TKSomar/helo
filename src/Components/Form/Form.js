import React, {Component} from 'react';

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
            <div>
                <p>This is the Form Component.</p>
            </div>
        )
    }
}