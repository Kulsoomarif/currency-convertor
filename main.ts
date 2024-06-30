#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log (chalk.green("\n\tWelcome to Alvera's Currency Convertor\n"));
const currency :any={
     USD:1,//base currency
     EUR: 0.91,
     INR:74.57,
     PKR:280,
}

let user_answer = await inquirer.prompt([
    {
    name:"from",
    message:"Enter currency from",
    type:"list",
    choices:["USD","EUR","INR","PKR"]

},
{
    name:"to",
    message:"Enter currency to",
    type:"list",
    choices:["USD","EUR","INR","PKR"]

},
{
    name:"amount",
    message:"Enter your amount",
    type:"number",

}

])
let fromAmount= currency[user_answer.from];//exchange rate
let toAmount = currency [user_answer.to];//exchange rate
let amount = user_answer.amount
let baseAmount =  amount/fromAmount//USD base currency
let covertedAmount= baseAmount* toAmount
console.log(covertedAmount);
