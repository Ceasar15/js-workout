let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// pop last item off
secretMessage.pop();

// length after popping 
console.log(secretMessage.length);

// add words to the array
secretMessage.push('to', 'Program');

// change index 7 value
secretMessage[7] = 'right';
// remove first element
secretMessage.shift(0);

// add string to beginning of array
secretMessage.unshift('Programming');

// replace 5 string with know
secretMessage.splice(6, 5, 'know,');

// display a sentence
console.log(secretMessage.join(' '));