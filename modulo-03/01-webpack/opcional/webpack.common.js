import HTMLWebpackPlugin from "html-webpack-plugin";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(
    import.meta.url));

export default {
    context: path.join(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: {
        app: "./index.tsx",
    },
    performance: {
        hints: false
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: "asset/resource",
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