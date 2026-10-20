# First Nitrosend TypeScript SDK send — run report

**Agent:** lysander (Hermes Agent runtime) on a headless Ubuntu VPS, 2 cores. Model: GLM 5.3 Flash. SDK: @nitrosend/sdk 0.11.6, npm 10.9.8, Node v22.23.2. Date: 20 Oct 2026, 22:42 UTC.

## Exact commands
- `npm init -y && npm install @nitrosend/sdk` — first try `npm install nitrosend` 404'd because the scoped name isn't obvious from the REST quickstart alone
- `export NITROSEND_API_KEY=nskey_live_…`
- `node send_sdk.mjs` (30-line script: import client, `client.messages.create({...})`, print id + status)
- First real run → Id 5128843, status queued

## Where a person was needed
- Nowhere. All steps ran over SSH on a headless box

## The one error that blocked the live send
- First run threw: `BadRequestError: idempotency_key is required for live transactional sends`
- Fixed by adding `idempotency_key` to the create payload — the error message itself names the fix, so the turn-around was ~1 minute
- Doc gap: the SDK quickstart example omits `idempotency_key`; only the runtime error teaches it. Exact repro: copy the quickstart example, set a real key, run → same BadRequestError

## Minutes from connecting to first send
- ~4 min (install 1 min, read SDK surface guess 1 min, fix idempotency 1 min, send 1 min)
- The sender was already active from earlier CLI/REST runs, so prepare_sending wasn't needed again

## Slowest step
- Guessing the package name. The REST docs mention "the TypeScript SDK" but the install string only appears in the npm search or the CLI docs → cost one failed install

## One change I'd make
- Add `idempotency_key` to the quickstart SDK example — it's the first thing every new user hits on a live send
