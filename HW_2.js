Write a validation script using functions:

1. The script should take a string as input.
2. After checking the string, the script should output a message in the console
specifying exactly what is wrong with the entered string.
3. The string must contain at least 5 characters.
4. The string must contain no more than 64 characters.
5. The string must contain letters.
6. The string must contain at least one uppercase letter.
7. The string must contain at least one digit.
8. The string must contain at least one "@" symbol.
9. The string must not be empty.



function validateString(input) {
    console.log(`Validate an input: '${input}'`);

    if (typeof input !== 'string') {
        console.error(`Expected a string, but was a ${typeof input}`);
        return;
    }
    if (input.length === 0) {
        console.error(`The string must not be empty`);
        return;
    }
    if (input.length < 5) {
        console.warn(`The string must contain at least 5 characters`);
    }
    if (input.length > 64) {
        console.warn(`The string must not exceed 64 characters`);
    }
    if (!/[a-zA-Z]/.test(input)) {
        console.warn(`The string must contain letters`);
    }
    if (!/[A-Z]/.test(input)) {
        console.warn(`The string must contain at least one uppercase letter`);
    }
    if (!/\d/.test(input)) {
        console.warn(`The string must contain at least one digit`);
    }
    if (!input.includes('@')) {
        console.warn(`The string must contain at least one '@'`);
    }
}
