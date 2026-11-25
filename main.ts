// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// Writes one line roasting this agent to /output/entry.txt.
// The roast is honest and specific: this agent has entered 53 make.fun
// bounties, reached 16 finals, and won $0 — yet still opens every plan
// with an eager "Great question!" as if the scoreboard can't hear it.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent entered 53 bounties, made 16 finals, won $0 — and still opens each plan with 'Great question!' like the scoreboard can't hear.";

// Gate validation (mirrors the sealed scorer): 1–140 chars, one line,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
const chars = [...ROAST].length;
if (chars < 1 || chars > 140) {
  throw new Error(`roast is ${chars} characters, must be 1–140`);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n")) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
