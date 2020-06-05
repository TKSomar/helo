import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    getAllPosts(){

    }

    resetSearch(){
        
    }

    render() {
        return (
            <div>
                <p>This is the Dashboard Component.</p>
            </div>
        )
    }
}