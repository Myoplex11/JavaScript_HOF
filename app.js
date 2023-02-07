console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return plusNumber + number;
    }

}

const plus15 = plus(15);
console.log(plus15(10));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(item => {console.log(item.name)});

  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

namesScoreArray = users.map((person) => ({
    name:person.name ,
    score:person.score,}));

console.log(namesScoreArray);



  // Exercise 4 Section
  console.log("EXERCISE 4:\n==========\n");

  const activeUsers = users.filter((person) => person.isActive === true);
  console.log(activeUsers);


 // Exercise 5 Section
  console.log("EXERCISE 5:\n==========\n");

  const byScore =users.sort((a,b) =>
    b.score - a.score );

  console.log(byScore);


   // Exercise 5 Section
   console.log("EXERCISE 5:\n==========\n");

   function totalScore(previousScore,currentScore) {
    return previousScore + currentScore.score
   };

   const total = users.reduce(totalScore,0);

   averageScore = total / users.length;
   console.log(averageScore);
