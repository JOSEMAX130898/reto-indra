<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Express API on AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the traditional Serverless Framework.

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

You can start local emulation with:

```
npm run dev
```

Unit tests with:

```
npm run test
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://c2ev2mbevc.execute-api.us-east-1.amazonaws.com/
```

Documentation in OpenApi/Swagger, you can call the via HTTP:

```bash
curl https://c2ev2mbevc.execute-api.us-east-1.amazonaws.com/api-docs/
```


To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
