import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Notebox from './Notebox';
import Note from './Note';
import { BrowserRouter as Router } from 'react-router-dom';


const Profile = (props) => {
    const { handleLogout, user } = props;
    const { name, email, exp } = user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
    };


    const userData = user ?
        (<div>
            <section>
                <div className="columns has-same-height is-gapless">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-4">Profile</h3>

                                <div className="content">
                                    <table className="table-profile">
                                        <tbody>
                                            <tr>
                                                <td>Name: {name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email: {email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };


    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
            <Notebox />
        </div>
    );

}

export default Profile;