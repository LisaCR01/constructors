// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
function Developer (name,tech){
    this.name = name;
    this.tech= tech;
    this.introduction = () => {
        console.log(`hi my name is ${this.name} and my favourite tech is ${this.tech}`)
    };

}

// TODO: Create a new object using the 'Developer' constructor
// 'new' is necessary in creating a new object
const Lisa = new Developer('Lisa','Tailwind')
// TODO: Call the 'introduction()' method on the new object
// Have to run 'node Unsolved/index.js' to run the function
Lisa.introduction();