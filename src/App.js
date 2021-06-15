import React, { useState } from 'react';

import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
	const [users, setUsers] = useState([]);

  const addNewUserHandler = (user) => {
    setUsers(prevState => {
      const updatedUsers = [...prevState];
      updatedUsers.unshift({...user})
      return updatedUsers;
    })
  }

  const deleteUserHandler = (userId) => {
    
    setUsers(prevState => {
      const updatedUsers = prevState.filter(user => user.id !== userId);
      return updatedUsers;
    })
  }
  

	return (
		<div>
			<AddUser onAddUser={addNewUserHandler} />
			<UsersList users={users} onDelete={deleteUserHandler} />
		</div>
	);
}

export default App;
