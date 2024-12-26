import Joi from "joi";

// Define the validation schema
const InputVlidation = {
  signup: Joi.object({
    userName: Joi.string()
      .trim()
      .min(6)
      .max(10)
      .required()
      .pattern(new RegExp("^(?=.*[0-9]).+$"))
      .message({
        "string.pattern.base":
          "Username must contain at least one numeric character.",
      }),
    email: Joi.string()
      .email({
        allowFullyQualified: true,
        allowUnicode: true,
        ignoreLength: false,
        minDomainSegments: 2,
        maxDomainSegments: 3,
        multiple: false,
        separator: " ",
        tlds: {
          allow: ["net", "org"], // Only allow these TLDs
          deny: ["com"], // Deny this specific TLD
        },
      })
      .required()
      .trim()
      .lowercase(),
    password: Joi.string().min(8).max(18).required(),
  }),
};

export default InputVlidation;
