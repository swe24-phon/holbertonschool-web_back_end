const request = require("supertest");
const app = require("../server"); // Adjust the path as necessary

describe("Full HTTP server using Express", () => {
  describe("/students endpoint", () => {
    it("When the database is available, Returns the right content", (done) => {
      request(app)
        .get("/students")
        .expect(200)
        .expect((res) => {
          if (!res.text.includes("This is the list of our students")) {
            throw new Error("Response does not contain expected content");
          }
        })
        .end(done);
    });
  });
});
