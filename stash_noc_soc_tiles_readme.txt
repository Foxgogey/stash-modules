Stash NOC/SOC Availability Tiles

Files:
1) stash_tile_check.js - generic tile health-check script.
2) stash_noc_soc_tiles_template.stoverride - override template for Stash.

How to use:
1. Put stash_tile_check.js somewhere reachable by HTTPS URL, for example GitHub raw, your VPS Nginx, or another static hosting.
2. Open stash_noc_soc_tiles_template.stoverride and replace YOUR_RAW_BASE_URL with the base URL where stash_tile_check.js is stored.
3. For RustDesk, replace http://192.168.20.REPLACE_ME with an HTTP health URL. Native RustDesk hbbs/hbbr ports are not HTTP, so the tile cannot check them directly with HTTP GET.
4. Host the .stoverride file too, or open it in Stash/import from Files if your Stash version allows local import.
5. In Stash: Override -> Download Override -> paste URL to .stoverride -> Download -> Enable.

Notes:
- Proxmox and Wazuh use HTTPS on local IPs. If they use self-signed certs, Stash may show DOWN because the TLS certificate is not trusted. Use a trusted local certificate, reverse proxy with a trusted cert, or an HTTP health endpoint.
- These tiles check HTTP reachability, not full login/auth state.
