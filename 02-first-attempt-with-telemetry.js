// This is the first attempt for the second challenge again, but now we have
// telemetry to tell us more about what is going on.

// Open the developer tools for your browser -- (usually Ctrl-Shift-I or
// Command-Shift-I), depending on your OS and browser -- to see the logged
// output on the console.

var elevatorSagaObject =
{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever an elevator floor button is pressed ...
        elevator.on("floor_button_pressed", function(floorNum) {
            console.log(`Button pressed for Floor ${floorNum}`);
        });

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            console.log(`Elevator is idle`);

            // let's go to all the floors
            goToFloor(0);
            goToFloor(1);
            goToFloor(2);
            goToFloor(3);
            goToFloor(4);
        });

        // Queues a floor for the elevator to go to ...
        function goToFloor(floorNum) {
            console.log(`Go to Floor ${floorNum}`);

            elevator.goToFloor(floorNum);
        };

        // Whenever the elevator is about to pass a floor ...
        elevator.on("passing_floor", function(floorNum, direction) {
            console.log(`Passing Floor ${floorNum} going ${direction}`);
        });

        // Whenever the elevator is stopped ...
        elevator.on("stopped_at_floor", function(floorNum) {
            console.log(`Stopped on Floor ${floorNum}`);
        });


        // EVENT HANDLERS -- Floor

        // Loop through all of the floors to set the event handlers ...
        for (const floor of floors) {
            // Whenever a passenger presses a down button to call the elevator ...
            floor.on("down_button_pressed", function() {
                console.log(`Down button pressed on Floor ${this.floorNum()}`);
            });

            // Whenever a passenger presses an up button to call the elevator ...
            floor.on("up_button_pressed", function() {
                console.log(`Up button pressed on Floor ${this.floorNum()}`);
            });
        };
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
