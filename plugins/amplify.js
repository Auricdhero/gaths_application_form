import {Amplify} from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

// import {Amplify} from 'aws-amplify'

// const awsExports = {
//   // found in your generated aws-export.js file:
//   aws_project_region: 'us-east-1',
//   aws_cognito_identity_pool_id: 'us-east-1:319123594138:userpool/us-east-1_zSek2gbfw',

//   // your new user pool region
//   aws_cognito_region: 'us-east-1',
  
//   // 'Pool Id' found under user pool 'General settings'
//   aws_user_pools_id: 'us-east-1_zSek2gbfw',
  
//   // New 'App client id' under user pool 'App clients'
//   aws_user_pools_web_client_id: '365ecdqmoh9ih3shc6rs9qj8oe',
  
//   // Any other Amplify services settings
// }

// Amplify.configure(awsExports)