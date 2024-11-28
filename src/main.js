const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function greet(bot_name, birth_year) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

async function remind_name() {
    console.log("Please, remind me your name.");
    let name = await askQuestion("");
    console.log("What a great name you have, " + name + "!");
}

async function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(await askQuestion(""));
    let rem5 = Number(await askQuestion(""));
    let rem7 = Number(await askQuestion(""));

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

async function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(await askQuestion(""));
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

async function test() {
    console.log("Let's test your programming knowledge.");

    console.log("Why do we use methods? " +
        "1. We don't\n" +
        "2. Hello why not\n" +
        "3. Never\n" +
        "4. Yes");

    let answer;

    do {
        answer = Number(await askQuestion(""));
        if (answer !== 4) {
            console.log("Please, try again.");
        }
    } while (answer !== 4);
}

function end() {
    console.log("Completed, have a nice day!");
    rl.close(); // Close the readline interface
}

async function main() {
    await greet('Aid', '2020');  // change it as you need
    await remind_name();
    await guess_age();
    await count();
    await test();
    end();
}

main();
