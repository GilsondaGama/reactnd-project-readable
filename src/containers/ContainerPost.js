import { connect } from 'react-redux';
import {
    voteForPost,
    fetchCommentsCount,
} from '../actions';


import SinglePost from '../components/SinglePost'

function mapStateToProps (state, ownProps) {
  return {}
}

export default connect(mapStateToProps, {
  voteForPost,
  fetchCommentsCount
})(SinglePost)
