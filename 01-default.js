// With one small change, this is the default code you see when you first go to
//     https://play.elevatorsaga.com

// The code editor for Elevator Saga is designed for you to input a JavaScript
// object, not JavaScript code. For your IDE's static analyzer to work properly
// with this object, it is necessary to assign the object to a variable.

// We use the variable "elevatorSagaObject" for this purpose. This assignment
// should not be copied to the Elevator Saga window, but everything after the
// '=' sign would be if you wanted to replace all of the text in the code
// window.

var elevatorSagaObject =
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(1);
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
