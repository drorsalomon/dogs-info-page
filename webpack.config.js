/* this is node.js code for exporting this webpack.config.js file.
   First we announce our entry point, meaning the point from which webpack will start its bundling, and add the
   babel-polyfill dependency which polyfills objects like promises that were never available in ES5 into something 
   we could use instead.   
   Then we announce our output property which will tell webpack where to save the bundle file (we pass an object). 
   In the path attribute we specify the absolute path that we want using the node.js 'path' variable that we declared
   before and specifying it using the 'resolve()' method. What we basically do is to join the current absolute path 
   (__dirname) with the path that we want in the project (dist/js). The filename attribute will be the name of the 
   bundle file. 
   There are two types of modes: development and production. Development is faster because it doesn't provide allot of
   configurations or optimizations unlike production. We can also configure the mode in the package.json file. 
   The devServer allows us to update the project we are working on (like ng -s). In it we need to define the 
   'contentBase' which is the folder that from webpack serves the files from. 
   In the plugins section we can define different plugins that we want to use. In this project we defined a 
   plugin that copies and update the html file from our development folder 'src' to our production folder 'dist'.
   So we specified the name of the file that we want to copy and where it is located. The file wont physically appear
   on the disk because it is streamed from the webpack dev server. 
   In he module section we specify the loaders that we want to pass. In this project we want to use the babel loader
   and we are testing for all the .js ($ means at the end) files, with the exclusion of the node_modules folder. */

// node.js code for including a built in path.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
};