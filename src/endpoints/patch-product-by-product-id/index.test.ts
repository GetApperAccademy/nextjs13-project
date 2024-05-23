import { PatchProductByProductIdApi } from "@/endpoints/patch-product-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const patchProductByProductIdPath = "patch-product-by-product-id";

beforeAll(async () => {
  // await cleanDb();
});

describe("patchProductByProductId API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<PatchProductByProductIdApi.SuccessResponse>(patchProductByProductIdPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
