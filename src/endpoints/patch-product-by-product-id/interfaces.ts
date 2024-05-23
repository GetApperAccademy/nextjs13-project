import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { IProductFe } from "@/models/client/ProductFe";
import { ObjectId } from "mongodb";

export namespace PatchProductByProductIdApi {
  export type QueryStringParameters = {
    productId: ObjectId;
  };

  export type Payload = {
    description: string;
    price: number;
  };

  export type SuccessResponse = {
    message?: string;
    product: IProductFe;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, Payload> {}
}
