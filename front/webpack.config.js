module.exports = {
    mode:"development",
    entry: {
        index: "./scripts/index.js",
        films: "./scripts/createMovie.js"
    },
    output:{ 
        path:__dirname + "/browser",
        filename:"[name].js"
    }
}