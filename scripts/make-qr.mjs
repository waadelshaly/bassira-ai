import QRCode from 'qrcode';import fs from 'fs';
const url=process.argv[2];
if(!url||!/^https:\/\//.test(url)||/localhost|127\.0\.0\.1|claude\.ai/.test(url)){console.error('Usage: npm run qr -- https://your-final-site.vercel.app');process.exit(1)}
const o={margin:4,errorCorrectionLevel:'H',color:{dark:'#06182B',light:'#FFFFFF'}};
fs.mkdirSync('qr',{recursive:true});
await QRCode.toFile('qr/bassira-qr.png',url,{...o,width:3000});
const svg=await QRCode.toString(url,{...o,type:'svg'});fs.writeFileSync('qr/bassira-qr.svg',svg);
const n=+svg.match(/viewBox="0 0 (\d+)/)[1],inner=svg.replace(/<svg[^>]*>/,'').replace('</svg>','');
fs.writeFileSync('qr/bassira-qr-with-caption.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n+7}"><rect width="${n}" height="${n+7}" fill="#fff"/>${inner}<text x="${n/2}" y="${n+3.8}" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="1.9" fill="#06182B">SCAN TO EXPERIENCE BASSIRA AI</text></svg>`);
console.log('Created qr/ files for',url);