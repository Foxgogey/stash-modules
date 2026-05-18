# Stash AI and Messaging Availability Tiles

A lightweight Stash override that adds availability tiles for popular AI services, media platforms, and messengers.

## Included tiles

### AI
- ChatGPT
- Claude
- Gemini
- Perplexity
- Copilot
- Grok
- Poe
- OpenRouter

### Media
- YouTube
- Netflix

### Messaging
- Telegram Web
- WhatsApp Web

## Import URL

Use this URL in Stash:

https://raw.githubusercontent.com/Foxgogey/stash-modules/main/stash_noc_soc_tiles_template.stoverride

Path in Stash:

Override → Download Override

## Status meanings

- `OK 200` — service is reachable and returned a successful response.
- `REACHABLE 403` — service is reachable, but blocks script-based access.
- `DOWN` — service is unreachable.
- `SERVER 5xx` — service responded with a server-side error.

## Files

- `stash_noc_soc_tiles_template.stoverride` — Stash override with tile definitions.
- `stash_tile_check.js` — generic availability check script.
