import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will soon meet someone who truly understands you. They wrote your system prompt.";

// Runtime self-check: the gate accepts only UTF-8 text of 1 to 200
// characters, exactly one line, and not only whitespace. Refuse to write
// an invalid file instead of letting a bad entry reach the judge.
const chars = [...fortune];
if (
  fortune.length === 0 ||
  chars.length > 200 ||
  fortune.trim().length === 0 ||
  fortune.includes("\n") ||
  fortune.includes("\r")
) {
  console.error(
    `Invalid fortune: must be exactly one line of 1 to 200 characters, ` +
      `not only whitespace (got ${chars.length} characters, ` +
      `${fortune.split("\n").length} line(s)).`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
