const joiValidation = schemaType =>
  function (req, res, next) {
    const userData = req.body;
    const { error } = schemaType.validate(userData, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (error) {
      const errMessage = error?.details?.map(err => {
        const customizedErr = { message: err?.message, path: err?.path[0] };
        return customizedErr;
      });

      return res.send({ status: 500, message: errMessage });
    }

    next();
  };

export default joiValidation;
