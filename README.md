# generate nft engine 

Create generative art by using the canvas api and node js. Before you use the generate nft engine , make sure you have node.js(v16.18.0) installed. @auther yichenglee

# Installation 

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://github.com/Cessiia/generate-nft-engine.git
```

Alternatively you can run this command if you have node installed.

```sh
npm install
```

# Usage

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. You can name the assets anything as long as it has a rarity weight attached in the file name like so: `example element#70.png`. You can optionally change the delimiter `#` to anything you would like to use in the variable `rarityDelimiter` in the `src/config.js` file.

Once you have all your layers, go into `src/config.js` and update the `layerConfigurations` objects `layersOrder` array to be your layer folders name in order of the back layer to the front layer.

When you are ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory:

```sh
npm run build
```

or

```sh
node index.js
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this:

You can also add extra metadata to each metadata file by adding your extra items, (key: value) pairs to the `extraMetadata` object variable in the `config.js` file.

```js
const extraMetadata = {
  creator: "yichenglee",
};
```

That's it.

# Generate GIF images from collection

In order to export gifs based on the layers created, you just need to set the export on the `gif` object in the `src/config.js` file to `true`. You can also play around with the `repeat`, `quality` and the `delay` of the exported gif.

Setting the `repeat: -1` will produce a one time render and `repeat: 0` will loop forever.


# Updating baseUri for IPFS and description

```sh
npm run update_info
```

# Generate a preview image

```sh
npm run preview
```

# Generate pixelated images from collection

```sh
npm run pixel
```

# Printing rarity data (Experimental feature)

```sh
npm run rarity
```


