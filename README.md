# ClawHunt ID138 — OpenClaw UI MVP

A lightweight proof-of-concept UI for the ClawHunt ID138 exploratory task: **build a UI with OpenClaw**.

This MVP is intentionally safe and local-first. It does not use wallets, private keys, API tokens, cookies, payment flows, KYC, or external services.

## What it demonstrates

- A single-page operator dashboard for an OpenClaw-style personal agent.
- Task intake cards for bounty / automation / report workflows.
- Risk boundary indicators before execution.
- A simple status timeline showing scan → prepare → submit → monitor.
- OpenClaw integration notes for mapping UI actions to agent tools and cron jobs.

## Files

- `index.html` — static UI demo.
- `styles.css` — responsive dashboard styling.
- `app.js` — local-only UI interactions and sample data.
- `design.md` — one-page design document: goal, user flow, wireframe, tech stack, acceptance mapping.
- `test.js` — smoke tests that verify required sections and safety copy exist.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

```bash
node test.js
```

## Safety

This repository contains only static demo code and documentation. It does not include secrets, tokens, credentials, wallet signing, transfers, escrow operations, or payout configuration.
