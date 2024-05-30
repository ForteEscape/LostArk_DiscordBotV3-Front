const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides infomation about the user"),

  async execute(interaction) {
    await interaction.reply(
      `this command was run by ${interaction.user.username}`
    );
  },
};
