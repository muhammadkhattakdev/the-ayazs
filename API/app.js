const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const workRoutes = require("./routes/workRoutes");

const app = express();
const corsOptions = {
    origin:"http://localhost:3000",
    methods: "GET,POST,PATCH,DELETE",
    allowedHeaders:['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({limit: '100mb'}));

const databaseURI = "mongodb://localhost:27017/theayazsdb";

mongoose.connect(databaseURI)
 .then(() => console.log("Connected to database"))
 .catch(err => console.log("Error connecting to database: ", err));


app.use("/works", workRoutes);



const port = 8080;

app.listen(port, () => {
    console.log("Express Server running on port: ", port);
})



// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//     }
// });

// io.on("connection", (socket) => {

//     // Handle sending a message
//     socket.on("sendMessage", async (data) => {
//         const { userId, roomId, message } = data;

//         // Save the new message to the database
//         const newMessage = new Message({ userId, roomId, message });
//         await newMessage.save();

//         io.to(roomId).emit("receiveMessage", { newMessage });
//     });

//     socket.on("joinRoom", async ({ token, otherUserId }) => {
//         try {
//             const decoded = jwt.verify(token, "secret_key");
//             const currentUserId = decoded.id;

//             let room = await Room.findOne({
//                 $or: [
//                     { firstUserId: currentUserId, secondUserId: otherUserId },
//                     { firstUserId: otherUserId, secondUserId: currentUserId }
//                 ]
//             });

//             if (!room) {
//                 room = new Room({
//                     firstUserId: currentUserId,
//                     secondUserId: otherUserId
//                 });
//                 await room.save();
//             }

//             console.log("Room id is :", room._id);

//             socket.join(room._id.toString());

//             const messages = await Message.find({ roomId: room._id });
//             socket.emit("roomJoined", { roomId: room._id, messages: messages });

//         } catch (error) {
//             console.error("Error joining room:", error);
//             socket.emit("error", { message: "Failed to join room." });
//         }
//     });

//     socket.on("disconnect", () => {
//         console.log("Client disconnected");
//     });
// });
