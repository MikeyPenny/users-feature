import React from 'react';

const UserItem = props => {
	const onDeleteUser = () => {
		props.onDelete(props.userId);
	};

	return (
		<li onClick={onDeleteUser}>
			{props.name.charAt(0).toUpperCase() + props.name.slice(1)} (
			{props.age} Years Old)
		</li>
	);
};

export default UserItem;
