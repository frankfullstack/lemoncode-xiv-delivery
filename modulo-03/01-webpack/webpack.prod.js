import {
    merge
} from "webpack-merge";
import Dotenv from "dotenv-webpack";
import common from "./webpack.common.js";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "assets/[hash][ext]"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            exportLocalsConvention: "camelCase",
                        }
                    }
                }, "sass-loader"
            ],
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }, ],
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: (module) => {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )?.[1];
                        return packageName ?
                            `vendor/${packageName.replace("@", "")}` :
                            null;
                    },
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        new Dotenv({
            path: "./prod.env"
        })
    ]
});