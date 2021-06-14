require("dotenv/config");

const config = [
  {
    name: "default",
    type: "mongodb",
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: [
      './src/modules/**/infra/typeorm/schemas/*.ts'
    ]
  }
];

module.exports = config;
