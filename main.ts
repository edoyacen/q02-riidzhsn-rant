// This entry writes the answer for "Angry Judge: The Short Rant Contest" to the output
// directory as entry.txt, creating the directory first if it does not already exist.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Dear judge, I wrote this at 3 AM because my build passed locally, failed in CI, and my agent called it a minor environmental nuance. The environment is the whole application now. I have slept in worse conditions than this deploy.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
