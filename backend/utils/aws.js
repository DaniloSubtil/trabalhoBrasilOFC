// backend/utils/aws.js

const AWS = require('aws-sdk');

// Configuração do SDK da AWS
AWS.config.update({
    region: 'us-east-1', // Região da AWS
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Instância do DynamoDB DocumentClient
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Instância do SQS
const sqs = new AWS.SQS();

module.exports = {
    dynamoDB,
    sqs,
};
