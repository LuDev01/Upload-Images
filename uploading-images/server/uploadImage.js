var cloudinary=require("cloudinary").v2;

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
  });

  console.log('Cloudinary config:', cloudinary.config());

  const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
  };

  module.exports = (image) => {
    //imgage = > base64
    // console.log('Image data:', image);
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(image, opts, (error, result) => {
        console.log('Cloudinary error:', error);
        console.log('Cloudinary result:', result);

        if (result && result.secure_url) {
          console.log(result.secure_url);
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      });
    });
  };