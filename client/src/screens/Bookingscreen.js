import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
function Bookingscreen() {
    const { roomid, fromdate, todate } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [room, setRoom] = useState();

    // Convert fromdate and todate to moment objects
    const fromDate = moment(fromdate, 'DD-MM-YYYY'); // Adjust the format as necessary
    const toDate = moment(todate, 'DD-MM-YYYY'); // Adjust the format as necessary

    // Calculate total days
    // Calculate total days using moment.diff()
    const totaldays = toDate.diff(fromDate, 'days')+1;
    
    const [totalamount, settotalamount] =useState()


    useEffect(() => {
        async function fetchRooms() {
            try {
                setLoading(true);
                const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data;
                settotalamount(data.rentperday * totaldays)
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        }
        fetchRooms();
    }, [roomid]);

    //const totalamount = room ? totaldays * room.rentperday : 0; We can use this only 


async function onToken(token){
        console.log(token);
            const bookingDetails={
                room,
                user:JSON.parse(localStorage.getItem('currentUser'))._id,
                fromdate,
                todate,
                totalamount,
                totaldays,
                token
                
            }
            try{
                setLoading(true);
                const result=await axios.post('/api/bookings/bookroom' , bookingDetails,token)
                setLoading(false)
                Swal.fire('Congratulations','Your Room Booked Successfully','success').then(result=>{
                    window.location.href='/bookings'
                });
            }catch(error){
                setLoading(false)
                Swal.fire('OOps','Something went wrong','Failure');
            }
    
        
    }

    return (
        <div className='m-5'>
            {loading ? (
                <Loader />
            ) : room ? (
                <div>
                    <div className='row justify-content-center mt-5 bs'>
                        <div className='col-md-6'>
                            <h1>{room.name}</h1>
                            <img src={room.imageurls[0]} className="bigimg" alt={room.name} />
                        </div>
                        <div className='col-md-6'>
                            <div style={{ textAlign: 'right' }}>
                                <h1>Booking Detail</h1>
                                <hr />
                                <b>
                                    <p>Name: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                    <p>From date: {fromdate}</p>
                                    <p>To date: {todate}</p>
                                    <p>Max Count: {room.maxcount}</p>
                                </b>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days: {totaldays}</p>
                                    <p>Rent per day: {room.rentperday}</p>
                                    <p>Total amount: {totalamount}</p>
                                </b>
                            </div>
                            <div style={{ float: 'right' }}>
                             
                                <StripeCheckout
                                amount={totalamount * 100}
                                token={onToken}
                                currency='MMK'
                            stripeKey="pk_test_51Ps6A1H6f7IOyMyVX9EpCuFpmboLu5u9MvxzBtuvLZwZD9mW5z0kqZGyryttbhrjQNvpXpJIGV4tt4caIKXQEQgK002w0g0pn1"
                            >
                                   <button className='btn btn-primary' >Pay Now{" "}</button>

                            </StripeCheckout>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </div>
    );
}

export default Bookingscreen;