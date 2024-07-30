
# Trivia Game

## Overview
This trivia game is built using Express.js and WebSocket technology to provide an interactive, real-time gaming experience. Players can join a game room, chat with each other, and participate in a trivia game with real-time response handling and answer reveal.

## Features
- **User Authentication**: Players enter a name and a room to join a game.
- **Real-Time Chat**: Players can chat with each other within the game room.
- **Player Listing**: View a list of players in the room and the room they are currently in.
- **Game Initiation**: Any player can initiate a game.
- **Single Response Submission**: Each player is allowed to submit only one response per question.
- **Answer Reveal**: Answers are revealed only after all players have submitted their responses.

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/lokeshpatel082/trivia-game.git
   cd trivia-game
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the server:
   \`\`\`bash
   npm start
   \`\`\`

## Usage

1. Open your browser and navigate to \`http://localhost:8080\`.
2. Enter your name and a room name to join.
3. Chat with other players and wait for the game to start (you can open multiple tabs and play as different player).
4. Submit your responses to the trivia questions.
5. Wait for all players to submit their answers before the correct answer is revealed.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

