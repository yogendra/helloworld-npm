require('chai').should();
var helloworld = require("../index");

describe("Hello World Tests", function () {
    it("Returns 'Hello, World!' back", function () {
        helloworld().should.be.equal("Hello, World!");
    })
})