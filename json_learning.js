
let users =
[
    {
        "name": "Navin",
        "favoriteNumber": 3,
        "isProgrammer": true,
        "hobbies": ["Weight Lifting", "Storm Chasing"]
    },
    {
        "name":"Walrus",
        "hobbies": ["Flopping Around", "Cuddling"]
    }
];

let users2 = `[
    {
        "name": "Navin",
        "favoriteNumber": 3,
        "isProgrammer": true,
        "hobbies": ["Weight Lifting", "Storm Chasing"]
    },
    {
        "name":"Walrus",
        "hobbies": ["Flopping Around", "Cuddling"]
    }
]`;
console.log(users);
console.log("the string: ");
console.log(users2);
console.log(JSON.parse(users2));
console.log(JSON.parse(users2)[1].name);
console.log(JSON.parse(users2)[1].hobbies);