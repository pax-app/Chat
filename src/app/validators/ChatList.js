import * as yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      type: yup
        .string()
        .oneOf(['user', 'provider'])
        .required(),
      id: yup.number().required(),
    });

    await schema.validate(req.params, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: error.inner });
  }
};
