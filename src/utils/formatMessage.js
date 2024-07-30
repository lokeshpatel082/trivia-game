export default function formatMessage(playerName, text) {
  return {
    playerName,
    text,
    createdAt: new Date().getTime(),
  };
};