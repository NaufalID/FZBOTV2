let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > BANNED :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot

┃> Note : Jika Tidak Membayar Denda
┃> Maka Bot Akan Banned User Permanen 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Youtube', url: 'https://www.youtube.com/channel/UC1esKQw-DKM5Xa5hF7vqdGA'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^bandenda$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP
