import CommentDate from './CommentDate'
import UserInfo from './UserInfo';
import CommentWrapper from '../UI/CommentWrapper';

function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo author={props.author} />
			<CommentWrapper className='UserInfo1'>{props.text}
			<CommentDate date={props.date} />
			</CommentWrapper>
		</div>
	)
}
export default Comment
