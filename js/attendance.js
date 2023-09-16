// Define the ObjectIds of users and topics (replace with your actual ObjectIds)
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

const topicIds = [
    ObjectId("6505caa1a5fc3838b2db34c0"),
    ObjectId("6505caa1a5fc3838b2db34c1"),
    ObjectId("6505caa1a5fc3838b2db34c2"),
    ObjectId("6505caa1a5fc3838b2db34c3"),
    ObjectId("6505caa1a5fc3838b2db34c4"),
    ObjectId("6505caa1a5fc3838b2db34c5"),
    ObjectId("6505caa1a5fc3838b2db34c6"),
    ObjectId("6505caa1a5fc3838b2db34c7")
];

const dates = [
    ISODate("2023-09-05"),
    ISODate("2023-09-12"),
    ISODate("2023-09-19"),
    ISODate("2023-09-26"),
    ISODate("2023-10-03"),
    ISODate("2023-10-10"),
    ISODate("2023-10-17"),
    ISODate("2023-10-24")
];

const attendanceRecords = [];

for (const date of dates) {
    for (const userId of userObjectIds) {
        for (const topicId of topicIds) {
            const isPresent = Math.random() < 0.8;
            attendanceRecords.push({
                userId,
                topicId,
                date,
                isPresent,
            });
        }
    }
}

db.attendance.insertMany(attendanceRecords);
