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
        <div id="individualBlogPost" class="col-md-6 col-md-offset-3">
            {d.image ? <div className="blogHeader">
                <h2>{d.title}</h2>
                <h5><span className="glyphicon glyphicon-time"></span> Post by {d.author}, {d.date}.</h5>
                <h5><span className="label label-danger">Book</span> <span className="label label-primary">Review</span></h5><br/>
            </div> 
            :
            <div className="blogHeader2">
                <h2>{d.title}</h2>
                <h5><span className="glyphicon glyphicon-time"></span> Post by {d.author}, {d.date}.</h5>
                <h5><span className="label label-danger">Book</span> <span className="label label-primary">Review</span></h5><br/>
            </div>
            }
            {d.image ? <div className="blogImageContainer"><p className="blogImageContainer"><img className="blogImage" src={d.image} style={{margin: "20px"}}/></p></div> : <p/>}
            <p className="contentP" >{d.content}</p>
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
            <div id="blogBody">
                <br/>
                <div>
                    <center id="blogTitle"><h1>Welcome to my blog!</h1></center>
                    {this.renderBlogs(blogArray)}
                </div>
            </div>
        );
    }
}

export default Blog;