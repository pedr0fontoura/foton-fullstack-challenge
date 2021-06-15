require("dotenv/config");

const development = [
  {
    name: "default",
    type: "mongodb",
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_DATABASE,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    entities: [
      './src/modules/**/infra/typeorm/schemas/*.ts'
    ]
  }
];

const production = [
  {
    name: "default",
    type: "mongodb",
    host: process.env.MONGO_HOST,
    port: 27017,
    database: process.env.MONGO_DATABASE,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    entities: [
      './dist/modules/**/infra/typeorm/schemas/*.js'
    ]
  }
];

module.exports = process.env.NODE_ENV === 'development' ? development : production;
