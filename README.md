# Serverless TypeScript Express Template

This is a basic template for creating an Express API in AWS lambda using Serverless and TypeScript.

## Prerequisites

- Node.js (recommended version: 16.x)
- yarn (package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/luisccode/serverless-typescript-express-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd serverless-typescript-express-example
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

## Usage

1. Deployment to AWS Lambda:

   ```bash
   yarn run deploy
   ```

   This will package and deploy the application to AWS Lambda using the Serverless framework. Make sure to configure your AWS credentials before running this command.

2. Remove the application from AWS Lambda:

   ```bash
   yarn  run remove
   ```

   This will remove all the resources related to the deployed application from AWS Lambda.

## Project Structure

The project follows the following directory structure:

- `index.ts`: Main file of the Express application.
- `serverless.yml`: Configuration file for deployment to AWS Lambda using the Serverless framework.
- `tsconfig.json`: TypeScript configuration file.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Create a fork of the repository.
2. Create a branch for your new feature (`git checkout -b new-feature`).
3. Make the changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes to the remote repository (`git push origin new-feature`).
5. Open a pull request on GitHub.
