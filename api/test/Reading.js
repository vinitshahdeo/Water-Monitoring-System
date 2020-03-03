const Reading = require("../models/Reading");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
chai.use(chaiHttp);

describe("Readings", () => {
  before(() => {
    //Erase the database before testing
    Reading.deleteMany({});
  });
  describe("/POST reading", () => {
    it("Should NOT ADD a reading as value is not given", done => {
      let obj = { name: "bojack" };
      chai
        .request(server)
        .post("/api/reading/new")
        .send(obj)
        .end((err, res) => {
          res.should.have.status(500);
          res.should.be.a("object");
          done();
        });
    });
    it("Should ADD a reading as value is given", done => {
      let obj = { value: "3.24" };
      chai
        .request(server)
        .post("/api/reading/new")
        .send(obj)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a("object");
          res.body.should.be.a("object");
          res.body.data.should.be.a("object");
          res.body.data.should.have.property("_id");
          done();
        });
    });
  });
});
