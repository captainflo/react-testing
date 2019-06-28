import React from 'react';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';
import { changeAuth } from 'actions/index';

class App extends React.Component{
    renderButton(){
        if (this.props.auth){
          return  <button onClick={()=> this.props.changeAuth(false)}>Sign Out</button>
        } else {
            return <button onClick={()=> this.props.changeAuth(true)}>Sign In</button>
        }  
    }

    renderHeader(){
        return(
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/post'>Post</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    render(){
        return (
            <div>
                <div className="ui header">{this.renderHeader()}</div>
                <h4>Comment List</h4>
                <Route path='/post' component={CommentBox}/>
                <Route path='/' exact component={CommentList}/>
            </div>
        )
    } 
}

function mapStateToProps(state){
    return { auth: state.auth}
}

export default connect(mapStateToProps, {changeAuth})(App);