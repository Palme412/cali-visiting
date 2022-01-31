import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Notebox from './Notebox';
import Note from './Note';
// import registerServiceWorker from './registerServiceWorker';


// router.put('/note/:noteId', (req, res) => {
//     const { noteId } = req.params;
//     if (!noteId) {
//         return res.json({ success: false, error: 'No note id provided' });
//     }
//     Note.findById(noteId, (error, comment) => {
//         if (error) return res.json({ success: false, error });
//         const { text } = req.body;
//         if (text) note.text = text;
//         note.save(error => {
//             if (error) return res.json({ success: false, error });
//             return res.json({ success: true });
//         });
//     });
// });

// router.delete('/note/:noteId', (req, res) => {
//     const { noteId } = req.params;
//     if (!noteId) {
//         return res.json({ success: false, error: 'No note id provided ' });
//     }
//     Note.remove({ _id: noteId }, (error, note) => {
//         if (error) return res.json({ success: false, error });
//         return res.json({ success: true });
//     });
// });

const Profile = (props) => {
    const { handleLogout, user } = props;
    const { name, email, exp } = user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();

    // make a condition that compares exp and current time
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