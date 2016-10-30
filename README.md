# Pic-loader

This is a tiny module to preload images in the browser. Nobody likes flashing images with constant jumping DOM elements, right? You just pass links, in any convenient way – list of urls, single url, or urls through commas, and you will get a Promise as a return value, which will be resolved when all images will be downloaded.

## Installation

```shell
npm install --save pic-loader
```

## Example

```javascript
import { preload } from 'pic-loader';

const links = ['http://example.com/first_image.jpg', 'http://example.com/second_image.jpg'];

preload(links).then(() => {
  // show needed data
});
```
