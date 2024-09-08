import React, { useState, useEffect } from "react";
import { Tabs } from 'antd';
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { json } from "react-router-dom";
import Swal from 'sweetalert2'

const { TabPane } = Tabs;
function Adminscreen() {
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('currentUser')).isAdmin) {
            window.location.href = '/home'
        }
    }

    )
    return (
        <div className="mt-3 ml-3 mr-3 bs">
            <h2 className="text-center" style={{ fontsize: '30px' }}>Admin Panel</h2>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Bookings" key="1">
                    <Bookings />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Rooms" key="2">
                    <Rooms />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Add Room" key="3">
                    <Addroom/> 
                </Tabs.TabPane>
                <Tabs.TabPane tab="Users" key="4">
                    <Users />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}
export default Adminscreen

//Booking list Components
export function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchBookings = async () => {
            try {
                const data = (await axios.get("/api/bookings/getallbookings")).data;
                setBookings(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(error);
            }
        };

        // Call the async function
        fetchBookings();

        // Cleanup function (if needed in future)
        return () => {
            // Any cleanup logic can go here
        };
    }, []); // Dependency array, empty if you want it to run only once

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Bookings</h1>
                {loading && <Loader />}
                <table className="table table-bordered table-dark">
                    <thead className="bs">
                        <tr>
                            <th>Booking id</th>
                            <th>User id</th>
                            <th>Room id</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>

                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.status}</td>

                            </tr>
                        }))}
                    </tbody>
                </table>



            </div>
        </div>
    );
}


//Room list Component
export function Rooms() {
    const [rooms, setrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchrooms = async () => {
            try {
                const data = (await axios.get("/api/rooms/getallrooms")).data;
                setrooms(data);
                setLoading(false);
            }
            catch (error) {
                console.log(error);
                setLoading(false);
                setError(error);
            }
        };

        // Call the async function
        fetchrooms();

        // Cleanup function (if needed in future)
        return () => {
            // Any cleanup logic can go here
        };
    }, []); // Dependency array, empty if you want it to run only once

    return (
        <div className="row">
            {loading && <Loader/>}
            <div className="col-md-12">
                <h1>Rooms</h1>
                {loading && <Loader />}

                <table className="table table-bordered table-dark">
                    <thead className="bs">
                        <tr>
                            <th>Room id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent per day</th>
                            <th>Max count</th>
                            <th>Phone number</th>

                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr>

                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>

                            </tr>
                        }))}
                    </tbody>
                </table>



            </div>
        </div>
    );
}
//users list components
export function Users() {
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchrooms = async () => {
            try {
                const data = (await axios.get("/api/users/getallusers")).data;
                setusers(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(error);
            }
        };

        // Call the async function
        fetchrooms();

        // Cleanup function (if needed in future)
        return () => {
            // Any cleanup logic can go here
        };
    }, []); // Dependency array, empty if you want it to run only once
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Users</h1>
                {loading && <Loader />}
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(user => {
                            return <tr>
                                <td>{user._id} </td>
                                <td>{user.name} </td>
                                <td>{user.email} </td>
                                <td>{user.isAdmin ? 'YES' : 'NO'} </td>


                            </tr>
                        }))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

//add room component

export function Addroom() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [rentPerDay, setRentPerDay] = useState('');
    const [maxCount, setMaxCount] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [type, setType] = useState('');
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');

    const validateForm = () => {
        if (!name || !rentPerDay || !maxCount || !description || !phoneNumber || !type || !imageUrl1) {
            setError('Please fill in all required fields.');
            return false;
        }
        if (isNaN(rentPerDay) || isNaN(maxCount)) {
            setError('Rent per day and max count must be numbers.');
            return false;
        }
        // Add more specific validation rules as needed
        setError('');
        return true;
    };

    async function addRoom() {
        if (!validateForm()) return;

        const newRoom = {
            name,
            rentPerDay,
            maxCount,
            description,
            phoneNumber,
            type,
            imageUrls: [imageUrl1, imageUrl2, imageUrl3],
        };

        try {
            setLoading(true);
            const result = await (await axios.post('/api/rooms/addroom', newRoom)).data;
            console.log(result);
            setLoading(false);
            Swal.fire('Congrats', 'Your New Room Added Successfully', 'success').then(() => {
                window.location.href = '/home';
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            Swal.fire('Oops', 'Something went wrong', 'error');
        }
    }

    return (
        <div className="row">
            <div className="col-md-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Room Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Rent Per Day"
                    value={rentPerDay}
                    onChange={(e) => setRentPerDay(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Max Count"
                    value={maxCount}
                    onChange={(e) => setMaxCount(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div className="col-md-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL 1"
                    value={imageUrl1}
                    onChange={(e) => setImageUrl1(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL 2"
                    value={imageUrl2}
                    onChange={(e) => setImageUrl2(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Image URL 3"
                    value={imageUrl3}
                    onChange={(e) => setImageUrl3(e.target.value)}
                />
                {error && <div className="text-danger">{error}</div>}
                <div className="text-right">
                    <button className="btn btn-primary mt-2" onClick={addRoom} disabled={loading}>
                        {loading ? 'Adding...' : 'Add Room'}
                    </button>
                </div>
            </div>
        </div>
    );
}