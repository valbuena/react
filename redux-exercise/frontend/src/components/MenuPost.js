import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import ThumbsOK from 'react-icons/lib/ti/thumbs-ok'
import ThumbsKO from 'react-icons/lib/ti/thumbs-down'
import Trash from 'react-icons/lib/ti/trash'
import Detail from 'react-icons/lib/ti/document-text'
import Edit from 'react-icons/lib/ti/edit'
import FormPost from './FormPost'
import {addVotePost, removeVotePost, removePost} from '../actions/posts'

class DetailPost extends Component {

  state = {
    editPostOpen : false
  }

  clickAddVotePost(id){
    this.props.addVote(id)
  }

  clickRemoveVotePost(id){
    this.props.removeVote(id)
  }

  clickDeletePost(id){
    this.props.removePost(id)
    if (this.props.idUrl !=='' || this.props.categoryUrl===''){
      this.props.history.push("/")
    } else {
      this.props.history.push("/" + this.props.categoryUrl)
    }
  }

  clickDetailPost(id, category){
    this.props.history.push("/" + category + "/" + id)
  }

  openEditPost(){
    this.setState({ editPostOpen: true })
  }

  closeEditPost= () => this.setState(() => ({ editPostOpen: false }))

  render(){
    const {post} = this.props
    return (

        <div className = 'menu-post'>

          <FormPost isOpen={this.state.editPostOpen} close={this.closeEditPost} post={post}/>

          <button  onClick={() => this.clickDeletePost(post.id)}>
              <Trash size={30}/>
          </button>
          {(this.props.idUrl ==='') &&
            <button onClick={() => this.clickDetailPost(post.id, post.category)}>
                <Detail size={30}/>
            </button>
          }
          <button onClick={() => this.openEditPost()}>
              <Edit size={30}/>
          </button>
          <button onClick={() => this.clickAddVotePost(post.id)}>
              <ThumbsOK size={30}/>
          </button>
          <button onClick={() => this.clickRemoveVotePost(post.id)}>
              <ThumbsKO size={30}/>
          </button>

        </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    post: ownProps.post,
    categoryUrl : ('category' in ownProps.match.params)?ownProps.match.params.category:'',
    idUrl : ('postId' in ownProps.match.params)?ownProps.match.params.postId:''
  }
}

function mapDispatchToProps (dispatch){
  return {
    addVote : (id) => dispatch(addVotePost(id)),
    removeVote : (id) => dispatch(removeVotePost(id)),
    removePost : (id) => dispatch(removePost(id))
  }
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps) (DetailPost));
