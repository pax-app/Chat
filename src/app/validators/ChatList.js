import * as yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      user_id: yup.number().notRequired(),
      provider_id: yup.number().notRequired(),
    });

    await schema.validate(req.query, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: error.inner });
  }
};
