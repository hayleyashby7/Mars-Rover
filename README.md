# Mars Rover Tech Task

# Instructions
- Clone the repository to your local machine
- Navigate to the directory on your command line
- Run `npm install` followed by `npm start`
- Tests can be run with `npm test`


# Task Description
👾 🚀 
You are working in an Engineering Squad for the 🎶 Melody Mars Mission,
tasked with designing software to manage robots 🤖 and cool vehicles for space exploration! 
👽 🛸 🌏

# Background
The surface of Mars is represented by a Plateau. You can make the assumption that the
Plateau is a square/rectangular grid for the purpose of this task.

Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms
🦾 to collect samples back to Planet Earth 🌏

# Design Choices
index.ts file serves as the entry point for this program and currently has a hard-coded input value. User interface not yet implemented but current code is designed to allow an UI functionality to be slotted in prior to the mission starting. 

Testing has been implemented using TDD. As the program started to come together, the tests moved from being very granular unit tests to writing tests for higher up functions that pulled the smaller pieces together. For example moving the vehicle was tested against the Rover class, not the move.ts utility file. This was to focus on writing tests that were actually valuable, rather than bluntly aiming for 100% code coverage.

# Key Features
 - Rover is a class that implements a Vehicle interface. This is to allow for extension to other types of vehicles.
 - All other objects are interfaces of some kind or other and are defined in the types.d.ts file.
 - A set of utility types/functions are abstracted from the main modules to allow for reusability across all modules as needed. 
 - Plateau can be set to a 2D grid with (x,y) axis that can be either be a square or a rectangle. 
 - The Mission itself is initialised with the input provided. Mission holds the Plateau and an array of Vehicles. 
 - The Mission holds the vehicle moves seperate to the vehicles themselves, and uses vehicle ID to identify which vehicles is moved by which set of movement instructions.

# Future thoughts
In future, I will be less adverse to using a class, just because it's not the preferred first approach for objects in JS/TS. I spent a lot of time wrangling with a Rover interface that grew more complicated - when in reality a Rover is a sensible use-case for a class as it has state and multiple instances of itself.

I would also include some more edge cases in testing from earlier in development. There were some issues that I could have avoided if I'd made sure to test them more thoroughly earlier on.