require('dotenv').config();

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const Room = require('./models/room');
const User = require('./models/user');

const mongoURL = process.env.MONGO_URI;

const sampleUsers = [
    {
        name: 'Admin User',
        email: 'admin@hotel.com',
        password: 'admin123',
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'user@hotel.com',
        password: 'user123',
        isAdmin: false,
    },
];

async function seed() {
    if (!mongoURL) {
        console.error('MONGO_URI is not set in .env');
        process.exit(1);
    }

    await mongoose.connect(mongoURL);
    console.log('MongoDB connected');

    const roomsFile = path.join(__dirname, 'rooms (2).json');
    const rawRooms = JSON.parse(fs.readFileSync(roomsFile, 'utf8'));

    const rooms = rawRooms.map((room) => ({
        name: room.name,
        imageurls: room.imageurls,
        rentperday: room.rentperday,
        type: room.type,
        maxcount: room.maxcount,
        phoneNum: room.phonenumber,
        currentbookings: room.currentbookings || [],
        description: room.description,
    }));

    await Room.deleteMany({});
    await User.deleteMany({});

    await Room.insertMany(rooms);
    await User.insertMany(sampleUsers);

    console.log(`Seeded ${rooms.length} rooms and ${sampleUsers.length} users`);
    console.log('\nSample login accounts:');
    console.log('  Admin: admin@hotel.com / admin123');
    console.log('  User:  user@hotel.com / user123');

    await mongoose.disconnect();
    console.log('Done.');
}

seed().catch((err) => {
    console.error('Seed failed:', err);
    process.exit(1);
});
