import joi from "joi";
import { dataValidator } from "./schema";

export const validate = async (payload, type) => {
  let option;

  switch (type) {
    case "dataValidator":
      // call joi
      option = joi.object(dataValidator);
      break;
  }

  try {
    const results = await option.validateAsync(payload, { abortEarly: false });
    return null;
  } catch (errors) {
    const errorsModified = {};
    errors.details.forEach((error) => {
      errorsModified[error.context.key] = error.message;
    });

    return errorsModified;
  }
};
