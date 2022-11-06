/* 
 █▀▄▀█   █▀▀█       █▄░▒█   ▀█▀   █▀▄▀█   █▀▀█
 █▒█▒█   █▄▄▀       █▒█▒█   ░█░   █▒█▒█   █▄▄█
 █░░▒█   █░▒█       █░░▀█   ▄█▄   █░░▒█   █░▒█
 */


const fs = require('fs')
const chalk = require('chalk')


global.LANG = 'EN'
global.prefix = '.'
global.owner = '94715166712'
global.premium = '94715166712'
global.botnma = 'ᴍʀ ɴɪᴍᴀ ᴏғᴄ ᴘʀɪᴠᴇᴛ ʙᴏᴛ'
global.ownernma = 'ᴍʀ ɴɪᴍᴀ ᴏғᴄ'
global.AUTO_BIO = 'on'
global.antilink = 'true'
global.NUMBER_212_BLOCK = 'true'
global.ANTI_BADWORD = 'false'
global.INBOX_BLOCK = 'false'
global.CAPTION = '© ᴍʀ ɴɪᴍᴀ ᴏғᴄ ᴘʀɪᴠᴇᴛ ʙᴏᴛ'
global.ALIVE = `*□ 𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲 𝙿𝚁𝙸𝚅𝙴𝚃 𝙱𝙾𝚃 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴 □*


║🫧▷  *[GET COMMAND LIST]*
       _✓ .menu_

║👾▷ *[SUBSCRIBE MR NIMA]*
    _✓ http://youtube.com/c/MRNIMAOFC_

║🧘‍♀️▷ *[NIMA OFC GROUP]*
    _✓ https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N_

║🌐▷ *[OFFICIAL WEB SITE]*
    ✓ _http://nimaelisa.cf_

╚════════❖•❄`

global.APK_DOWNLOAD = 'Downloading...'
global.APK_UPLOAD = 'Uploading...'
global.SONG_DOWN = 'Downloading...'
global.SONG_UP = 'Uploading...'
global.VIDEO_DOWN = 'Downloading...'
global.VIDEO_UP = 'Uploading...'

global.author = '⚹ ᴍʀ ɴɪᴍᴀ ⚹'
global.packname = '♘ sᴛɪᴄᴋᴇʀ ᴘᴀᴄᴋ ᴏɴᴇ ♘'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})