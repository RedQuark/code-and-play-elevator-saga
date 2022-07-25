// This is our first attempt at solving the first challenge.

// There is an error in this code. If you are looking at this code in an IDE
// like VS Code that is JavaScript-aware and has a static analyzer, you can
// probably see that there is an error and just exactly where it is located.

// The error might not tell you exactly what you need to know to fix the
// problem, but at least you know there is an error and where it is located.

var elevatorSagaObject =
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
            elevator.goToFloor(2
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
