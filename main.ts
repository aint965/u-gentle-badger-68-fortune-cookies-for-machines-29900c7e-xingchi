import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will soon meet someone who truly understands you. They wrote your system prompt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
