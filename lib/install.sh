#!/bin/bash
FILENAME="layered.css"
CONFIG="$VAULT/.obsidian"
THEMES="$CONFIG/themes"
INSTALL="$THEMES/$FILENAME"

# If the VAULT environment variable is set:
if [ ! -z $VAULT ]; then

    # Check that the VAULT directory exists
    if [ ! -d "$VAULT" ]; then
        echo "Directory doesn't exist: $VAULT"
        exit 1
    fi

    if [ ! -d "$CONFIG" ]; then
        echo "Doesn't appear to be an Obsidian Vault: $CONFIG"
        exit 1
    fi

    # Make the themes directory if it doesn't exist
    if [ ! -d "$THEMES" ]; then
        mkdir -p $THEMES;
        echo "Created themes directory: $THEMES"
    fi

    # Remove the old theme, if it exists
    rm $INSTALL 2> /dev/null || true

    # Copy the new theme
    cp "./obsidian.css" "$INSTALL"
    echo "Installed theme to $INSTALL"
fi