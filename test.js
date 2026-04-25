const fs = require('fs');
const required = ['index.html','styles.css','app.js','design.md','README.md'];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`missing ${file}`);
}
const html = fs.readFileSync('index.html','utf8');
const readme = fs.readFileSync('README.md','utf8');
const design = fs.readFileSync('design.md','utf8');
for (const phrase of ['Opportunity queue','Execution plan','Safety boundary','Status timeline']) {
  if (!html.includes(phrase)) throw new Error(`missing UI phrase ${phrase}`);
}
for (const phrase of ['no wallet signing','no transfers','no escrow actions','no secrets']) {
  if (!html.toLowerCase().includes(phrase) && !readme.toLowerCase().includes(phrase)) throw new Error(`missing safety phrase ${phrase}`);
}
if (!design.includes('Wireframe') || !design.includes('Acceptance mapping')) throw new Error('design doc incomplete');
console.log('ID138 OpenClaw UI smoke tests passed');
