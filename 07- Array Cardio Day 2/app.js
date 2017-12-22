// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
/* 
    The some() method tests whether at least one element in the array passes the test implemented by the provided function.
*/ // Array.prototype.some() // is at least one person 19 or older?

const is_adult = people.some(function(person) {
    const current_year = (new Date()).getFullYear();
    if (current_year - person.year >= 19) {
        return true;
    }
});

// const is_adult = people.some(person => {
// 	const current_year = (new Date()).getFullYear();
// 	return current_year - person.year >= 19;
// });

// const is_adult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log({is_adult});

/*
    The every() method tests whether all elements in the array pass the test implemented by the provided function.
*/ // Array.prototype.every() // is everyone 19 or older?

const all_adult = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log({all_adult});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423