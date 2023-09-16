// Create the "codekata" collection
db.createCollection("codekata");

const codekataProblems = [
    {
        title: "Problem 1: Two Sum",
        description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        totalSolved: 15,
    },
    {
        title: "Problem 2: Reverse a String",
        description: "Write a function that reverses a string. The input string is given as an array of characters.",
        totalSolved: 12,
    },
    {
        title: "Problem 3: Palindrome Checker",
        description: "Check if a given string is a palindrome. Ignore non-alphanumeric characters and consider case-insensitivity.",
        totalSolved: 10,
    },
    {
        title: "Problem 4: Fibonacci Sequence",
        description: "Generate the Fibonacci sequence up to a specified number of terms.",
        totalSolved: 8,
    },
    {
        title: "Problem 5: Binary Search",
        description: "Implement a binary search algorithm to find an element in a sorted array.",
        totalSolved: 14,
    },
    {
        title: "Problem 6: Linked List Reversal",
        description: "Reverse a singly linked list.",
        totalSolved: 9,
    },
    {
        title: "Problem 7: Merge Sort",
        description: "Implement the merge sort algorithm for sorting an array.",
        totalSolved: 7,
    },
    {
        title: "Problem 8: Binary Tree Traversal",
        description: "Implement in-order, pre-order, and post-order traversals of a binary tree.",
        totalSolved: 11,
    },
    {
        title: "Problem 9: Valid Parentheses",
        description: "Determine if a given string containing parentheses is valid.",
        totalSolved: 13,
    },
    {
        title: "Problem 10: Anagram Checker",
        description: "Check if two given strings are anagrams of each other.",
        totalSolved: 6,
    }
];

db.codekata.insertMany(codekataProblems);
// **********************************************************************************

// Define the ObjectIds of users and codekata problems (replace with your actual ObjectIds)
const userObjectIds = [
    ObjectId("6505c73ba5fc3838b2db34b6"),
    ObjectId("6505c73ba5fc3838b2db34b7"),
    ObjectId("6505c73ba5fc3838b2db34b8"),
    ObjectId("6505c73ba5fc3838b2db34b9"),
    ObjectId("6505c73ba5fc3838b2db34ba"),
    ObjectId("6505c73ba5fc3838b2db34bb"),
    ObjectId("6505c73ba5fc3838b2db34bc"),
    ObjectId("6505c73ba5fc3838b2db34bd"),
    ObjectId("6505c73ba5fc3838b2db34be"),
    ObjectId("6505c73ba5fc3838b2db34bf")
];

const codekataProblemObjectIds = [
    ObjectId("6505ef49a5fc3838b2db3776"),
    ObjectId("6505ef49a5fc3838b2db3777"),
    ObjectId("6505ef49a5fc3838b2db3778"),
    ObjectId("6505ef49a5fc3838b2db3779"),
    ObjectId("6505ef49a5fc3838b2db377a"),
    ObjectId("6505ef49a5fc3838b2db377b"),
    ObjectId("6505ef49a5fc3838b2db377c"),
    ObjectId("6505ef49a5fc3838b2db377d"),
    ObjectId("6505ef49a5fc3838b2db377e"),
    ObjectId("6505ef49a5fc3838b2db377f")
];

const userCodekataSolutions = [];

for (const userId of userObjectIds) {
    for (const problemId of codekataProblemObjectIds) {
        const solved = Math.random() < 0.65;
        userCodekataSolutions.push({
            userId,
            problemId,
            solved,
        });
    }
}

db.user_codekata_solutions.insertMany(userCodekataSolutions);

