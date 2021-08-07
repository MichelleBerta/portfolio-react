import budget from './assets/budgetTracker.gif'
import workout from './assets/workoutTracker.gif'
import employee from './assets/employeeDirectory.gif'

const workFull =[
    {
        "id": 1,
        "title": "Budget Tracker",
        "description": "This budget tracker is a full stack application designed so the user can add expenses and deposits to their budget with or without a connection. When entering transactions offline, they will populate the total when brought back online.",
        "technology": "JavaScript, Node.js, Express.js, MongoDB, Mongoose ODM, IndexedDB, Webmanifest, Progressive Web App",
        "repo": "https://github.com/MichelleBerta/budget-tracker",
        "deployed": "https://secure-hollows-27877.herokuapp.com/",
        "image": budget,
        "alt": "Budget Tracker App"
    },
    {
        "id": 2,
        "title": "Workout Tracker",
        "description": "This workout tracker is a full stack application designed for the user to view, create and track their daily workout. Exercises can be added to the most recent workout plan or add to a new workout. The dashboard displays stats (duraation of each workout and combined weight of multiple exercises) from the last seven workout days.",
        "technology": "JavaScript, Node.js, Express.js, MongoDB, Mongoose ODM, Morgan.js, Chart.js",
        "repo": "https://github.com/MichelleBerta/workout-tracker",
        "deployed": "https://blooming-earth-81679.herokuapp.com/stats",
        "image": workout,
        "alt": "Workout Tracker App"
    },
    {
        "id": 5,
        "title": "Employee Directory",
        "description": "This employee directory, created using React, is an application designed so the user can view nonsensative information about employees. The user can filter employees by last name using the search bar or sort employees by first name by clicking any column heading.",
        "technology": "ReactJS, JSX, Random User API",
        "repo": "https://github.com/MichelleBerta/employee-directory",
        "deployed": "https://michelleberta.github.io/employee-directory",
        "image": employee,
        "alt": "Employee Directory App"
    }

]

export default workFull;