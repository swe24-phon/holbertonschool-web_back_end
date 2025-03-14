const request = require("supertest");
const app = require("../server"); // Adjust the path as necessary

describe("full HTTP server using Express", () => {
  describe("/students endpoint", () => {
    it("when the database is available, returns the right content", async () => {
      const response = await request(app).get("/students");
      expect(response.status).toBe(200);
      expect(response.text).toContain("This is the list of our students");
    });
  });
});
