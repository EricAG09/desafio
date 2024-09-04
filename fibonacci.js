const User = parseInt(prompt("Digite um número: ")); 

function fib(max) {
    let fibSequence = [0, 1];
    for (let i = 2; true; i++) {
        var n = fibSequence[i - 1] + fibSequence[i - 2];
        if (n > max) break;
        fibSequence.push(n); 
    }

    return fibSequence;
}

function check(number) {
    const sequence = fib(number);

    if (sequence.includes(number)) {
        console.log(`O numero ${number} pertence a sequência`);
    } else {
        console.log(`O numero ${number} não pertence a sequencia`)
    }
}

check(User);