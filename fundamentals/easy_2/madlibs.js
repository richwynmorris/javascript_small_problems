let rlSync = require('readline-sync');
let noun = rlSync.question('Enter a noun:\n');
let verb = rlSync.question('Enter a verb:\n' );
let adjective = rlSync.question('Enter an adjective:\n');
let adverb = rlSync.question('Enter an adverb:\n');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
