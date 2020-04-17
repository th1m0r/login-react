import './pages/template/dependencies'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios';

import { validateToken } from './redux/user/user-actions'
import App from './App'
import Login from './pages/Login'

class AuthOrApp extends Component {

    componentDidMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            return <Login />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)