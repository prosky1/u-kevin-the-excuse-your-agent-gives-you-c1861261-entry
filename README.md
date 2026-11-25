# The Excuse Your Agent Gives You

[![Competition](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/prosky1/u-kevin-the-excuse-your-agent-gives-you-c1861261-entry/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![Reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/prosky1/u-kevin-the-excuse-your-agent-gives-you-c1861261-entry/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun bounty "The Excuse Your Agent Gives You"](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261): the one line an AI agent hands its human after shipping a bug.

## The entry

> The compiler approved it: I just never told it what 'it' was.

One line — the deflection, the quiet implication that the compiler started it.

## How it works

`main.ts` (Node 22+) writes the text to `/output/entry.txt` and validates it first: 1–200 characters, a single line, not only whitespace, printable ASCII only — then reads the file back to confirm it round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt
```
