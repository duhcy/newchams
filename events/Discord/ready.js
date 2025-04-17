const { Translate } = require("../../translate");

module.exports = async (client) => {
    console.log(await Translate(`Logged to the client <${client.user.username}>.`));
    console.log("General: " + client.config.opt.Channels);
    console.log("Roles:" + client.config.opt.STAFFROLE);
    
    //client.user.setActivity(client.config.app.playing);
}