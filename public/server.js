const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/findSummation', (req, res) => {
    const { number } = req.query;
    const result = findSummation(Number(number));
    res.send(`Summation Result: ${result}`);
});

app.get('/uppercaseFirstandLast', (req, res) => {
    const { string } = req.query;
    const result = uppercaseFirstandLast(string);
    res.send(`Uppercased String: ${result}`);
});

app.get('/findAverage_and_Median', (req, res) => {
    const { numbers } = req.query;
    const numArray = numbers.split(',').map(Number);
    const result = findAverage_and_Median(numArray);
    res.send(`Average: ${result.average}, Median: ${result.median}`);
});

app.get('/find4Digits', (req, res) => {
    const { string } = req.query;
    const result = find4Digits(string);
    res.send(`First 4-Digit Number: ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


function findSummation(N = 1) {
    if (typeof N !== 'number' || N <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

function uppercaseFirstandLast(str) {
    if (typeof str !== 'string') {
        return false;
    }
    return str.split(' ').map(word => {
        if (word.length === 1) {
            return word.toUpperCase();
        }
        return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
    }).join(' ');
}
function findAverage_and_Median(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        return false;
    }
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;

    let sortedArr = arr.slice().sort((a, b) => a - b);
    let median;
    let middle = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
        median = sortedArr[middle];
    }

    return { average: avg, median: median };
}
function find4Digits(str) {
    let match = str.match(/\b\d{4}\b/);
    return match ? match[0] : false;
}
app.use(express.static('public'));
