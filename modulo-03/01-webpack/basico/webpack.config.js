import path from "node:path";
import url from "node:url";

import HTMLWebpackPlugin from "html-webpack-plugin";

// Dirname helper functionality
const __dirname = path.dirname(url.fileURLToPath(
    import.meta.url));

export default {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts"],
    },
    entry: {
        app: ["./index.ts"],
    },
    output: {
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    module: {
        rules: [{
                test: /\.ts/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: "./index.html",
            scriptLoading: 'blocking',
        }),
    ],
    devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only",
        },
    },
};