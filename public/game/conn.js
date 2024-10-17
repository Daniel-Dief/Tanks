// const tank = JSON.parse(localStorage.getItem("tank"));

// const socket = new WebSocket("ws://localhost:8080");

// socket.onopen = () => {
//     socket.send(JSON.stringify({
//         type: "join",
//         tank
//     }));
// }

// socket.onmessage = (event) => {
//     event = JSON.parse(event.data);
//     switch(event.type){
//         case "start":
//             // Start the game
//             break;
//         case "update":
//             // Update the game
//             break;
//         case "end":
//             // End the game
//             break;
//     }
// }

// socket.onerror = (error) => {
//     console.log(error);
// }

// socket.onclose = () => {
//     alert("Connection lost, please refresh the page");
// }