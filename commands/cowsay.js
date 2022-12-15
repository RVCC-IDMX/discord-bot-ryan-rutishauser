const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Allows you to make a cow say something.')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('What the animal will say')
        .setRequired(true)
        .setMaxLength(1000))
    .addStringOption(option =>
      option.setName('animal')
        .setDescription('What animal you want to use')
        .setRequired(true)),
  async execute(interaction) {
    try {
      const selectedAnimal = interaction.options.getString('animal');
      const theCowSays = cowsay.say({
        text: `${interaction.options.getString('input')}`,
        f: `${selectedAnimal}`,
        e: "oO",
        T: "U ",
      });
      if (theCowSays.length < 2000) {
        await interaction.reply({
          content: `\`\`\`${theCowSays.replaceAll("`", "'")}\`\`\``
        });
      }
      else {
        const theCowSayings = theCowSays.split(">");
        await interaction.channel.send({
          content: `\`\`\`${theCowSayings[0].replaceAll("`", "'")}\`\`\``
        }),
          await interaction.channel.send(`\`\`\`${theCowSayings[1].replaceAll("`", "'")}\`\`\``),
          await interaction.reply({
            content: `Successful`, ephemeral: true
          });
      }
    } catch (err) {
      await interaction.reply(`A cow with this name does not exist.`);
    }
  }
};