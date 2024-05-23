import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PatchProductByProductIdApi } from "./interfaces";
import { yupObjectId } from "@/lib/mongodb/mongo-dao";

const queryStringParametersValidations =
  (): YupShapeByInterface<PatchProductByProductIdApi.QueryStringParameters> => ({
    productId: yupObjectId().required(),
  });

const payloadValidations =
  (): YupShapeByInterface<PatchProductByProductIdApi.Payload> => ({
    description: yup.string().required(),
    price: yup.number().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
