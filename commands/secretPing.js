const { SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('secretping')
    .setDescription('Replies with Secret Pong!'),
  async execute(interaction) {
    // await interaction.deferReply();
    // await wait(4000);
    // await interaction.editReply('Pong!');
    // await interaction.followUp('Pong again!');
    await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
  },
};