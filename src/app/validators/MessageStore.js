import * as yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      sender: yup.string().required(),
      date_time_sent: yup.date().required(),
      text_message: yup.string().required(),
      chat_id: yup.number().required(),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: error.inner });
  }
};