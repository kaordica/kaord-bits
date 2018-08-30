# Useful bits for the [Sanity CMS](https://sanity.io)

## The `schemas` folder

This folder is meant to scaffold your CMS's structure and relies on a basic distinction between documents and objects. Also, by classifying objects between generic (in the `objects/_generic` folder), modules (`objects/modules`) and document-specific (as an example, we have `objects/config`), we can scale the schema without getting lost in unruly folders.

You could also opt for concentrating document-specific objects inside an `objects` folder nested in the document's folder. If you choose to do so, or have a better idea for structuring this, let us know and let's improve together :D

Oh, and feel free to add new generic objects that you find useful!