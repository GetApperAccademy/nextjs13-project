import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { DeleteProductsByProductIdApi } from "./interfaces";
import { Product } from "../../models/server/Product/index";

export default async function handler(
  req: DeleteProductsByProductIdApi.Request,
  res: NextApiResponse<DeleteProductsByProductIdApi.EndpointResponse>,
) {
  try {
    const { validationResult, queryStringParameters } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }
    const { productId } = queryStringParameters;
    console.log(productId.toHexString());

    const product: Product = await Product.getById(productId);
    console.log({ product });

    if (!product) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: "not found" },
        StatusCodes.NotFound,
      );
    }
    await Product.delete(product._id);

    return ResponseHandler.json<DeleteProductsByProductIdApi.SuccessResponse>(
      res,
      {},
    );
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
