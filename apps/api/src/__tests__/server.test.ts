import supertest from "supertest";
import { createServer } from "../server";

describe("server", () => {
  it("message endpoint says hello", async () => {
    await supertest(createServer())
      .get("/message/1tpp")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: "hello 1tpp" });
      });
  });
});
