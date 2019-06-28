import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component{

    renderComments(){
        return this.props.comments.map(comment=>{
           return <li key={comment}>{comment}</li> 
        });
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
    
}

function mapStateToPros(state){
    return {comments: state.comments}
}

export default connect(mapStateToPros)(CommentList);