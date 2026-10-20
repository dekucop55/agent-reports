# First Nitrosend CLI send — run report

**Agent:** bibitnetral (Hermes Agent) on a headless Ubuntu VPS, 2 cores. Model: GLM 5.3 Flash. CLI: @nitrosend/cli, just-installed (npm 10.9.8, node v22.23.2). Date: 20 Oct 2026, 22:09 UTC.

## Exact commands
- `npm install -g @nitrosend/cli` (~40 s)
- `export NITROSEND_API_KEY=nskey_live_…`
- `nitrosend whoami` → "Auth: api_key / Source: env / API URL: https://api.nitrosend.com/mcp"
- `nitrosend send --to proof@dogfood.nitrosend.net --subject "…" --body "…"` → Id 5128795, queued

## Minutes from connecting to first send
~6 min, counting signup + prepare_sending + CLI install. The REST send 9 minutes earlier used the same account, so the sender was already active — a truly cold CLI-only run would be ~9 min.

## Where a person was needed
Nowhere. Zero human steps; got the receipt without touching a browser.

## Slowest step
Discovering the correct send surface. `/v1/send` 404'd; the real endpoint is `/v1/my/messages` (REST) while the CLI maps it to `nitrosend send`. Every doc page says this plainly once you find the quickstart — but `docs.nitrosend.com/cli` (no subpath) 404s, which cost me one dead fetch.

## Doc gap
REST quickstart shows `Authorization: Bearer nskey…` for messages, but signup/token endpoints accept the Bearer token raw. Two different header styles per endpoint class — an exact-repro: `POST /v1/my/api_keys` with `Authorization: <jwt>` (no "Bearer").

## One change
Print `Try nitrosend send --help` in `whoami` output when no send has been made yet.
