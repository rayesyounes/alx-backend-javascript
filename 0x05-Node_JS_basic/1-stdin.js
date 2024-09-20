console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
    const arg = process.stdin.read();
    if (arg !== null) {
        process.stdout.write(`Your name is: ${arg}`);
    }
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});