#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.green("\n\tWelcome to Alvera's Currency Convertor\n"));
var currency = {
    USD: 1, //base currency
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
};
var user_answer = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter currency from",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter currency to",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
var fromAmount = currency[user_answer.from]; //exchange rate
var toAmount = currency[user_answer.to]; //exchange rate
var amount = user_answer.amount;
var baseAmount = amount / fromAmount; //USD base currency
var covertedAmount = baseAmount * toAmount;
console.log(covertedAmount);
