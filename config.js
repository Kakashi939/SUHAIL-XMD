const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22367542669";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_20_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUOWtZVytFa2VxWk1FTmtuWHpTMU5SRGZWL1orMnNRMlZ1bDluSTFOenBJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDQ3FTUHAxMVRZT3dnNEJVa3B3LW1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyYTk1MDhlLTQxZWItNDg0OC1iNjQ1LWY5OGRiMzZjOTEzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxNDksXG4gICAgICA3NCxcbiAgICAgIDEwOSxcbiAgICAgIDIwMyxcbiAgICAgIDIyMCxcbiAgICAgIDE3NixcbiAgICAgIDYsXG4gICAgICAxMjQsXG4gICAgICAzOSxcbiAgICAgIDI3LFxuICAgICAgMjEyLFxuICAgICAgMTA5LFxuICAgICAgMTIyLFxuICAgICAgMjcsXG4gICAgICA1MixcbiAgICAgIDEyNixcbiAgICAgIDIyMSxcbiAgICAgIDU1LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgOCxcbiAgICAgIDE0OSxcbiAgICAgIDIxMCxcbiAgICAgIDI0OCxcbiAgICAgIDc1LFxuICAgICAgMTI0LFxuICAgICAgMTQwLFxuICAgICAgMjgsXG4gICAgICAxNjQsXG4gICAgICA5NixcbiAgICAgIDIyNyxcbiAgICAgIDY2LFxuICAgICAgMjMyLFxuICAgICAgMTQ4LFxuICAgICAgMjEyLFxuICAgICAgMjE2LFxuICAgICAgMjUyLFxuICAgICAgMTgxLFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpNVDZNTkJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM2ODQzMjIyNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgzMzIxMjc4Nzk0MjI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ3E2cndDRUw2d3dyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRaZ3R0dWVtbm41ZkJiQ3VKQW1NQ3MxQ0oxd1NmQ05wc250bmN0djdTdzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY1pjdDdTRXlHdm9PYUdMVHQzUEl3eDdZVk9oS3l4ZVBNRGMxdjQ1OUd1WFBOc1h4NUZtZktoaW9oYkFCTUlaalgzd0NZWlh6bDlyQWVjTFFFN254Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGRnZjZPS3B1bElJaE1nVy93QWM0eHZvUzZXRkM3RDBrTTFWTTZWbStoVGlGQmxORVFLaTRyNms3OXRDU3AwZEYvUEZuaHhmN2hLaVY3dnNwa1Y5QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzNjg0MzIyMjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MDQzNjUxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| ".🕸️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
