import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/Admin.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogArray: [],
            title: '',
            author: '',
            content: '',
            editBlog: false,
            editBlogData: ''
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
        const listItems = data.map((d, index) =>
            <tr key={d._id}>
                <td>{index}</td>
                <td>{d.title}</td>
                <td>{d.author}</td>
                <td className="ellipsis">{d.content}</td>
                <td>{d.date}</td>
                <td><a index={index} id={d._id} onClick={this.editBlogLoadData} href="#editBlog">Edit</a>|<a index={index} id={d._id} onClick={this.deleteBlog}>Delete</a></td>
            </tr>
        );
        return (
            <tbody id="adminTableBody">
                {listItems}
            </tbody>
        );
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleAuthorChange = (e) => {
        this.setState({ author: e.target.value })
    }

    handleContentChange = (e) => {
        this.setState({ content: e.target.value })
    }

    createBlog = async () => {
        const data = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content,
            date: new Date()
        };

        const header = {
            headers: {
                Authorization: `Bearer ${this.props.user}`
            }
        };

        try {
            const res = await axios.post("/blogs/createBlog", data, header);
            console.log(res.data);
            this.componentDidMount();
        } catch (e) {
            console.error(e);
        }
    }

    deleteBlog = async (e) => {
        let _id = e.target.id;
        console.log(_id);

        const header = {
            headers: {
                Authorization: `Bearer ${this.props.user}`
            }
        };

        try {
            const res = await axios.delete(`/blogs/deleteBlog/${_id}`, header);
            console.log(res.data);
            this.componentDidMount();
            <script>{alert("Blog successfully deleted!")}</script>;
        } catch (e) {
            console.error(e);
        }
    }

    editBlogLoadData = async (e) => {
        let _id = e.target.id;
        console.log(_id);

        const header = {
            headers: {
                Authorization: `Bearer ${this.props.user}`
            }
        };

        try {
            const res = await axios.get(`/blogs/editBlogLoadData/${_id}`, header);
            console.log(res.data);
            this.setState({ editBlog: true, editBlogData: JSON.parse(JSON.stringify(res.data)) });
        } catch (e) {
            console.error(e);
        }
    }

    renderBlogForEditing = () => {
        //console.log("Edit blog data: " + JSON.stringify(this.state.editBlogData));

        const editBlogDiv = (
            <form className="form-signup" name="editBlog">
                <label for="inputTitle" className="sr-only">Title</label>
                <input type="text" onChange={this.handleTitleChangeEdit} value={this.state.editBlogData.title} id="inputTitle" className="form-control" required />
                <label for="inputAuthor" className="sr-only">Author</label>
                <input type="text" onChange={this.handleAuthorChangeEdit} value={this.state.editBlogData.author} id="inputAuthor" className="form-control" required />
                <label for="inputContent" className="sr-only">Content</label>
                <textarea type="text" rows="10" onChange={this.handleContentChangeEdit} value={this.state.editBlogData.content} id="inputContent" className="form-control" required />
                <button className="btn btn-lg btn-primary btn-block" onClick={this.editBlog} type="button">Edit Blog</button>
            </form>
        );

        return (
            <div className="col-sm-9" id="editBlog" >
                <h4><small>EDIT BLOG POST</small></h4>
                {editBlogDiv}
                <br />
                <br />
            </div>
        );
    }

    handleTitleChangeEdit = (e) => {
        let editBlogData = Object.assign({}, this.state.editBlogData);    //creating copy of object
        editBlogData.title = e.target.value;                              //updating value
        this.setState({ editBlogData });
    }

    handleAuthorChangeEdit = (e) => {
        let editBlogData = Object.assign({}, this.state.editBlogData);    //creating copy of object
        editBlogData.author = e.target.value;                              //updating value
        this.setState({ editBlogData });
    }

    handleContentChangeEdit = (e) => {
        let editBlogData = Object.assign({}, this.state.editBlogData);    //creating copy of object
        editBlogData.content = e.target.value;                              //updating value
        this.setState({ editBlogData });
    }

    editBlog = async () => {

        const data = {
            title: this.state.editBlogData.title,
            author: this.state.editBlogData.author,
            content: this.state.editBlogData.content
        };

        const header = {
            headers: {
                Authorization: `Bearer ${this.props.user}`
            }
        };

        try {
            const res = await axios.put(`/blogs/editBlog/${this.state.editBlogData._id}`, data, header);
            console.log(res.data);
            this.componentDidMount();
            <script>{alert("Blog successfully updated!")}</script>;
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        var blogArray = this.state.blogArray;

        return (
            <div id="adminDiv">
                <br />
                <div className="col-sm-9" id="createBlog" >
                    <h4><small>CREATE A NEW BLOG POST</small></h4>
                    <form className="form-signup">
                        <label for="inputTitle" className="sr-only">Title</label>
                        <input type="text" onChange={this.handleTitleChange} id="inputTitle" className="form-control" placeholder="Title" required />
                        <label for="inputAuthor" className="sr-only">Author</label>
                        <input type="text" onChange={this.handleAuthorChange} id="inputAuthor" className="form-control" placeholder="Author" required />
                        <label for="inputContent" className="sr-only">Content</label>
                        <textarea type="text" rows="10" onChange={this.handleContentChange} id="inputContent" className="form-control" placeholder="Content" required />
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.createBlog} type="button">Create Blog</button>
                    </form>
                </div>
                <div className="col-sm-9">
                    <h4><small>POSTS</small></h4>
                    <div className="container" id="adminContainer">
                        {/* <div className="panel panel-default p50 uth-panel"> */}
                        <table className="table table-hover" id="adminTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Content</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {this.renderBlogs(blogArray)}
                        </table>
                        {/* </div> */}
                    </div>
                </div>
                {this.state.editBlog ? this.renderBlogForEditing() : <p />}
                <br />

            </div>
        );
    }
}

export default Admin;