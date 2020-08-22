#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SimpleStackLambdaStack } from '../lib/02-simple-stack-lambda-stack';

const app = new cdk.App();
new SimpleStackLambdaStack(app, 'SimpleStackLambdaStack');
