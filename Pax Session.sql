INSERT INTO
  `PaxDB`.`USER` (cpf, email, name, password, url_avatar, user_id)
VALUES
(
  '11111111111',
  'roger@gmail.com',
  'Roger',
  'asdfasdf',
  'roger.jpg',
  NULL
);

INSERT INTO
  `PaxDB`.`USER` (cpf, email, name, password, url_avatar, user_id)
VALUES
(
  '22222222222',
  'youssef@gmail.com',
  'Youssef',
  'asdfasdf',
  'youssef.jpg',
  NULL
);

INSERT INTO
  `PaxDB`.`PROVIDER` (
    bio,
    issuing_organ,
    maximum_price,
    minimum_price,
    number,
    provider_id,
    uf,
    url_rg_photo,
    user_id
  )
VALUES
  (
    'Eu sou um cara muito legal',
    'SSP',
    '150',
    '30',
    '3333333',
    NULL,
    'DF',
    'yousseflindo.jpg',
    2
  );

INSERT INTO
  `PaxDB`.`CHAT` (chat_id, provider_id, user_id)
VALUES
  (
    NULL,
    1,
    2
  );


INSERT INTO
`PaxDB`.`MESSAGE` (
  chat_id,
  date_time_sent,
  message_id,
  sender,
  text_message
)
VALUES
(
  2,
  '2019-08-27 12:45:59',
  NULL,
  'U',
  'Eae seu mongol'
);

INSERT INTO
`PaxDB`.`MESSAGE` (
  chat_id,
  date_time_sent,
  message_id,
  sender,
  text_message
)
VALUES
(
  2,
  '2019-08-27 12:45:59',
  NULL,
  'P',
  'Eae seu coco'
);