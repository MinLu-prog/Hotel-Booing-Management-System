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

export function Addroom(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const[name , setname]=useState(false)
    const[rentperday, setrentperday]=useState()
    const[maxcount, setmaxcount] = useState()
    const[description, setdescription] =useState()
    const[phonenumber,setphonenumber] =useState()
    const[type,settype]=useState()
    const[imageurl1, setimageurl1]=useState()
    const[imageurl2, setimageurl2]=useState()
    const[imageurl3, setimageurl3]=useState()

    async function addRoom(){
        const newroom={
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls:[imageurl1,imageurl2,imageurl3]
        }
        try {
            setLoading(true)
            const result =await(await axios.post("/api/rooms/addroom", newroom)).data
            console.log(result)
            setLoading(false)
            Swal.fire('Congrats', 'Your New Room Added Successfully ','success').then(result=>{
                window.location.href='/home'
            })
            }
        catch (error) {
            console.log(error)
            setLoading(false)
            Swal.fire('OOps', 'Something went wrong', 'error')
            
        }
    }
    return (
        <div className="row">
            <div className="col-md-5">
                <input type='text' className="form-control" placeholder="room name" 
                value={name} onChange={(e)=>{setname(e.target.value)}}
                />
                <input type='text' className="form-control" placeholder="rent per day"
                value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}
                 />
                <input type='text' className="form-control" placeholder="max count" 
                value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}
                />
                <input type='text' className="form-control" placeholder="description" 
                value={description} onChange={(e)=>{setdescription(e.target.value)}}
                />
                <input type='text' className="form-control" placeholder="phone number" 
                value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}
                />



            </div>
            <div className="col-md-5">
            <input type='text' className="form-control" placeholder="type" 
            value={type} onChange={(e)=>{settype(e.target.value)}}
           />
                <input type='text' className="form-control" placeholder="Image URL 1" 
                value={imageurl1} onChange={(e)=>{setimageurl1(e.target.value)}}

                />
                <input type='text' className="form-control" placeholder="Image URL 2" 
                value={imageurl2} onChange={(e)=>{setimageurl2(e.target.value)}}
                />
                <input type='text' className="form-control" placeholder="Image URL 3" 
                value={imageurl3} onChange={(e)=>{setimageurl3(e.target.value)}}

                />
                <div className="text-right">
                    <button className="btn btn-primary mt-2" onClick={addRoom}>Add Room</button>
                    </div>    

            </div>

        </div>
    )
}