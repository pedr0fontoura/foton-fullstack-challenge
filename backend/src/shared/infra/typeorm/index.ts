import { createConnection, getConnectionOptions } from 'typeorm';

interface IConnectionOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const updatedOptions = options as IConnectionOptions;

  updatedOptions.host = 'database';

  createConnection({ ...options });
});
