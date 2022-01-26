# Pug

## Overview

Pug is a templating engine that will take a pug template file and output a string of HTML.

## References

- [Official Pug Documentation](https://pugjs.org/api/getting-started.html)
- [Free Code Camp - Pug Tutorial](https://www.youtube.com/watch?v=kt3cEjjkCZA)

## Language Reference

### Nested (Child) Elements

HTML elements in pug are nested within each other by placing an ident on the element that you want to nest inside another.

```
doctype html
html
  head
  body
    p Hello There
```

The example pug template above will produce a doctype html header, along with the html header, on the same level as each other.  The html tag will contain two tags within it, the head and body tags.  Finally, the body tag will contain a single p tag within it as well.  Output of the above example is:

```
'<!DOCTYPE html>\n' +
  '<html>\n' +
  '  <head></head>\n' +
  '  <body>\n' +
  '    <p>Hello There</p>\n' +
  '  </body>\n' +
  '</html>'
```

## Generating an HTML File to Preview in Browser

1. `cd pug`.
1. `node`
1. In the `node` REPL, issue the following to write the file to the directory you specify:
    ```javascript
    const pug = require('pug')
    // add any vars that need to get passed to the template
    // into this opts object if needed.
    const opts = { pretty: true }

    fs.writeFile('index.html', pug.renderFile('template.pug', opts), () => { console.log('DONE!') })
    ```
1. Open the directory where you saved that `index.html` file above and drag it to your browser to preview.