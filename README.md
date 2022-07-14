# Image Processing API project using Sharp library

The project involves creating basic APIs for resizing images. This work has been done for a course for learning purposes.

It currently has the following APIs:

- Image API - For viewing the source images in the `images` directory.
- Image Resize API - For generating and viewing the resized versions of the source images. The resized images will be saved to the `resizedImages` directory.

## How to run it?

You will need to install `npm` and `node.js`. ( https://nodejs.org/en/ )

For quickly testing this, check out the code and then navigate to the directory and run:

```
npm install
```

Then you can test the code using:

```
npm run start
```

You can build the code using:

```
npm run build
```

And then you should be able to test the build using:

```
node dist
```

## How to use it?

For convenience, a barebones page can be viewed for testing the API.

You can use a web browser, curl, or any other REST client for calling the APIs.

- Image API - `GET /api/image?name=fjord.jpg`

  Response will be `200 OK` along with the image file, if a source image by the name is found in the `images` directory.
  Else if a source image is not found, the response will be `404 Not Found`.

- Image Resize API - `GET /api/image-resize?name=fjord.jpg&width=300&height=200`

  This will generate a resized version of the specified image file and save it to the `resizedImages` directory.
  If a resized image file was already present in `resizedImages` directory, then that image will be returned.

  Response will be `200 OK` along with the resized image file, if a source image by the name is found and if the resized image is successfully generated.

  If source image file is not found, the response will be `404 Not Found`.

  If there's an error while generating the resized image file, the response will be `500 Internal Server Error`.

## Author

Arpit Srivastava (@transopac)
