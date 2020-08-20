#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SimpleStackS3Stack } from '../lib/01-simple-stack-s3-stack';

const app = new cdk.App();
new SimpleStackS3Stack(app, 'SimpleStackS3Stack');
