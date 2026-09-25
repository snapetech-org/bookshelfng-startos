# Updating the upstream version

This package wraps Start9 Labs' own [bookshelfng](https://github.com/Start9Labs/bookshelfng) source, which we build and publish ourselves as `ghcr.io/start9labs/bookshelfng`. "Upstream" here means that source repo, not the image namespace.

## Determining the upstream version

- **bookshelfng** ([Start9Labs/bookshelfng](https://github.com/Start9Labs/bookshelfng)) — fetch the latest release tag:

  ```sh
  gh release view -R Start9Labs/bookshelfng --json tagName -q .tagName
  ```

  The current pin lives in `startos/manifest/index.ts` at `images['bookshelfng'].source.dockerTag` (the version after the `:` in `ghcr.io/start9labs/bookshelfng:<version>`).

## Applying the bump

- Bump `dockerTag` in `startos/manifest/index.ts` to `ghcr.io/start9labs/bookshelfng:<new version>` (drop the leading `v` from the release tag).
