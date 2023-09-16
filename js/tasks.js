// Create the "tasks" collection
db.createCollection("tasks");

const tasks = [
    {
        title: "Complete HTML/CSS Assignment",
        description: "Create a webpage using HTML and CSS.",
        dueDate: ISODate("2023-09-21"),
        completed: false,
    },
    {
        title: "ReactJS Project",
        description: "Build a ReactJS application with CRUD functionality.",
        dueDate: ISODate("2023-10-07"),
        completed: false,
    },
    {
        title: "Node.js API Development",
        description: "Develop a RESTful API using Node.js and Express.js.",
        dueDate: ISODate("2023-10-19"),
        completed: false,
    },
    {
        title: "Capstone Project",
        description: "Complete the capstone project for the Zen class",
        dueDate: ISODate("2023-10-30"),
        completed: false,
    },
];

db.tasks.insertMany(tasks);
// **********************************************************************************************

// Define the ObjectIds of users 
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

const taskIds = [
    ObjectId("6505ebdea5fc3838b2db374a"),
    ObjectId("6505ebdea5fc3838b2db374b"),
    ObjectId("6505ebdea5fc3838b2db374c"),
    ObjectId("6505ebdea5fc3838b2db374d")
]

const taskAssignments = [];

for (const userId of userObjectIds) {
    for (const taskId of taskIds) {
        const completed = Math.random() < 0.5;
        taskAssignments.push({
            userId,
            taskId,
            completed,
        });
    }
}

db.task_assignments.insertMany(taskAssignments);
