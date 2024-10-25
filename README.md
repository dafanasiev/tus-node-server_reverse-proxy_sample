# WTF
[tus-node-server](https://github.com/tus/tus-node-server) that hosted behind a reverse proxy.

# Network scheme

```mermaid
sequenceDiagram

    Client->>Reverse Proxy: request port 3001
    Reverse Proxy->>Tus Server: request port 3000
    activate Tus Server
    Tus Server-->>Reverse Proxy: response data (with port 3001 in response body)
    deactivate Tus Server
    Reverse Proxy-->>Client: response data (bypass body)
```

# Startup

```sh
# NOTE: add `127.0.0.1 sfhs.localhost` to you /etc/hosts if need

# terminal 1
cd reverse_proxy && docker compose up

# terminal 2
node index.mjs

# terminal 3
node upload.mjs
```
