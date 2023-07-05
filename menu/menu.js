const menu = (pushname, sender, data, hora, prefixo) => { 

// NÃO APAGUE ESSE ${prefixo}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DA CONFIGURAÇÃO.JS, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

// BY: BROXX
// Pode Alterar Todo o Menu 
//  [🩸] KARLA BOT 
return `
╭────────────╮
*┝━ ⽗ 🌴Suas Informações*
╎🇲🇿 NÃO USE DORGAS!!!
╎🧑‍💻 Nome:「  ${pushname}  」
╎🛸 Número: ${sender.split('@')[0]}
╎📅 Data: ${data}
╎🕗 Horário: ${hora}
╎👾 Prefix: ${prefixo}
╰────────────╮
╭────────────╯
*┝━ ⽗ 🎋Para/Todos*
╎
╎🍎⃟𝙆༻ ${prefixo}Perfil
╎🍎⃟𝙆༻ ${prefixo}Play (NOME DA MÚSICA)
╎🍎⃟𝙆༻ ${prefixo}Gerarnick (SEU NICK AKI)
╎🍎⃟𝙆༻ ${prefixo}Suporte
╎🍎⃟𝙆༻ ${prefixo}Infogp
╎🍎⃟𝙆༻ ${prefixo}Admins
╎🍎⃟𝙆༻ ${prefixo}Toimg (Marcar/fig)
╎🍎⃟𝙆༻ ${prefixo}S
╰────────────╮
╭────────────╯
*┝━ ⽗ 🪁Para/Adms*
╎
╎💎⃟𝙆༻ ${prefixo}Promover (@NUMERO) 
╎💎⃟𝙆༻ ${prefixo}Rebaixar (@NUMERO) 
╎💎⃟𝙆༻ ${prefixo}Banir (@NUMERO) 
╎💎⃟𝙆༻ ${prefixo}Bemvindo 1 / 0
╎💎⃟𝙆༻ ${prefixo}Gp (FECHA, ABRIR) 
╎💎⃟𝙆༻ ${prefixo}Mudardk (DESCRIÇÃO) 
╎💎⃟𝙆༻ ${prefixo}Mudarnm (NOME) 
╎💎⃟𝙆༻ ${prefixo}Gplink
╎💎⃟𝙆༻ ${prefixo}Antilink 1 / 0
╎💎⃟𝙆༻ ${prefixo}Resetarlink
╎💎⃟𝙆༻ ${prefixo}Marcar
╰────────────╮
╭────────────╯
*┝━ ⽗ 👑Para/dono*
╎
╎❤️‍🔥⃟𝙆༻ ${prefixo}Sair
╎❤️‍🔥⃟𝙆༻ ${prefixo}Executar
╎❤️‍🔥⃟𝙆༻ ${prefixo}Seradm
╎❤️‍🔥⃟𝙆༻ ${prefixo}Sermembro
╰────────────╯`
}
exports.menu = menu
//// NÃO APAGUE ESSE ` `
/// ( CASO NÃO QUEIRA ERROS ) \\\\
