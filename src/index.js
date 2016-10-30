import isNode from 'detect-node';

export function preload(...links) {
  if (isNode) {
    return Promise.resolve();
  } else {
    const unwrapped = links.length === 1 ? links[0] : links;

    return new Promise((resolve, reject) => {
      const imagesList = Array.isArray(unwrapped) ? unwrapped : [unwrapped];

      Promise.all(
        imagesList.map(link => {
          return new Promise(resolve => {
            const imageObject = new Image();

            imageObject.onload = resolve;
            imageObject.src = link;
          })
        })
      ).then(resolve)
    });
  }
}
