// Create the "company_drives" collection
db.createCollection("company_drives");

const companyDrives = [
    {
        company: "Tech Innovators Inc.",
        driveDate: ISODate("2023-10-20"),
        jobRole: "Full Stack Web Developer",
        description: "Join our dynamic team and work on cutting-edge web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. You will be responsible for both front-end and back-end development, ensuring seamless user experiences and robust server-side logic.",
    },
    {
        company: "CodeCrafters Ltd.",
        driveDate: ISODate("2023-10-25"),
        jobRole: "MERN Stack Developer",
        description: "We're seeking an experienced MERN Stack Developer to build responsive web applications that delight our users. You'll collaborate with cross-functional teams to design and implement scalable solutions while optimizing performance and security.",
    },
    {
        company: "Digital Nexus Solutions",
        driveDate: ISODate("2023-10-30"),
        jobRole: "Senior Full Stack Engineer",
        description: "As a Senior Full Stack Engineer, you'll lead the development of MERN-based applications, mentor junior developers, and contribute to architectural decisions. Your expertise in front-end and back-end technologies will drive innovation and ensure code quality.",
    },
];

db.company_drives.insertMany(companyDrives);
// ***********************************************************************

// Define the ObjectIds of users (replace with your actual ObjectIds)
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
    ObjectId("6505c73ba5fc3838b2db34bf"),
];

const userCompanyDriveAssignments = [];

for (const userId of userObjectIds) {
    for (const companyDrive of companyDrives) {
        const attended = Math.random() < 0.7;
        userCompanyDriveAssignments.push({
            userId,
            company: companyDrive.company,
            driveDate: companyDrive.driveDate,
            attended,
        });
    }
}

db.user_company_drive_assignments.insertMany(userCompanyDriveAssignments);
