import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);


    const nameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non empty values).'
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        const user = {
			name: userName,
			age: age,
            id: Math.random().toString(),
		};

		props.onAddUser({ ...user });

        setUserName('');
        setAge('');
    }

    const clearErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClearError={clearErrorHandler} />}
            
            <Card className={styles.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={userName} onChange={nameChangeHandler} type="text" />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
        
    );
}

export default AddUsers;
