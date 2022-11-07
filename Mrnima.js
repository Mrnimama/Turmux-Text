require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./nima/myfunc')
const nimadl = require('xfarr-api')
//const Language = require('./language')
//const Lang = Language.getString('elisabot')
//const config = require("./config")

const NOT_FOUND = '*NO FOUND !!!*'
const WAIT = `*⏳ Please wait ${m.pushName}...*`
const NEED = `*${m.pushName} Enter some words fro search*`
const NEED_URL = `*${m.pushName} Please Give Link.*` 
const NO_BLOCK = '94715166712,94719574492,94702695534,94772076642,94711421243'
const NOBLOCK_NUMBER = NO_BLOCK.split(',')

module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //var
         const prefix = '.'
         //prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const nimanumber = "94719574492"
    	const nimanumber2 = "94715166712"
        const isCreator = [nimanumber2,botNumber,nimanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94715166712@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const isXnxxGrp = m.chat == "120363043146209271@g.us" ? true : false 
        const isSupport = m.chat == "120363043491784571@g.us" ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	//const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	

	// BOT FIND
	
	if(isSupport){
   if (!ElisaBotMd.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
   // if(m.sender = ElisaBotMd.user.id) return
    await ElisaBotMd.sendText('94715166712@s.whatsapp.net','Whotto support eke botek awilla')
    }
        
	}
	if(isSupport){
	
	if(isCmd) m.reply('*❗ COMMANDS IS NOT ALOWD THIS GROUP❗*')
	}
	//DB ADS
	if(m.chat == '120363052773472047@g.us' && !isAdmins ){
	if (!ElisaBotMd.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
    //await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => reply(`*@${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))
 
   }
	}
global.db = JSON.parse(fs.readFileSync('./nima/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {}) 
       }
setInterval(() => {
 fs.writeFileSync('./nima/database.json', JSON.stringify(global.db, null, 2))
}, 30 * 1000)	

///getttt
  let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('isWelcome' in chats)) chats.isWelcome = false
} else global.db.chats[m.chat] = {
   isWelcome: false,
 }
         
                          const replay = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `ʙᴏᴛ ᴏᴡɴᴇʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇᴛ sᴜʙsᴄʀɪʙᴇ ᴘʟᴇᴀsᴇ !♥️ `, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q"}}}, { quoted: m})
                          }
                          const sendlogo = (teks) => {
                              ElisaBotMd.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": `${global.ownernma}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/Elisa.jpg`),"sourceUrl": "https://wa.me/94715166712?text=contact+get+from+Queen+elisa+logomaker+💃"}}}, { quoted: m})
                          }
                          const reply = (teks) => {
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "QUEEN ELISA V2",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "MR NIMA OFC", thumbnail: fs.readFileSync('./nima/Bot.jpg'),sourceUrl: ("https://youtube.com/MRNIMAOFC")}}})
}
const reply2 = (teks) => {
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "QUEEN ELISA V2",mediaType: 3, renderLargerThumbnail: true, showAdAttribution: true, detectLinks: true,body: "MR NIMA OFC", thumbnail: fs.readFileSync('./nima/Bot.jpg'),sourceUrl: ("https://youtube.com/MRNIMAOFC")}}})
}
const reply3 = (teks) => {
    //J_NIMA = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/elisadetails.json')
    ElisaBotMd.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: `${global.botnma}`,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: `${global.ownernma}`, thumbnail: fs.readFileSync('./nima/Bot.jpg'),sourceUrl: (`https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N`)}}})
}
	     
	          
				  
        //Public & Self\\
        if (!ElisaBotMd.public) {
            if (!m.key.fromMe) return
        }

     
        
	//auto set bio\\
/*	if (global.AUTO_BIO == 'on') {
	   // let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		
		const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
           var utch = new Date().toLocaleDateString( get_localized_date)
           var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
           const biography = '📅 ' + utch + '\n⌚ ' + time + '\n\n'+ElisaBotMd.user.name

      
		await ElisaBotMd.setStatus(biography)
		setting.status = new Date() * 1
	    }
	}
	
	if (m.chat === '120363043491784571@g.us') {
				  return
				  }
	*/
	


	  //antilink\\
     /*   if (global.antilink == 'true' && m.isGroup ) {
        if (budy.match(`chat.whatsapp.com`)) {
       // reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return 
        let gclink = (`https://chat.whatsapp.com/`+await ElisaBotMd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        if (isAdmins) return 
        if (isCreator) return 
        await ElisaBotMd.sendText(m.chat,` 
      *『  ʟ ɪ ɴ ᴋ   ᴅ ᴇ ᴛ ᴇ ᴄ ᴛ ᴇ ᴅ  』*
`)
        await ElisaBotMd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }*/
         //212 BLOCK \\
       if (m.sender.startsWith("212") && !m.isGroup && global.NUMBER_212_BLOCK == 'true') {
ElisaBotMd.sendMessage(from, { react: { text: `📛`, key: m.key }})
ElisaBotMd.updateBlockStatus(m.sender,'block')
            
            }

				 
   if(m.sender.startsWith(NOBLOCK_NUMBER)){
   await ElisaBotMd.sendMessage(from, { react: { text: `▫️`, key: m.key }})
   }
         
///  ANTI BAD WORDS
       /*  if (global.ANTI_BADWORD == 'true' && m.isGroup && !isAdmins && !isCreator) {
         
         const bad = await fetchJson(`https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/BADWORD.json`)
         for (any in bad){
         if (budy.toLowerCase().includes(bad[any])){
         if (!isBotAdmins) return 
        // if (isCreator) return
         await ElisaBotMd.sendMessage(from, { react: { text: `🤬`, key: m.key }})
         await ElisaBotMd.sendText(m.chat,'*Bad word detect !*')
         await ElisaBotMd.groupParticipantsUpdate(m.chat,[m.sender], 'remove')
         }}}
*/
     
				  
				 /* if (!m.isGroup && global.INBOX_BLOCK == 'on') {  
				  if (!isCreator) {
				  await ElisaBotMd.sendText (m.chat, global.INBOX_BLOCK_MSG )
				  await sleep(8000)
				  return await ElisaBotMd.updateBlockStatus(m.sender, 'block')
				  }
				  }	*/
				  
//media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
       /* if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ElisaBotMd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ElisaBotMd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ElisaBotMd.ev.emit('messages.upsert', msg)
        }*/
	    

switch(command) {

case 'menu' : {
if (isSupport) return
m.reply(`◯═══◊ ᴍᴇɴᴜ ◊═══◯
.song ${song_desc}
.fb ${fb_desc}
.tiktok ${tiktok_desc}
═══◯`)
}
break
case 'runtime' : case 'rtime': {
const uptime = await runtime(process.uptime())
m.reply(`*_${uptime}_*`)
}
break
case 'alive' : {
if (isSupport) return
await ElisaBotMd.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4b05a4f327db6d398d482.jpg' }, caption: global.ALIVE }, { quoted: m })
                

}
break

case 'asong' : {
if (isSupport) return
     song_desc = 'Download youtube songs'
//m.reply('not setted')
         
    if (!text) return reply('*👸💬 Need song name or url*')
    const gett = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN)
    if (text.includes('https://youtu')){
       const nima = await fetchJson(`https://my-shinz.herokuapp.com/api/dowloader/yt?url=${text}`)
       const buf = await getBuffer('https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg')
       const download = nima.result.mp3
    const load = await ElisaBotMd.sendText(m.chat,global.SONG_UP)
    await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
    ElisaBotMd.sendMessage(m.chat, {audio:{ url: download }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`༺⃝𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲⃝༻`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg`, 
                sourceUrl: `https://chat.whatsapp.com/BbIpvkRD4qP6xKckb8cpT0` }}}, {quoted:m})
                return await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                    
              }
       let yts = require("yt-search")
             //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
      // const gett = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
        yts(text).then(async (search) => {  
        
        const nim__a = search.all
        const nima = await fetchJson(`https://my-shinz.herokuapp.com/api/dowloader/yt?url=${search.all[0].url}`)
       const buf = await getBuffer('https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg')
       const download = nima.result.mp3
    const load = await ElisaBotMd.sendText(m.chat,global.SONG_UP)
    await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
    ElisaBotMd.sendMessage(m.chat, {audio:{ url: download }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`༺⃝𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲⃝༻`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`https://telegra.ph/file/b7a27bcd23e3a96fac934.jpg`, 
                sourceUrl: `https://chat.whatsapp.com/BbIpvkRD4qP6xKckb8cpT0` }}}, {quoted:m})
                return await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                
    })
                                  
                         
}
break


case 'song' : {
if (isSupport) return
var GIVEME = ''
if (global.LANG == 'SI') GIVEME = "```👸💬 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
if (global.LANG == 'EN') GIVEME ="```👸💬 Please give me a song name.```\n *Example - .song2 lelena*"
text1 = q.split(";")[0]
text2 = q.split(";")[1]
//await ElisaBotMd.sendMessage(from, { react: { text: `⌛`, key: m.key }})

                          //await ElisaBotMd.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                  if (!text) return reply (GIVEME)
                                  let yts = require("yt-search")
                                  //const load = await ElisaBotMd.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                  const load = await ElisaBotMd.sendText(m.chat,global.SONG_DOWN, m, )
                                  yts(text).then(async (search) => {  
                                  
                                  let nima = search.all
const CAP = `*${m.pushName} Your Song Found*

*🗃️ ᴛɪᴛʟᴇ :* ${search.all[0].title}

*⏱️ ᴅᴜʀᴀᴛɪᴏɴ :* ${search.all[0].duration}

*👀 ᴠɪᴇᴡs :* ${search.all[0].views}

*🖇️ ᴜʀʟ :* ${search.all[0].url}
`
                                  let { yta } = require('./nima/lib/y2mate')
                                  let quality = args[1] ? args[1] : '128kbps'
                                  let media = await yta(search.all[0].url , quality)
                                  buf = await getBuffer(media.thumb)
                                  await  ElisaBotMd.sendMessage(m.chat, { delete: load.key })
                                  //const up = await ElisaBotMd.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                  if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                  const up = await ElisaBotMd.sendText(m.chat, global.SONG_UP, m, )
                                  await ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: CAP }, { quoted: m })
                                  const doc = await ElisaBotMd.sendMessage(m.chat, { document: { url : media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                                  await ElisaBotMd.sendMessage(m.chat, { delete: up.key })
                                 // await ElisaBotMd.sendMessage(from, { react: { text: `🎶`, key: doc.key }})

                                  }).catch((err) => m.reply(NOT_FOUND))
                           }
                          break  


case 'video' : {
if (isSupport) return
//m.reply('not setted')
if (!text) throw 'need word'
const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)
const qulity = text.split("-")[1] || '360'
const query = text.split("-")[0]
await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${query}&type=${qulity}`)
.then(async (nima) => { 
const video = nima.mp4.download
const caption = `*◉ ᴛɪᴛʟᴇ :* ${nima.title}
*◉ ʀᴇsᴀʟᴜᴛɪᴏɴ :* ${qulity}p`
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
   
  }).catch((err) => m.reply(NOT_FOUND))
    
}
break

case 'video2' :{
if (isSupport) return
m.reply('not setted')
}
break

case 'tiktok' : {
if (isSupport) return
   tiktok_desc = 'Download tiktok Videos'
//m.reply('not setted')
if(!text) throw '*🧑‍💻💬 Please give me Tiktok Video link*'
      const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)
      await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
      .then(async (nima) => { 
      const video = nima.hasil.download_mp4
      const caption = `◉ ᴛɪᴛʟᴇ : ${nima.video_title}
◉ ᴜsᴇʀ ɴᴀᴍᴇ : ${nima.hasil.username}
◉ ʟɪᴋᴇ : ${nima.hasil.like}
◉ ᴄᴏᴍᴍᴇɴᴛ : ${nima.hasil.comment}
◉ sʜᴇʀᴇ : ${nima.hasil.shere}
◉ ᴍᴜsɪᴄ ᴀᴜᴛʜᴏʀ ${nima.hasil.music_author}
 `
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
   
  }).catch((err) => m.reply(NOT_FOUND))
     
}
break

case 'ss' : {
if (!text) throw 'need url'
const load = await ElisaBotMd.sendText(m.chat,WAIT)
await getBuffer(`https://my-shinz.herokuapp.com/api/tools/ssweb?link=${text}`).then(async (imagee) => { 
await ElisaBotMd.sendMessage(m.chat, { image: imagee, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => m.reply(NOT_FOUND))

}

break
case 'fb' : {
if (isSupport) return
    fb_desc = 'download fb videos'
//m.reply('not setted')
      if(!text) throw '*🧑‍💻💬 Please give me a facebook video link*'
      const gett = await ElisaBotMd.sendText(m.chat,global.VIDEO_DOWN)   
      await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
      .then(async (nima) => { 
      const video = nima.hasil.hd
      const title = nima.title
      await ElisaBotMd.sendMessage(m.chat, { delete: gett.key })
      buff = await getBuffer(video)
      const load = await ElisaBotMd.sendText(m.chat,global.VIDEO_UP)
      await ElisaBotMd.sendMessage(m.chat, { video: buff , mimetype: 'video/mp4', caption: title }, { quoted: m })
      await ElisaBotMd.sendMessage(m.chat, { delete: load.key })
      
  }).catch((err) => m.reply(NOT_FOUND))
                                  
}
break


case 'insta' : {
if (isSupport) return
m.reply('not setted')
}
break

case 'apk' : {
if (isSupport) return
if(!text) return m.reply(NEED)
const gett = await ElisaBotMd.sendText(m.chat,global.APK_DOWNLOAD)
await fetchJson(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
.then(async (nima) => { 
const bota = await fetchJson(`https://api.akuari.my.id/downloader/dlapk2?link=${nima.respon.link}`)
const apk = bota
const Details = `*🗳 MOD APK DOWNLOAD 🗳️*

*🗃 ️𝙰𝙿𝙿 𝙽𝙰𝙼𝙴 :* ${nima.respon.title}
*📂 𝙰𝙿𝙺 𝚂𝙸𝚉𝙴 :* ${bota.respon.size}
*⚒️ 𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴 :* ${bota.respon.update}
*🖇️ 𝚄𝚁𝙻 :* ${nima.respon.link}

*════════◯*`
await ElisaBotMd.sendMessage(m.chat, { delete: gett.key }) 
const buff = await getBuffer(apk)
const load = await ElisaBotMd.sendText(m.chat,global.APK_UPLOAD)
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
const apkapp = await ElisaBotMd.sendMessage(m.chat, { document: buff , mimetype: 'application/vnd.android.package-archive', fileName: `${nima.respon.title}.apk`}, { quoted: m })}).catch((err) => m.reply(err))
await ElisaBotMd.sendMessage(from, { text: Details }, { quoted: apkapp })
//m.reply('not setted')
}
break

case 'sticker': case 'st': case 'stickergif2': case 'sgif2': {
if (isSupport) return
   if (!quoted) return reply(`👸💬 Reply Video/Image With Caption ${prefix + command}`)
                            
   var MAX = ''
   if (global.LANG == 'EN') MAX= '*Maximum 10 seconds videos only!*'
   if (global.LANG == 'SI') MAX= '*උපරිම තත්පර 10ක වීඩියෝ පමණයි !*'
   var MA2X = ''
   if (global.LANG == 'SI') MA2X= '*👸💬 වීඩියෝවකට හෝ ජායාරූපයකට රිප්ලයි ලබාදෙන්න !*'
   if (global.LANG == 'EN') MA2X= '*👸💬 Please reply video or photo !*'
   
    ElisaBotMd.sendText(m.chat, WAIT )
           if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await ElisaBotMd.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
       await fs.unlinkSync(encmedia)
   } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return reply(MAX)
       let media = await quoted.download()
       let encmedia = await ElisaBotMd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
       await fs.unlinkSync(encmedia)
   } else {
       throw MA2X
       }
   }
   break

case 'img' : {
if (isSupport) return
if (!text) return reply(`*🧑‍💻💬 ${m.pushName} Give Some search* \n_*🗳️ Example :* .img Queen Elisa Whatsapp bot_`)
 const load = await ElisaBotMd.sendText(m.chat,WAIT)
 await fetchJson(`https://my-shinz.herokuapp.com/api/search/googleimage?text=${text}`)
 .then(async (nima) => { 
 const imagee1 = nima.result[0].url
 const imagee2 = nima.result[1].url
 const imagee3 = nima.result[2].url
 const imagee4 = nima.result[3].url
 const imagee5 = nima.result[4].url
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee1 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee2 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee3 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee4 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { image: { url : imagee5 }, caption: global.CAPTION }, { quoted: m })
await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => m.reply(NOT_FOUND))

//m.reply('not setted')
}
break

case 'add' : {
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (!isAdmins) return 
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`@*${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))

}
break

case 'kick' : {
//m.reply('not setted')
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (!isAdmins) return 
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ElisaBotMd.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(`@*${users.split('@')[0]} Kick out !!!*` )).catch((err) => reply(err))

}
break

case 'modapk' : {
if (isSupport) return
      await ElisaBotMd.sendText(m.chat,'```Please Wait ....```')
      const nima = await fetchJson(`https://api.akuari.my.id/search/searchmod2?query=${text}`)
      const dlnima = await fetchJson(`https://api.akuari.my.id/downloader/dlmod2?link=${text}`)
}
break

case 'clear' : {
await ElisaBotMd.chatModify({ clear: { messages: [{ id: 'ATWYHDNNWU81732J', fromMe: true, timestamp: "1654823909" }] } },  m.chat ,  [] )
}
break

case 'welcome': {
 // if (!isAdmins)  reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].isWelcome) return reply(`*Welcome already on okay*`)
  db.chats[m.chat].isWelcome = true
  reply(`*welcome on*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].isWelcome) return reply(`*Already off okay*`)
  db.chats[m.chat].isWelcome = false
  reply(`*welcome off*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ElisaBotMd.sendMessage(m.chat, drips, `*🧑‍💻 _WELCOME_ 🧑‍💻*`, ElisaBotMd.user.name, m)
  }
    }   
  break 
   
   case 'short' : {
   if(isSupport) return
   if (!text) return m.reply('need url')
   const load = await ElisaBotMd.sendText(m.chat,WAIT)
   await fetchJson(`https://my-shinz.herokuapp.com/api/linkshort/bitly?link=${text}`)
    .then(async (nima) => { 
   await ElisaBotMd.sendText(m.chat,nima.result)
   await ElisaBotMd.sendMessage(m.chat, { delete: load.key }) 
   
    }).catch((err) => m.reply(NOT_FOUND))
 }
 break
 
 case 'yt': case 'yts': case 'getyt' :{
    if (!text) return reply( `need word`)
    await ElisaBotMd.sendText(m.chat,WAIT)
    let yts = require("yt-search")
    let search = await yts(text)
    let teks = `  *『 ʏᴏᴜᴛᴜʙᴇ sᴇᴀᴇᴄʜ ʀᴇsᴜʟᴛs 』*\n\n`
    let no = 1
    for (let i of search.all) {
        teks += `*▷ ʀᴇsᴜʟᴛ :* ${no++}\n*📽️ ᴛɪᴛʟᴇ :* ${i.title}\n*📌 ᴜʀʟ :* ${i.url}\n\n─────────────────\n\n`
    }
   await ElisaBotMd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                              }
                              break
 case 'tag': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins) throw mess.admin
  ElisaBotMd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'url' : {
if(!isNima) return
reply(WAIT)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./nima/lib/uploader')
let media = await ElisaBotMd.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'gopen' : {
if(!isNima) return
await sleep(1000)
await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement')
}
break
case 'gclose' : {
if(!isNima) return
await sleep(1000)
await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement')
}
break
/*

await ElisaBotMd.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(Lang.G_MUTE)).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'open'){
                                      await ElisaBotMd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
                                  } else {
                                  
                                  case 'taggrpnima': {
       const group2Metadata = await ElisaBotMd.groupMetadata(`${args[0]}`).catch(e => {}) : ''
       const group2Name = ggroup2Metadata.subject : ''
       const participantszz = await group2Metadata.participants : ''
       const texttt = args[1] || quoted.m
    ElisaBotMd.sendMessage(m.chat, { text : texttt ? texttt : '' , mentions: participantszz.map(a => a.id)})
     
}
break*/

                            /*  default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
     bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElisaBotMd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}*/
        }
        

    } catch (err) {
       //await ElisaBotMd.sendText('94719574492@s.whatsapp.net',`${util.format(err)}`)
        m.reply(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
// ttdownnima@gmail.com - 7518-b675-9944 (tiktok download api)