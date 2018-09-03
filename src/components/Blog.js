import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogArray: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('/blogs/');
        console.log(res.data);
        this.setState({
            blogArray: res.data
        });
    }

    renderBlogs = (blogArray) => {
        const data = blogArray;
        const listItems = data.map((d) =>
        <div>
            <hr/>
            <h2>{d.title}</h2>
            <h5><span className="glyphicon glyphicon-time"></span> Post by {d.author}, {d.date}.</h5>
            <h5><span className="label label-danger">Book</span> <span className="label label-primary">Review</span></h5><br/>
            <p className="contentP">{d.content}</p>
            <br/>
            <br/>
        </div>
        );
        return (
            <div>
                {listItems}
            </div>
        );
    }

    render() {
        var blogArray = this.state.blogArray;

        return (
            <div id="blogBackground">
                <br/>
                <div>{/* <div className="col-sm-9"> */}
                    <h4><small>RECENT POSTS</small></h4>
                    {this.renderBlogs(blogArray)}
                </div>
            </div>
        );
    }
}

export default Blog;