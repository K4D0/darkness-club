module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Darkness Club", { //Oynuyor Kısmı
    type: "LİSTENİNG",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};