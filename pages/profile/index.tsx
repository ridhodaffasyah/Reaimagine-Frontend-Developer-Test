import { useEffect, useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({});

    const getProfile = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Use token from localStorage
                },
            });
            const data = await response.json();
            setProfile(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Fetch user profile data here
        /* providing token in bearer */
        getProfile();
    }, []);

    console.log(profile)

    return (
        <div>
            <h1>Profile</h1>
            {/* <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p> */}
            {/* Add more profile information here */}
        </div>
    );
};

export default Profile;
