const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isButton() && interaction.customId === 'primary') {
      const exampleEmbed = new EmbedBuilder()
        .setColor(0x5865F2)
        .setTitle('Embed')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Ryan Rutishauser', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('discord js logo')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: '©2022 - Ryan Rutishauser', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

      interaction.reply({ embeds: [exampleEmbed] });
    }
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`);
      console.error(error);
    }
  },
};