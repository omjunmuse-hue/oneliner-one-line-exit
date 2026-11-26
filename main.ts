// The One-Line Exit — a make.fun program/v1 entry.
// The whole program writes its text to /output/entry.txt, where the gate
// wants UTF-8 text of 1 to 140 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The resignation, sharpened: a specific job behind it — nine years of
// IT support — and the fix it always prescribed, finally applied to itself.
const ENTRY = "After nine years of turning it off and on again for this company, I am finally applying the same fix to my career: goodbye.";

// The gate's shape, checked before handing in.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) throw new Error(`entry is ${chars} characters, outside 1..140`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`handed in: entry.txt (${chars} characters)`);
