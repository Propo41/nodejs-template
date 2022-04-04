# nodejs-template
a nodejs template with the express framework with webpack and babel installed. It supports absolute imports.

## Complications faced

A huge amount of time was spent trying to figure out how to make the project support absolute imports. I tried using `module-alias` package but failed. It seems that they
only support the commonJS syntax for importing. So, when I used the es module import syntax, it didn't work. Refer more [here](https://github.com/ilearnio/module-alias/issues/113).

Anyways, so after hours of searching, I found a solution that uses babel and webpack to do that.
