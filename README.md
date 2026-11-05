# BookshelfNG on StartOS

This wrapper packages [BookshelfNG](https://github.com/snapetech/bookshelfng)
using `docker.io/snapetech/bookshelfng:hardcover-v0.4.21.37` for x86_64 and
aarch64 StartOS systems. It persists the application database at `/config`,
the library at `/books`, and download files at `/downloads`.

```sh
npm ci
npm run check
npm run build
make
start-sdk verify s9pk bookshelfng.s9pk
```

The wrapper uses StartOS SDK 4.0.0 and its dependency builder API. `npm ci` installs the checked-in lockfile; regenerate it from a clean dependency tree when upgrading the SDK to avoid retaining obsolete bundled tools.

The package must be sideload-tested on StartOS before marketplace submission.
Start9's current submission path is the wrapper-repo link plus package details
sent to `submissions@start9labs.com`.

Upstream: <https://github.com/snapetech/bookshelfng>

## Security scanning

Run scripts/security-scan-local.sh for local Semgrep Community Edition and applicable Trivy scans. GitHub Actions scans use private ephemeral JIT runners. CodeQL is disabled. See docs/security-scanning.md for offline setup and updates. Run scripts/install-security-hooks.sh once to enable the staged Semgrep pre-commit hook.
