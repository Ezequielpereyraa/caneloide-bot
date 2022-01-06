import { config } from "dotenv";
config();
import { Client, MessageEmbed } from "discord.js";

const client = new Client({ intents: 32767 });
const token = process.env.TOKEN_BOT;

client.login(token)
const Channel = client.channels.cache
const GENERAL_CHANNEL = '389615342357315589'

client.on("ready", () => {
  console.log('Bot is ready!');
  // Channel.get(GENERAL_CHANNEL).send(`YA ESTA`);
})

client.on('messageCreate', async message => {
  if (client.isReady()) {
  }
  if (message.content.startsWith('que onda')) {
    message.channel.send(`Que ondaa ${message.author.username}!`);
  }
  if (message.content.startsWith('Nashee')) {
    message.channel.send('Asheeeee');
  }
  if (message.content.startsWith('Sego')) {
    message.channel.send('Terrible puto');
  }
});

client.on("guildMemberAdd", member => {
  console.log(member.guild.im);
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

