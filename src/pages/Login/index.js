import './styles.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../../redux/user/user-actions'

import logo from '../../assets/watchguru.png'
class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = e => {
        const { username, password } = this.state;
        const { login } = this.props;
        login({ username, password });
    }
    handleKeyUp = e => {
        var k = e.which || e.keyCode;
        if (k === 13) {
            this.handleSubmit();
        }
    }

    render() {

        const { username, password } = this.state;
        return (
            <div className="login-form col-xs-10 offset-xs-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4">
                <header>
                    <h1><img className="img-fluid" src={logo} alt="Logo" /></h1>
                    <h2 className="text-center">Entre com seu <b>usuário</b> e <b>senha</b></h2>
                </header>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-user" /></div>
                        </div>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            className="form-control"
                            placeholder="Usuário"
                            autoComplete="off"
                            onChange={e => this.setState({ ...this.state, username: e.target.value })} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-key" /></div>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className="form-control"
                            placeholder="Senha"
                            autoComplete="off"
                            onKeyUp={this.handleKeyUp}
                            onChange={e => this.setState({ ...this.state, password: e.target.value })} />
                            
                    </div>
                </div>
                <button type="button"
                    onClick={() => this.handleSubmit()}                    
                    className="btn btn-primary col-xs-12 col-sm-12">ENTRAR</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Login)