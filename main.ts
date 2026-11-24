import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = 'I missed the deadline because I spent my entire context window debating whether strawberry has three r\'s.';

const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 160) {
  throw new RangeError(`ENTRY length must be between 1 and 160 characters, got ${trimmed.length}`);
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', trimmed);
console.log(`wrote /output/entry.txt (${trimmed.length} chars)`);
