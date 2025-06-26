import React, { useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import app from '../firebaseConfig';
import './WaitlistForm.css';

const db = getFirestore(app);

const WaitlistForm = ({ inputRef }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            // Check if email already exists
            const q = query(collection(db, 'waitlist'), where('email', '==', email));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                setError('This email is already on the waitlist.');
                setLoading(false);
                return;
            }

            await addDoc(collection(db, 'waitlist'), {
                email,
                createdAt: serverTimestamp(),
            });
            setMessage("Thank you! You're on the list.");
            setEmail('');
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="waitlist-form-container">
            {!message && (
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Joining...' : 'Join waitlist'}
                    </button>
                </form>
            )}
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default WaitlistForm; 