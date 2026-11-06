# Vivid

A bright neon theme for Claude Code and macOS Terminal.app: hot pink, mint green, sunflower yellow, sky blue, violet and cyan on a deep indigo background (`#1A1B2E`).

Every text color has at least 4.4:1 contrast against the background. Main text is 15:1.

## Palette

| Role    | Hex       |
| ------- | --------- |
| Background | `#1A1B2E` |
| Text    | `#F2F2F7` |
| Pink    | `#FF5C8A` |
| Green   | `#3DF5A0` |
| Yellow  | `#FFD84D` |
| Blue    | `#4DA8FF` |
| Violet  | `#C77DFF` |
| Cyan    | `#33E6E6` |

## Claude Code

1. Copy `claude-code/vivid.json` to `~/.claude/themes/vivid.json`.
2. If `~/.claude/themes/` didn't exist before, restart Claude Code once.
3. Run `/theme` and pick **Vivid**.

The format is documented under "Create a custom theme" in the [Claude Code terminal configuration docs](https://code.claude.com/docs/en/terminal-config.md).

## Terminal.app

1. Install [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (optional; falls back to the system monospace font):

   ```bash
   brew install --cask font-jetbrains-mono
   ```

2. Double-click `terminal-app/Vivid.terminal` to import it.
3. In Terminal → Settings → Profiles, select **Vivid** and click **Default**.

To rebuild the profile after changing colors, edit `terminal-app/make_terminal_profile.js` and run:

```bash
osascript -l JavaScript terminal-app/make_terminal_profile.js "$PWD/terminal-app/Vivid.terminal"
```
