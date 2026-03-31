import fs from 'fs';
const data = JSON.parse(fs.readFileSync('lint-layout.json', 'utf16le').replace(/^\uFEFF/, ''));
fs.writeFileSync('output.txt', data[0].messages.map(m => `RULE: ${m.ruleId} MESG: ${m.message} LINE: ${m.line}`).join('\n'), 'utf8');
