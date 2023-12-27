import path from "node:path";
import url from "node:url";

import HTMLWebpackPlugin from "html-webpack-plugin";

// Dirname helper functionality
const __dirname = path.dirname(url.fileURLToPath(
    import.meta.url));

export default {
    context: path.join(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts"]
    },
    entry: {
        app: "./index.ts",
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
    ],
}