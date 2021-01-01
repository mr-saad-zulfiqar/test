const { execSync } = require('child_process');
const fs = require('fs');

// Function to create a commit on a specific date
function createCommitOnDate(date) {
    const commitDate = date.toISOString();
    execSync(`git add . && GIT_COMMITTER_DATE="${commitDate}" GIT_AUTHOR_DATE="${commitDate}" git commit -m "commit on ${commitDate}"`, { stdio: 'ignore' });
}

// Function to generate random number of commits for a given day
function generateCommitsForDay(date) {
    const commitsCount = Math.floor(Math.random() * (6 - 4 + 1)) + 4; // Random number between 4 and 45
    for (let i = 0; i < commitsCount; i++) {
        fs.writeFileSync('dummy.txt', `Commit number ${i} on ${date.toISOString()}`);
        createCommitOnDate(date);
    }
}

function main() {
    let startDate = new Date('2021-01-01');
    const endDate = new Date('2021-03-2');

    while (startDate <= endDate) {
        generateCommitsForDay(startDate);
        startDate.setDate(startDate.getDate() + 1); // Move to next day
    }
}

main();
