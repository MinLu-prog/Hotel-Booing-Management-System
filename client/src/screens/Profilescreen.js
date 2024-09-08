import React, { useState, useEffect } from "react";
import Loader from '../components/Loader';
import { Tabs } from 'antd';
import axios from "axios";
import Swal from 'sweetalert2'
import {Link as RouterLink} from "react-router-dom";
import { Tag, Divider } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import Avatar from "../assets/Avatar.png";

const { TabPane } = Tabs;

function Profilescreen() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }


    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }


        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div className="ml-3 mt-3" data-aos="fade-right">
        
                    <section className="bg-light py-3 py-md-5 py-xl-8">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                    <h2 className="mb-4 display-5 text-center">Profile</h2>
                                    <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row gy-4 gy-lg-0">
                                <div className="col-12 col-lg-4 col-xl-3">
                                    <div className="row gy-4">
                                        <div className="col-12">
                                            <div className="card widget-card border-light shadow-sm">
                                                <div className="avatar-color card-header text-bg-primary">Welcome, {user.name}</div>
                                                <div className="card-body">
                                                    <div className="text-center mb-3">
                                                        <img src={Avatar} className="img-fluid rounded-circle" alt={user.name} />
                                                        <h5>{user.email}</h5>
                                                    </div>
                                                    <ul className="list-group list-group-flush mb-4">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <h6 className="m-0">Admin :</h6>
                                                            <span>{user.isAdmin ? 'YES' : 'NO'}   </span>
                                                        </li>
                                                        
                                                    </ul>
                                                    <div className="d-grid m-0">
                                                        <RouterLink to ='/login'>
                                                        <div className= "text-right">
                                                        <button className="btn btn-outline-primary" type="button" onClick={logout}>Logout</button>
                                                        </div>
                                                       
                                                        </RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                         
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-9">
                                    <div className="card widget-card border-light shadow-sm">
                                        <div className="card-body p-4">
                                            <ul className="nav nav-tabs" id="profileTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#bookings-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">Bookings</button>
                                                </li>
                                          
                                            </ul>
                                            <div className="tab-content pt-4" id="profileTabContent">
                                                <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex="0">
                                                  
                                                    <MyBookings />
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            
        </div>
    );
}

export default Profilescreen;


export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [bookings, setbookings] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchBookings() {
            try {
                setLoading(true);
                const data = await (await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })).data;
                console.log(data);
                setbookings(data);
                setLoading(false);
                setError(error);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBookings();
        AOS.init({
            duration: 2000,
            once: true,
          });
    }, [])
    // async function cancelBooking(bookingid, roomid) {
    //     try {
    //         setLoading(true)
    //         const result = await (await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })).data
    //         console.log(result)
    //         setLoading(false)
    //         Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(result => {
    //             window.location.reload()
    //         })
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //         Swal.fire('Ooops', 'Something went wrong', 'error')
    //     }
    // }
    async function cancelBooking(bookingid, roomid) {
        try {
            setLoading(true);
            const userEmail = JSON.parse(localStorage.getItem('currentUser')).email;
            const result = await axios.post("/api/bookings/cancelbooking", { bookingid, roomid, email: userEmail });
            console.log(result);
            setLoading(false);
            Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(result => {
                window.location.reload();
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
            Swal.fire('Oops', 'Something went wrong', 'error');
        }
    }


    return (
        <div className="row" data-aos="slide-down">
            {loading && (<Loader />)}
            {bookings && (bookings.map(booking => {
                return (
                    <div className="col-md-12">
                        <div className="bs row">
                            <div className="col-md-12">
                                <h1>{booking.room}</h1>
                                <p><b>BookingID</b>: {booking._id}</p>
                                <p><b>CheckIn</b>: {booking.fromdate}</p>
                                <p><b>CheckOut</b>: {booking.todate}</p>
                            </div>
                            <div className="col-md-12">
                                <p><b>Amount</b>: {booking.totalamount}</p>
                                <p><b>Status</b>: 
                                    {booking.status === 'cancelled' ? <Tag color="red">CANCELLED</Tag> : <Tag color="green">CONFIRMED</Tag>}
                                </p>
                                {booking.status !== 'cancelled' && (
                                    <div className="text-right">
                                        <button className='btn btn-primary ' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>
                                            CANCEL BOOKING
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            }))}
        </div>
    )
    
}