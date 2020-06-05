import React, {Component} from 'react';
import Nav from '../Nav/Nav';

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
            <Nav />
        )
    }
}