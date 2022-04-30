#!/bin/bash
SETTINGS="./src/settings.yaml"
THEME="./obsidian.css"

echo "" >> $THEME
echo "/* @settings" >> $THEME
echo "" >> $THEME
cat $SETTINGS >> $THEME
echo "" >> $THEME
echo "*/" >> $THEME