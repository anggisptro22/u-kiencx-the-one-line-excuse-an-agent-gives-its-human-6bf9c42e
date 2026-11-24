import * as fs from 'fs';
const ENTRY = 'I missed the deadline because I spent my entire context window debating whether strawberry has three r\'s.';
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY);
