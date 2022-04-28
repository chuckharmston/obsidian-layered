const { readFileSync } = require('fs');
const { resolve } = require('path');

const { BannerPlugin } = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VAULT = process.env.VAULT || null;

const SETTINGS = `/* @settings
${readFileSync('./src/settings.yaml', 'utf8')}
*/`;

const config = {
    entry: {
        'obsidian': './src/obsidian.scss',
        'publish': './src/publish.scss',
    },
    output: {
        filename: '[name].js',
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new BannerPlugin({
            banner: SETTINGS,
            raw: true,
            test: /obsidian.css$/i,
            entryOnly: true,
            footer: true,
        }),
    ],
};

if (VAULT) {
    config.plugins.push(
        new CopyPlugin({
            patterns: [
                {
                    from: './obsidian.css',
                    to: resolve(VAULT, '.obsidian', 'themes', 'layered.css'),
                    force: true,
                },
            ],
        })
    );
}

module.exports = config;