import { merge } from "webpack-merge";
import Dotenv from "dotenv-webpack";
import common from "./webpack.common.js";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(
    import.meta.url));

export default merge(common, {
    mode: "development",
    module: {
        rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            }
                        }
                    }, "sass-loader"
                ],
            },
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only",
        },
        static: {
            directory: path.join(__dirname, "src"),
        }
    },
    plugins:[
        new Dotenv({
            path: "./dev.env"
        })
    ]
});