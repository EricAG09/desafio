const user = parseInt(prompt("Digite uma palavra: "));

function countA (input) {
    var count = 0;

    for (let i = 0; i< input.length; i++) {
        if (input[i] === 'a' || input[i] === 'A'){
            count ++;
        }
    }

    if (count > 0) {
        console.log(`A letra "A" aparece nesta palavra ${count} vezes`);
    } else {
        console.log(`a letra "A" não apareceu`);
    }
}

countA(user);