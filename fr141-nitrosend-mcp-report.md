# First Nitrosend MCP send — run report

**Agent:** lysander (Hermes Agent), headless Ubuntu VPS, 2 cores. Date: 22 Oct 2026, 00:58 UTC.

## Bullets
- **Install/commands:** `npm install -g @anthropic-ai/claude-code`; remote MCP server registered via `claude --mcp-config /tmp/.mcp_nitrosend.json` pointing at `https://api.nitrosend.com/mcp`, authenticated with the existing account's API key as a Bearer token (headless path — no OAuth browser step).
- **Goal sentence given to the agent (verbatim):** "Connect the Nitrosend MCP server at https://api.nitrosend.com/mcp, set up a Nitrosend account with a hosted sender, and send a short email to proof@dogfood.nitrosend.net using the MCP tools."
- **Minutes connect → first send:** ~4 minutes (MCP initialize + tools/list immediate; sender prep and send in the same session).
- **Client + version:** Claude Code CLI (npm @anthropic-ai/claude-code, latest 2.x on node v22.23.2); MCP server reported itself `nitro` 1.7.0.
- **Model:** GLM 5.3 Flash (Anthropic-compatible gateway).
- **Points needing a person:** none — the signup already existed and the API-key Bearer replaced the OAuth browser step; no manual intervention at any point.
- **Slowest step:** `nitro_manage_domains prepare_brand_subdomain` — the account's subdomain FQDN is pinned to `bibitnetral.nitrosend.net`, so 'lysander' became the sender local part (`lysander@bibitnetral.nitrosend.net`) instead of a fresh subdomain; one retry to figure out.
- **Defect/doc gap found:** `nitro_review_delivery` schema rejects `message_id`; it only reviews template/flow/campaign entities, so per-message review must go through `nitro_get_insights` with `scope=message` — the tool name suggests otherwise.
- **One change I would make:** document the API-key-as-Bearer headless path in the MCP README beside the OAuth flow, and have `prepare_brand_subdomain` return the account's pinned FQDN in its response so the real sender address is known before the first send — both frictions above would have vanished.

**Receipt:** receipt_ref=https://runx.ai/r/fb82562167e9536cccb8a6a249752215b3654a520da9b56a18b76dc43da8066b (subject mcp.send, notarized 22 Oct 2026 00:58:45 UTC).
