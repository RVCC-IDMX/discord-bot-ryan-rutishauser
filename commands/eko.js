const { SlashCommandBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true)
        .setMaxLength(25))
    .addBooleanOption(option =>
      option.setName('ephemeral')
        .setDescription('Whether or not the echo should be secret')
        .setRequired(true)),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    const secret = interaction.options.getBoolean("ephemeral");
    await interaction.reply({ content: `${input}`, ephemeral: secret });
  },
};