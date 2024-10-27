import 'dotenv/config';
import * as joi from 'joi';

interface IEnvironment {
  PORT: number;
  URL_CONNECTION_MONGO: string;
}

const environmentSchema = joi
  .object({
    PORT: joi.number().default(3000),
    URL_CONNECTION_MONGO: joi.string().required(),
  })
  .unknown(true);

const { error, value } = environmentSchema.validate(process.env);

if (error) {
  throw new Error(
    `Config validation error: ${error.message} for environment not configured`,
  );
}

const environmentVariable: IEnvironment = value;

export const envs = {
  port: environmentVariable.PORT,
  urlConnectionMongo: environmentVariable.URL_CONNECTION_MONGO,
};
