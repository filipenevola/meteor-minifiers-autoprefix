Standard Minifier for CSS + autoprefixing
===

This package provides a minifier plugin used for Meteor apps by default and adds autoprefixing to it.

The CSS minifier mostly reduces amount of white-space parsing CSS with ParseCSS.

Compatible with Meteor 1.3+
You will need to remove the `standard-minifier-css` package, but leave the `standard-minifier-js` package.

## Configuration

You can set the autoprefix configuration by creating a `postcss.json` file in the root folder of your app.
Example:
```json
{
    "autoprefixer" : { "browsers": ["last 2 versions"] }
}
```
