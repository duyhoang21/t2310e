// DisplayEmployee.js
import React from 'react';

const DisplayEmployee = ({ data }) => {
    return (
        <div>
            <h2>Employee Details</h2>
            <p>
                <strong>First Name:</strong> {data.firstName}
            </p>
            <p>
                <strong>Last Name:</strong> {data.lastName}
            </p>
            <p>
                <strong>Email:</strong> {data.email}
            </p>
        </div>
    );
};

export default DisplayEmployee;
