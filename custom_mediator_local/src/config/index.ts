import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV || 'local'}`) });

export default {
  env: process.env.NODE_ENV ?? 'local',
  port: process.env.PORT ?? '5000',
  host: process.env.HOST ?? 'localhost',
  openhimConfig: {
    apiURL: process.env.OPENHIM_URL,
    username: process.env.OPENHIM_USERNAME,
    password: process.env.OPENHIM_PASSWORD,
    trustSelfSigned: process.env.OPENHIM_TRUST_SELF_SIGNED,
  }
};
