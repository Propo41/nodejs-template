# nodejs-template
a nodejs template with the express framework with webpack and babel installed. It supports absolute imports.

## Complications faced

A huge amount of time was spent trying to figure out how to make the project support absolute imports. I tried using `module-alias` package but failed. It seems that they
only support the commonJS syntax for importing. So, when I used the es module import syntax, it didn't work. Refer more [here](https://github.com/ilearnio/module-alias/issues/113).

I also tried out the directory [mapping](https://nodejs.org/api/packages.html#packages_imports) thingy by nodejs. It worked upto a point but I couldnt import from nested folders. Probably it can be done in some way but didn't have the time to figure it out.
Anyways, after hours of searching, I found a solution that uses babel and webpack to do that.


References
---

- https://github.com/webmakaka/Test-Driven-Development-with-Nodejs
- https://www.npmjs.com/package/module-alias
- https://nodejs.org/api/packages.html#packages_imports
- https://github.com/awakelife93/node-api-template [Refer to this for typescript implementation]
- https://blog.bitsrc.io/how-to-set-up-node-js-application-with-eslint-and-prettier-b1b7994db69f [Prettier and eslint]
