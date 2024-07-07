let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^دابي$/i.test(m.text)) { 
 responses = [ 
 '*عمك جه🔷👑*',
   '*روح دابي🌚*',
   '*عايز مني ايه⚠️*',
 ]; 
 } else if (/^بوووت|بوووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'*تفضل😐*',
   '*؟🤨*',
   '*نعم؟🐧*',
      '*دابي حاضر🔷👑*',
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',
     ];
 }else if (/^dabi|Dabi|DABI$/i.test(m.text)) { 
     responses = [ 
       '*what🤨*',
     ];
   }else if (/^هلا|هاي|هلو|هلوز|اهلا$/i.test(m.text)) { 
     responses = [ 
       '*قول السلام عليكم افضل😐*' ,
     ];
   }else if (/^كيفك|كيف حالك$/i.test(m.text)) { 
     responses = [ 
       'الحمدلله.',  
             '*الحمدلله علي كل شيء🌚*',  
       '*الحمدلله بخير🌝*'  
                   '*الحمدلله علي كل حال🤩*',  
             '*الحمدلله و انت؟👻*',  
             '*الحمدلله علي كل شيء وانت؟🌚*',  
             'الحمدلله علي كل حال و انت*؟🌝*',
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
