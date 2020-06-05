import React, {Component} from 'react';

export default class Post extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    getPostInfo(){
        
    }
    
    render() {
        return (
            <div>
                <p>This is the Post Component.</p>
            </div>
        )
    }
}