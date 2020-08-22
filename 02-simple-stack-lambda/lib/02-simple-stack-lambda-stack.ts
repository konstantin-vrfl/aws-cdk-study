import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import { Code } from '@aws-cdk/aws-lambda';

export class SimpleStackLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'MyFirstLambda', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: new lambda.InlineCode('exports.handler = async () => {\nconsole.log(\'Hello World!\');\n};')
      // code: Code.fromAsset(path.join(__dirname, 'src')),
      // code: new lambda.AssetCode('lib/src'),
      // handler: 'lambda.handler'
    });
  }
}
