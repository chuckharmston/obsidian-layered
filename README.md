# `obsidian-layered`

A focused writing theme for the UI-averse, coming soon.


## Development

To quickstart development:

1. Clone the repository.
2. Install the dependencies: `yarn` (or `npm install`, but `yarn` is recommended).
3. Run a development build: `yarn run dev`.


### `yarn` scripts

Development automation happens through `yarn` scripts:

- `yarn run build`: Builds both CSS files, then appends the settings.
- `yarn run build:obsidian`: Builds `obsidian.css` at the root of the repository.
- `yarn run build:publish`: Builds `publish.css` at the root of the repository, for use with [Obisidian Publish](https://obsidian.md/publish). 
- `yarn run dev`: Builds the CSS files, appends the settings, and installs the theme.
- `yarn run install_theme`: If a a `VAULT` environment variable indicates the path to it, destructively copies the theme to your Obsidian vault (e.g. `VAULT="$HOME/Vault" yarn run install_theme`.)
- `yarn run prepare`: Ensures the pre-commit hooks for Husky. This should happen automatically when installing dependencies.
- `yarn run settings`: Appends the contents of `src/settings.yaml` in a comment at the end of `obsidian.css`, for use with the [Obsidian Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin.
- `yarn run watch`: Builds the CSS files, appends the settings, and installs the theme, then automatically rebuilds if changes are made to the SCSS or YAML files in the `src` directory.


### Automatic builds

Since [`obsidian-releases`](https://github.com/obsidianmd/obsidian-releases) requires the theme to be [contained within a single `obsidian.css` file at the repository root](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/How+to+add+your+theme+to+the+community+theme+store#Preparing+your+repository), a prebuild step enforced by Husky ensures that file 