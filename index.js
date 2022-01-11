import { config } from "dotenv";
config();
import { Client, MessageEmbed } from "discord.js";
import { SlashCommandBuilder, userMention, memberNicknameMention, channelMention, roleMention } from "@discordjs/builders"
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const client = new Client({ intents: 32767 });
const token = process.env.TOKEN_BOT;

client.login(token)
const Channel = client.channels.cache
const GENERAL_CHANNEL = '389615342357315589'
const serverId = '389090009497600000'
const clientId = '386228748300845059'

client.on("ready", () => {
  console.log('Caneloide ready!');
})

client.on('messageCreate', async message => {
  const PREFIX = 'cane'
  const messageChat = message.content.toLowerCase();

  if (messageChat.includes(`${PREFIX} la hora`)) {
    message.channel.send('Que te pensas que soy tu esclavo?');
    setTimeout(() => {
    message.channel.send(`Bueno si`);
    message.channel.send(`Son las ${new Date().toLocaleTimeString('es-ES',{timeZone: 'America/Argentina/Buenos_Aires'})}`);
    }, 3000)
  }

  if (messageChat.includes(`${PREFIX} que onda`)) {
    message.channel.send(`Que ondaa con que salame`);
   setTimeout(()=>{
      message.channel.send(`Na todo piola ${message.author.username}!`);
  }, 2000)
  }
  if (messageChat.includes(`${PREFIX} dale`)) {
   setTimeout(()=>{
      message.channel.send(`CALAAA BOCAAA ${message.author.username}!`);
  }, 2000)
  }

  if (messageChat.includes('sego')) {
    message.channel.send('Terrible puto');
  }
  if (messageChat.includes('nashe')) {
    message.channel.send('Asheeee');
  }
  if (messageChat.includes('gordo')) {
    message.channel.send('Alta putarraca esa');
  }

  if (messageChat.includes(`${PREFIX} a viciar`)) {
    message.channel.send(`A VICIARRRRRR PERRRRROS`);
  }
  if (messageChat.includes(`${PREFIX} pegale`)) {
    const id = getUserFromMention(message.content);

    const user = userMention(id);
    // const nickname = memberNicknameMention(id);
    // const channel = channelMention(id);
    // const role = roleMention(id);
    console.log(user)
    if (user === '<@undefined>') return message.channel.send(`JAAPISHH pa vo! por no etiquetar a nadie!!`);
    message.channel.send(`JAAPISHH ${user} por puto!`);
  }
  if (messageChat.includes(`${PREFIX} ez`)) {
    message.channel.send(`
    ━━━-╮
╰┃ ┣▇━▇
 ┃ ┃  ╰━▅╮ 
 ╰┳╯ ╰━━┳╯F A S I L I T O
  ╰╮ ┳━━╯ EL
 ▕▔▋ ╰╮╭━╮ T U T O R I A L
╱▔╲▋╰━┻┻╮╲╱▔▔▔╲
▏  ▔▔▔▔▔▔▔  O O┃ 
╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱
 ▏╳▕▇▇▕ ▏╳▕▇▇▕
    `);
  }
  if (messageChat.includes(`${PREFIX} gg`)) {
    message.channel.send(`
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░█▀▀▀░█▀▀▀░░█▀▀░▀▀█░░█░░░░
░░░░█░▀█░█░▀█░░█▀▀░▄▀░░░▀░░░░
░░░░▀▀▀▀░▀▀▀▀░░▀▀▀░▀▀▀░░▀░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    `);
  }

});

client.on("guildMemberAdd", member => {
  // inside a command, event listener, etc.
  const exampleEmbed = new MessageEmbed()
    .setColor('#d400ff')
    .setTitle(`Bienvenid@ a la comunidad de ${member.guild.name}`)
     .setURL('https://discord.gg/7ZhwTxNYMK')
    .setAuthor({ name: member.user.username, iconURL: member.user.avatarURL() })
    .setThumbnail(member.guild.iconURL())
    .setDescription(`
    - Respetar a los demás users  - No ser ortiva
     - En lo posible viciar como un hdp - Nashe
     - Sego? Un puto`)
  Channel.get(GENERAL_CHANNEL).send({ embeds: [exampleEmbed] });
});

const getUserFromMention = mention => {
	if (!mention.includes('<')) return;
  const mencion = mention.split('<@', 2)
  const idUser= mencion[1].replace('!', '').replace('>', '');
  return idUser;
}