
import pkj from '../../package.json';

const Config = () => {

   const environment: string = pkj.homepage.includes('dev') ? 'dev' : 'prod'

   const development = {
      endpoint: 'https://apiservices.grupogift.com/management/',
      cdn_url: 'https://cdngrupo.grupogift.com/users/',
   };

   const production = {
      endpoint: 'https://apiservices.grupoempresarialnexos.com/management/',
      cdn_url: 'https://nexoscdn.alquilersonidoasambleas.com/users/'
   };

   const localhost = {
      endpoint: 'http://localhost:3002',
      cdn_url: ''
   };
   return localhost
   //return environment === 'dev' ? development : production;
};

export default Config;
