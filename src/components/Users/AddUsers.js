import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUsers = (props) => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');


    const nameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }

        if (+age < 1) {
            return;
        }
        console.log(userName, age);
        setUserName('');
        setAge('');
    }



    return (
        <Card className={styles.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" value={userName} onChange={nameChangeHandler} type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUsers;
