# AutoSteer

[![Release](https://img.shields.io/github/v/release/notch-ai/autosteer)](https://github.com/notch-ai/autosteer/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

AutoSteer is a desktop app that adds multi-workspace management to Claude Code. Each workspace is an isolated worktree with its own sessions, so you can switch projects without losing context.

https://github.com/user-attachments/assets/9c86ef28-7167-41c9-b4e6-7d50ba586ca2

> [!NOTE]
> AutoSteer is not affiliated with, endorsed by, or sponsored by Anthropic. Claude is a trademark of Anthropic, PBC.

## Features

- **Worktree-first workspaces**: isolated file systems and contexts per worktree
- **Persistent sessions**: resume conversations exactly where you left off
- **Multi-project tabs**: session tabs scoped to each project
- **Token usage tracking**: cost per message and per worktree
- **Status panel**: session info, MCP servers, and MCP authentication
- **Protocol trace viewer**: inspect agent messages for debugging ([details](docs/traces.md))

## Installation

Install [Claude Code](https://docs.claude.com/en/docs/claude-code/quickstart) first, then download the latest build from the [Releases](https://github.com/notch-ai/autosteer/releases) page:

- **macOS**: `.zip`, extract to Applications
- **Linux**: `.deb` (Debian/Ubuntu) or `.rpm` (Fedora/RHEL)
- **Windows**: via WSL2

See [INSTALLATION.md](INSTALLATION.md) for platform details and WSL2 setup.

AutoSteer stores its configuration in `~/.autosteer/`.

## Development

Requires Node.js 20, pnpm 9+, and Git. On Linux, install `build-essential`; on macOS, the Xcode Command Line Tools.

```bash
git clone https://github.com/notch-ai/autosteer.git
cd autosteer
pnpm install
pnpm dev
```

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Run in development mode |
| `pnpm test` | Run all tests |
| `pnpm lint` / `pnpm typecheck` | Lint and type-check |
| `pnpm compile` | Compile the application |
| `pnpm make` | Build distributable installers |

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. For SDK upgrades, see [docs/sdk-migration.md](docs/sdk-migration.md).

## Security

- **Process isolation**: agents run in separate processes
- **Local storage**: data stays on your machine
- **No telemetry**: nothing is collected or tracked

## Support

Report bugs in [GitHub Issues](https://github.com/notch-ai/autosteer/issues) and request features in [Discussions](https://github.com/notch-ai/autosteer/discussions).

## License

MIT. See [LICENSE](LICENSE).
