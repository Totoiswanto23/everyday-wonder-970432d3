// everyday-wonder-970432d3: one sentence, at most 200 characters, that makes
// a small everyday moment strange and new. The program writes that sentence
// to /output/entry.txt, where the gate reads it.
//
// The moment: catching your own reflection mid-yawn in a lift mirror.
// Why this angle: the brief's own examples reach for the lift door, the
// kettle and the puddle, so a second lift-door line would blend in. A
// mirror does something stranger — it turns you into a stranger to
// yourself, politely ignoring you, for exactly one floor. Grounded in
// something everyone has lived (a lift mirror, a yawn), surprising in a
// single read, and no second image crowds it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One sentence: the mirror, the yawn, and the stranger inside it
// politely ignoring you back — the everyday moment made strange in a
// single read, with the twist landing on the last two words.
const ENTRY =
  'The lift mirror caught me mid-yawn, and for one floor the stranger inside it politely ignored me back.';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  process.exit(1);
}
if (!/[.!?]$/.test(ENTRY) || ENTRY.split(/[.!?]/).filter(Boolean).length !== 1) {
  console.error('entry must be exactly one sentence');
  process.exit(1);
}

// No trailing newline: the file is exactly the one sentence.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
