require("dotenv/config");

const config = [
  {
    name: "default",
    type: "mongodb",
    host: process.env.MONGO_HOST,
    port: 27017,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DATABASE,
    authSource: "admin",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    entities: [
      './src/modules/**/infra/typeorm/schemas/*.ts'
    ]
  }
];

module.exports = config;
