import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/nav-bar';
import Users from './components/users/users';
import Search from './components/users/search';
import axios from 'axios';
import Alert from './components/layout/alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/about';
import User from './components/users/user';
class App extends Component {
    state = {
        users: [],
        loading: false,
        alert: null,
        user: {},
        repos: []
    };
    //   	async componentDidMount() {
    //     // good place for adding rest request here to initialize data
    // 		this.setState({loading: true});
    // 		const users = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    // 					${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // 		this.setState({users: users.data, loading: false});
    //   }


    // get users by inputing
    searchUsers = async (text) => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
		   			${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ users: res.data.items, loading: false });
    };

    //   get single user
    getUser = async (username) => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
				   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ user: res.data, loading: false });
    };

    //   clear users from state
    clearUsers = () => this.setState({ users: [], loading: false });

    //   create alear if user didn't input anything
    setAlert = (message, type) => {
        this.setState({ alert: { message, type } });
        setTimeout(() => this.setState({ alert: null }), 5000);
    };

    //get repos
    getUserRepos = async (username) => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
				   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ repos: res.data, loading: false });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar title="Github Finder" icon="fab fa-github" />
                    <div className="container">
                        <Alert alert={this.state.alert}></Alert>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={(props) => (
                                    <Fragment>
                                        <Search
                                            searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={
                                                this.state.users.length > 0
                                                    ? true
                                                    : false
                                            }
                                            setAlert={this.setAlert}
                                        ></Search>
                                        <Users
                                            loading={this.state.loading}
                                            users={this.state.users}
                                        />
                                    </Fragment>
                                )}
                            ></Route>
                            <Route
                                exact
                                path="/about"
                                component={About}
                            ></Route>
                            <Route
                                exact
                                path="/user/:login"
                                render={(props) => (
                                    <User
                                        {...props}
                                        getUser={this.getUser}
                                        getUserRepos={this.getUserRepos}
                                        user={this.state.user}
                                        repos={this.state.repos}
                                        loading={this.state.loading}
                                    ></User>
                                )}
                            ></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
