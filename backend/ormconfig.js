require("dotenv/config");

const test = {
  name: "default",
  type: "mongodb",
  host: 'localhost',
  port: 27017,
  database: 'test',
  useUnifiedTopology: true,
  useNewUrlParser: true,
  entities: [
    './src/modules/**/infra/typeorm/schemas/*.ts'
  ]
};

const development = {
  name: "default",
  type: "mongodb",
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  authSource: 'admin',
  useUnifiedTopology: true,
  useNewUrlParser: true,
  entities: [
    './src/modules/**/infra/typeorm/schemas/*.ts'
  ]
};

const production = {
  name: "default",
  type: "mongodb",
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  authSource: 'admin',
  useUnifiedTopology: true,
  useNewUrlParser: true,
  entities: [
    './dist/modules/**/infra/typeorm/schemas/*.js'
  ]
};

const env = {
  test,
  development,
  production
}

const config = env[process.env.NODE_ENV];

module.exports = config;
