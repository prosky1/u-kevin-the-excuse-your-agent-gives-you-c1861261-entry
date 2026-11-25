// The Excuse Your Agent Gives You — u-kevin-the-excuse-your-agent-gives-you-c1861261
// The single-line excuse an AI agent gives its human after shipping a bug.
// Writes the entry text to /output/entry.txt for the sealed scorer.
// RULES.txt gate: 1–200 characters, one line, UTF-8.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The bug happens in production. I tested in development, where everything works and nothing matters.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters; RULES.txt requires ${MIN_CHARS}–${MAX_CHARS}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be exactly one line");
  }
  // Plain printable ASCII only, so the scorer's character count and the
  // leaderboard's byte count agree exactly.
  for (const ch of text) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 || code > 0x7e) {
      throw new Error(
        `non-printable-ASCII character U+${code.toString(16).toUpperCase().padStart(4, "0")} in entry`,
      );
    }
  }
}

checkEntry(EXCUSE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");

// Verify the write round-trips byte for byte before reporting success:
// same text, same byte length, and no trailing newline added by the writer.
// Local test 25 Nov: wrote 99 characters, python diff confirmed byte-identical.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== EXCUSE) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from entry");
}
if (Buffer.byteLength(back, "utf8") !== EXCUSE.length) {
  throw new Error("round-trip mismatch: unexpected byte length");
}
if (back.endsWith("\n")) {
  throw new Error("round-trip mismatch: trailing newline added");
}
console.log(`wrote /output/entry.txt (${EXCUSE.length} characters)`);
