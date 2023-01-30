const moongose = require("mongoose");

const onDb = async () => {
  try {
    const connection = await moongose.connect(
      `${process.env.cluster}`,
      {
        useNewurlParser: true,
        useUnifiedTopology: true,
      }
    );

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDb corriendo in the port ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = onDb;
