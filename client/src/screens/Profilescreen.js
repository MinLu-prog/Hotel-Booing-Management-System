import React, { useState, useEffect } from "react";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Tabs } from 'antd';
import axios from "axios";
import Swal from 'sweetalert2'
import { Tag, Divider } from 'antd';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import ScrollLink and scroll
import AOS from "aos";
import "aos/dist/aos.css";

const { TabPane } = Tabs;


function Profilescreen() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }

        AOS.init({
            duration: 2000,
            once: true,
          });
    }, [])


    return (
        
        <div className="ml-3 mt-3" data-aos ="fade-right">

            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Profile" key="1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bs">
                                
                                <h2>My Profile</h2>
                                <br />
                                <div className="profileStyle"> 
                                <h3> Name : {user.name}</h3> 
                                <h3> Email : {user.email}</h3>
                                <h3> isAdmin : {user.isAdmin ? 'YES' : 'NO'}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </Tabs.TabPane>
                <Tabs.TabPane tab="Bookings" key="2">
                    <MyBookings />
                </Tabs.TabPane>

            </Tabs>
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
    async function cancelBooking(bookingid, roomid) {
        try {
            setLoading(true)
            const result = await (await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })).data
            console.log(result)
            setLoading(false)
            Swal.fire('Congrats', 'Your booking has been cancelled', 'success').then(result => {
                window.location.reload()
            })
        } catch (error) {
            console.log(error)
            setLoading(false)
            Swal.fire('Ooops', 'Something went wrong', 'error')
        }
    }



    return (
        <div className="row" data-aos ="slide-down">
            <div className="col-md-6">
                {loading && (<Loader />)}
                {bookings && (bookings.map(booking => {
                    return <div className="bs">
                        <h1>{booking.room}</h1>
                        <p><b>BookingID</b> : {booking._id} </p>
                        <p><b>CheckIn</b> : {booking.fromdate} </p>
                        <p><b>CheckOut</b> : {booking.todate} </p>
                        <p><b>Amount</b> : {booking.totalamount} </p>
                        <p><b>Status</b> :{""}
                            {booking.status == 'cancelled' ? <Tag color="red">CANCELLED</Tag> : <Tag color="green">CONFIRMED</Tag>}
                        </p>

                        {booking.status !== 'cancelled' && (<div className="text-right">
                            <button class='btn btn-primary' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>CANCEL BOOKING</button>

                        </div>)}

                    </div>
                }))}

            </div>


        </div>
    )

}