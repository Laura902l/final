import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin/admin.css';
import Header from './Header';

const SchoolData = () => {
    const [showNav, setShowNav] = useState(false);

    const schools = [
        { id: 1, name: 'High School No.1', city: 'Astana', students: 1200, teachers: 80 },
        { id: 2, name: 'Secondary School No.5', city: 'Almaty', students: 900, teachers: 60 },
        { id: 3, name: 'Private Lyceum', city: 'Shymkent', students: 600, teachers: 50 },
    ];

    return (
        <div className="admin-container">
            {/* Навбар */}
            <Header setShowNav={setShowNav} />

            {/* Контейнер с таблицей */}
            <div className={showNav ? 'content shrink' : 'content'}>
                <h2 className="mb-4">School Data</h2>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>School Name</th>
                            <th>City</th>
                            <th>Students</th>
                            <th>Teachers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schools.map((school, index) => (
                            <tr key={school.id}>
                                <td>{index + 1}</td>
                                <td>{school.name}</td>
                                <td>{school.city}</td>
                                <td>{school.students}</td>
                                <td>{school.teachers}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchoolData;
