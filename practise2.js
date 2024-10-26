const customerObjectLookup = [{
    id: "001",
    f_name: "abby",
    l_name: "thomas",
    gender: "M",
    married: "true",
    age: "32",
    expense: 500,
    purchsed: ["shampoo", "toys", "books"]
},
{
    id: "002",
    f_name: "rishu",
    l_name: "yadav",
    gender: "f",
    married: "true",
    age: "40",
    expense: 300,
    purchsed: ["stick", "blade",]
},
{
    id: "003",
    f_name: "sita",
    l_name: "dviwedi",
    gender: "f",
    married: "true",
    age: "50",
    expense: 1300,
    purchsed: ["lipstik", "nail", "polish"]
},
{
    id: "004",
    f_name: "peetu",
    l_name: "thakur",
    gender: "m",
    married: "true",
    age: "82",
    expense: 90,
    purchsed: ["book"]
},
{
    id: "005",
    f_name: "ram",
    l_name: "singh",
    gender: "f",
    married: "false",
    age: "7",
    expense: 300,
    purchsed: ["toys"]
}
];
const id = ["001", "002", "003", "004", "005"];
const age = [];
console.log(age);
const ages = id.map((element)); {
    return customerObjectLookup[element];

};



