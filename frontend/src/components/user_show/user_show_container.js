import { connect } from 'react-redux';
import { requestPlaylists, deletePlaylist } from '../../actions/playlist_actions';
import { requestUser } from "../../actions/user_actions"
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
    return ({
        userId: ownProps.match.params.userId,
        playlists: Object.values(state.entities.playlists),
        user: state.entities.users
    })
}

const mDTP = (dispatch) => {
    return ({
        requestPlaylists: userId => dispatch(requestPlaylists(userId)),
        deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
        requestUser: userId => dispatch(requestUser(userId))
    })
}

export default connect(mSTP, mDTP)(UserShow)