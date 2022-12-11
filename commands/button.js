const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Creates a button'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('primary')
          .setLabel('Click me!')
          .setStyle(ButtonStyle.Primary),
      )
      .addComponents(
        new ButtonBuilder()
          .setURL('https://github.com/RVCC-IDMX/discord-bot-ryan-rutishauser')
          .setLabel('link to GitHub repo')
          .setStyle(ButtonStyle.Link),
      );


    await interaction.reply({ content: 'I think you should,', components: [row] });
  },
};