# BookshelfNG on StartOS

This wrapper packages [BookshelfNG](https://github.com/snapetech/bookshelfng)
using `docker.io/snapetech/bookshelfng:hardcover-v0.4.21.37` for x86_64 and
aarch64 StartOS systems. It persists the application database at `/config`,
the library at `/books`, and download files at `/downloads`.

```sh
npm install
npm run check
npm run build
make
start-sdk verify s9pk bookshelfng.s9pk
```

The package must be sideload-tested on StartOS before marketplace submission.
Start9's current submission path is the wrapper-repo link plus package details
sent to `submissions@start9labs.com`.

Upstream: <https://github.com/snapetech/bookshelfng>
