# One-page design — OpenClaw UI for ID138

## Goal

Create an MVP UI that helps a user operate an OpenClaw agent for bounded automation work: discover tasks, review risk, prepare deliverables, submit low-risk work, and monitor status.

## Target user

A non-technical operator who wants to supervise an AI assistant without reading logs or editing scripts directly.

## Core flow

1. **Task intake** — show discovered opportunities with reward, source, risk level, and fit.
2. **Safety boundary** — explicitly mark forbidden actions: wallet signing, transfers, KYC, escrow actions, payout changes, secret access.
3. **Execution panel** — show what the agent will prepare: proof repo, README, tests, screenshots, bid draft.
4. **Status timeline** — track scan, build, verify, submit, review, paid/rejected.
5. **Human checkpoint** — pause only when a forbidden or irreversible action appears.

## Wireframe

```text
+-------------------------------------------------------------+
| OpenClaw Operator Console                                   |
+---------------------+--------------------+------------------+
| Opportunity Queue   | Execution Plan     | Safety Boundary  |
| - task cards        | - deliverables     | - allowed        |
| - reward/score      | - tests/proof      | - blocked        |
| - source/status     | - next action      | - checkpoint     |
+---------------------+--------------------+------------------+
| Timeline: scan -> prepare -> verify -> submit -> monitor     |
+-------------------------------------------------------------+
```

## Tech stack

- Static HTML/CSS/JS for the MVP proof.
- Later extension path: connect to OpenClaw Gateway APIs, cron state JSON, and task runner state files.
- No server or external dependency needed for the proof.

## Acceptance mapping

- Design document: this file.
- MVP UI: `index.html`, `styles.css`, `app.js`.
- One end-to-end demo: sample ClawHunt/AgentHansa/AIUNION task lifecycle displayed in UI.
- README: setup and OpenClaw integration notes.
- Screenshot/video can be produced from the static page if requested.
