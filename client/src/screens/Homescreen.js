import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { DatePicker } from 'antd';

import 'antd/dist/reset.css';

const { RangePicker } = DatePicker;


function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); 
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}


function isDateRangeOverlap(start1, end1, start2, end2) {
    return start1 <= end2 && end1 >= start2;
}

function Homescreen() {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [fromdate, setfromdate] = useState();
    const [todate, settodate] = useState();
    const [duplicaterooms, setduplicaterooms] = useState([]);

    const[serachkey, setsearchkey] = useState('')
    const[type, settype] = useState('all')

    useEffect(() => {
        async function fetchRooms() {
            try {
                setloading(true);
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setrooms(data);
                setduplicaterooms(data);
                setloading(false);
            } catch (error) {
                seterror(true);
                console.log(error);
                setloading(false);
            }
        }
        fetchRooms();
    }, []);

    function filterByDate(dates) {
        if (!dates || dates.length !== 2) {
            return;
        }

        const [startDateStr, endDateStr] = dates.map(date => date.format('DD-MM-YYYY'));
        const startDate = parseDate(startDateStr);
        const endDate = parseDate(endDateStr);

        setfromdate(startDateStr);
        settodate(endDateStr);

        const temprooms = duplicaterooms.filter(room => {
            return room.currentbookings.every(booking => {
                const bookingStart = parseDate(booking.fromdate);
                const bookingEnd = parseDate(booking.todate);


                return !isDateRangeOverlap(startDate, endDate, bookingStart, bookingEnd);
            }) || room.currentbookings.length === 0;
        });

        setrooms(temprooms);
    }
    function filterBySearch(){
        const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(serachkey.toLowerCase()))
        setrooms(temprooms)
    }
    function filterByType(e){

        settype(e)
       if(e!=='all'){
        const temprooms = duplicaterooms.filter(room => room.type.toLowerCase()==e.toLowerCase())

        setrooms(temprooms)
       }
       else{
        setrooms(duplicaterooms)
       }

    }


    return (
        <div className='container'>
            <div className='row mt-5 bs'>
                <div className='col md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
                <div className= "col md-5">
                <input type = "text" className = 'form-control' placeholder='search roooms' 
                value={serachkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch}
                /> 
            </div>
                <div className='col-md-3'>
                <select className='form-control' value={type} onChange={(e)=>{filterByType(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="delux">Delux</option>
                    <option value="premium">Premium</option>
                    <option value="suite">Suite</option>
                </select>
                </div>
                
            </div>
           
            <div className="row justify-content-center mt-5">
                {loading ? (
                    <Loader />
                ) : (
                    rooms.map(room => (
                        <div key={room._id} className="col-md-9 mt-3">
                            <Room room={room} fromdate={fromdate} todate={todate} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Homescreen;
