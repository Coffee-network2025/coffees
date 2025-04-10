import React, { useEffect, useState } from "react";
import { getUserData, updateUserData } from "../utils/api";

const UserPage = () => {
    const [userData, setUserData] = useState({});
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        // Загружаем данные пользователя при загрузке страницы
        getUserData().then((data) => {
            setUserData(data);
            setFormData({ name: data.name, email: data.email });
        });
    }, []);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        const response = await updateUserData(formData);
        if (response.success) {
            setUserData(formData);
            setEditing(false);
            alert("Profile updated successfully!");
        } else {
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div>
            <h1>User Profile</h1>
            {editing ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>
                        <strong>Name:</strong> {userData.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {userData.email}
                    </p>
                    <button onClick={handleEditToggle}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default UserPage;