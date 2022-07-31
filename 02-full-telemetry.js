// This is the first attempt for the second challenge again, but now we have
// telemetry to tell us more about what is going on.

// Open the developer tools for your browser -- (usually Ctrl-Shift-I or
// Command-Shift-I), depending on your OS and browser -- to see the logged
// output on the console.

var elevatorSagaObject =
{
    init: function(elevators, floors) {

        // EVENT HANDLERS -- Elevator

        for (const elevator of elevators) {

            // Whenever an elevator floor button is pressed ...
            elevator.on("floor_button_pressed", function(floorNum) {
                console.log(`Elevator ${elevatorIndex(elevator)} button pressed for Floor ${floorNum}`);
            });

            // Whenever the elevator is idle (has no more queued destinations) ...
            elevator.on("idle", function() {
                console.log(`Elevator ${elevatorIndex(elevator)} is idle`);

                // let's go to all the floors
                goToFloor(this, 0);
                goToFloor(this, 1);
                goToFloor(this, 2);
                goToFloor(this, 3);
                goToFloor(this, 4);
            });

            // Whenever the elevator is about to pass a floor ...
            elevator.on("passing_floor", function(floorNum, direction) {
                console.log(`Elevator ${elevatorIndex(elevator)} passing Floor ${floorNum} going ${direction}`);
            });

            // Whenever the elevator is stopped ...
            elevator.on("stopped_at_floor", function(floorNum) {
                console.log(`Elevator ${elevatorIndex(elevator)} stopped on Floor ${floorNum}`);
            });
        }


        // Elevator Properties

        // Causes changes to the destination queue to take effect
        function checkDestinationQueue(elevator) {
            console.log(`Checking destination queue for Elevator ${elevatorIndex(elevator)}`);
            elevator.checkDestinationQueue();
        }

        // Returns the current floor number
        function currentFloor(elevator) {
            const floorNum = elevator.currentFloor();
            console.log(`Current floor for Elevator ${elevatorIndex(elevator)} is Floor ${floorNum}`);
            return floorNum;
        }

        // Returns the direction of the destination
        function destinationDirection(elevator) {
            const direction = elevator.destinationDirection();
            console.log(`Destination director for Elevator ${elevatorIndex(elevator)} is ${direction}`);
            return direction;
        }

        // Returns the destination queue
        function destinationQueue(elevator) {
            const queue = elevator.destinationQueue;
            console.log(`Destination queue for Elevator ${elevatorIndex(elevator)} is ${queue}`);
            return queue;
        }

        // Returns the index of the elevator in the elevators array
        function elevatorIndex(elevator) {
            return elevators.findIndex((candidateElevator) => (candidateElevator === elevator));
        }

        // Gets pressed floors
        function getPressedFloors(elevator) {
            const pressedFloors = elevator.getPressedFloors();
            console.log(`Pressed floors for Elevator ${elevatorIndex(elevator)} are ${pressedFloors}`);
            return pressedFloors;
        }

        // Gets or sets the state of the "going down" indicator
        function goingDownIndicator(elevator, status) {
            if (status === undefined) {
                status = elevator.goingDownIndicator();
                console.log(`Going Down indicator for Elevator ${elevatorIndex(elevator)} is ${status}`);
            } else {
                elevator.goingDownIndicator(status);
                console.log(`Set Going Down indicator for Elevator ${elevatorIndex(elevator)} to ${status}`);
            };
            return status;
        }

        // Gets or sets the state of the "going up" indicator
        function goingUpIndicator(elevator, status) {
            if (status === undefined) {
                status = elevator.goingUpIndicator();
                console.log(`Going Up indicator for Elevator ${elevatorIndex(elevator)} is ${status}`);
            } else {
                console.log(`Set Going Up indicator for Elevator ${elevatorIndex(elevator)} to ${status}`);
            }
            return status;
        }

        // Queues a floor for the elevator to go to
        function goToFloor(elevator, floorNum) {
            console.log(`Elevator ${elevatorIndex(elevator)} go to Floor ${floorNum}`);
            elevator.goToFloor(floorNum);
        };

        // Returns the elevator load factor
        function loadFactor(elevator) {
            const factor = elevator.loadFactor;
            console.log(`Elevator ${elevatorIndex(elevator)} load factor is ${factor}`);
        }

        // Returns the elevator's maximum passenger count
        function maxPassengerCount(elevator) {
            const max = elevator.maxPassengerCount;
            console.log(`Elevator ${elevatorIndex(elevator)} maximum passenger count is ${max}`);
            return max;
        }

        // Sets the destination queue for the elevator
        function setDestinationQueue(elevator, queue) {
            console.log(`Set destination queue for Elevator ${elevatorIndex(elevator)} to ${queue}`);
            elevator.destinationQueue = queue;
        }

        // Clear the destination queue and stop the elevator
        function stop(elevator) {
            console.log('Stop Elevator ${elevatorIndex(elevator)} ');
            elevator.stop();
        }


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
