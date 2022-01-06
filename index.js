import { config } from "dotenv";
config();
import { Client, MessageEmbed } from "discord.js";

const client = new Client({ intents: 32767 });
const token = process.env.TOKEN_BOT;

client.login(token)
const Channel = client.channels.cache
const GENERAL_CHANNEL = '928671591989137499'

client.on("ready", () => {
  console.log('Bot is ready!');
})

client.on('messageCreate', async message => {
  const PREFIX = 'cane'
  const messageChat = message.content.toLowerCase();

  if (messageChat.includes(`${PREFIX} la hora`)) {
    message.channel.send('Que te pensas que soy tu esclavo?');
    setTimeout(() => {
    message.channel.send(`Bueno si`);
    message.channel.send(`Son las ${new Date().toLocaleTimeString()}`);
    }, 4000)
  }

  if (messageChat.includes(`${PREFIX} que onda`)) {
    message.channel.send(`Que ondaa con que salame`);
   setTimeout(()=>{
      message.channel.send(`Na todo piola ${message.author.username}!`);
  }, 2000)
  }

  if (messageChat.includes('sego')) {
    message.channel.send('Terrible puto');
  }
  if (messageChat.includes('nashe')) {
    message.channel.send('Asheeee');
  }

});

client.on("guildMemberAdd", member => {
  // inside a command, event listener, etc.
  const exampleEmbed = new MessageEmbed()
    .setColor('#d400ff')
    .setTitle(`Bienvenid@ a la comunidad de ${member.guild.name}`)
     .setURL('https://discord.gg/7ZhwTxNYMK')
    .setAuthor({ name: member.user.username, iconURL: member.user.avatarURL() , url: 'https://discord.gg/7ZhwTxNYMK' })
    .setThumbnail(member.guild.iconURL())
    .setDescription(`
    - Respetar a los demás users  - No ser ortiva
     - En lo posible viciar como un hdp - Nashe
     - Sego? Un puto`)

  Channel.get(GENERAL_CHANNEL).send({ embeds: [exampleEmbed] });
});
