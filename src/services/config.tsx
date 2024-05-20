/* eslint-disable @typescript-eslint/no-unused-vars */

import pkj from '../../package.json';

const Config = () => {

   const environment: string = pkj.homepage.includes('dev') ? 'dev' : 'prod'

   const production = {
      endpoint: 'https://v1api.epicontigo.com',
   };

   const localhost = {
      endpoint: 'http://localhost:3002',
   };
   return localhost
};

export default Config;
