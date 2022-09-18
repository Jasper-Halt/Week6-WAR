var expect = chai.expect; //creates a variable that imports the chai.expect method


describe("Compare Test", function() {
    describe("#compareTest", function() {
        it("should show X wins", function() {
            var x = compareTest(4, 6);
            expect("X wins!");
        });
            
        it("should show Y wins", function() {
            var x = compareTest(6, 4);
            expect("Y wins!");
        });
        it("should show a tie", function() {
            var x = compareTest(6, 6);
            expect("Tie!");
        });
    });
});