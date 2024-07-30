const players = [];
export function addPlayer ({id, playerName, room}){
  if(!playerName || !room){
    return {
      error: new Error("Please enter a player name and room !"),
    };
  }

  playerName = playerName.trim().toLowerCase();
  room = room.trim().toLowerCase();
  
  const existingPlayer = players.find((player) => {
    return player.room === room && player.playerName === playerName;
  });

  if(existingPlayer){
    return {
      error: new Error("Player name is in the use !")
    };
  }

  const newPlayer = {id, playerName, room};
  players.push(newPlayer);

  return {newPlayer};
};

// get a player by id
export function getPlayer(id){
  const player = players.find((player)=>player.id === id);
  if(!player){
    return {
      error: new Error("Player not found!")
    };
  }
  return {player};
};

// Get all the players in the room
export function getAllPlayers (room){
  return players.filter((player) => player.room === room);
};

// Remove a player by id
export function removePlayer(id) {
  return players.find((player, index) => {
    if (player.id === id) {
      return players.splice(index, 1)[0];
    }
    return false;
  });
};

// // Export our helper methods
// module.exports = {
//   addPlayer,
//   getPlayer,
//   getAllPlayers,
//   removePlayer,
// };