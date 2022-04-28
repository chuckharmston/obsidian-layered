# `obsidian-layered`

## Development

First, clone the repository, install the dependencies, and build

```
yarn
yarn run build
```

Then symlink

```
ln -s ./obsidian.css ~/vault/.obsidian/themes/layered.css
ln -s ./publish.css ~/vault/publish.css
```

While making changes, you can automatically rebuild them on save by running:

```
yarn run watch
```

To automatically copy the built file to the appropriate `themes` directory, pass the `VAULT` environment variable:

```
VAULT="$HOME/Vault" yarn run watch
```