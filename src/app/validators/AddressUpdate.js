import * as yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      chat_id: yup.number().required(),
      address_id: yup.number().required(),
    });

    console.log(req.params);

    await schema.validate(req.params, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: error.inner });
  }
};
