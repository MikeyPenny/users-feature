import React from 'react';

import Card from '../UI/Card';
import UserItem from './UserItem';
import styles from './UsersList.module.css';

const UsersList = props => {
	let content = <p>Empty List.</p>;

	if (props.users.length > 0) {
		content = props.users.map((user, index) => (
			<UserItem
				key={user.id}
				name={user.name}
				age={user.age}
				userId={user.id}
				onDelete={props.onDelete}
			/>
		));
	}

	return (
		<Card className={styles.users}>
			<ul>{content}</ul>
		</Card>
	);
};

export default UsersList;
