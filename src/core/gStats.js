module.exports = message => {
if (message.content.includes("sini?")) {
    // First we use guild.members.fetch to make sure all members are cached
message.guild.members.fetch().then(fetchedMembers => {
  const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
  // We now have a collection with all online member objects in the totalOnline variable
  message.channel.send(`Gatau deh kak ${message.author}, tapi lagi ada ${totalOnline.size} yang lagi di <#${message.channel.id}> nih kak!`);
    });
  }
}
