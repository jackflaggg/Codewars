/**
Задание:

Отберите из таблицы users пользователей мужского пола, которые старше всех пользователей женского пола.

Выведите две колонки: id пользователя и дату рождения. Результат отсортируйте по возрастанию id пользователя.

Поля в результирующей таблице: user_id, birth_date
**/

WITH
oldest_female AS (SELECT MIN(birth_date)
                  FROM   users
                  WHERE  sex = 'female')

SELECT user_id,
       birth_date
FROM   users
WHERE  sex = 'male'
  AND  birth_date < (SELECT *
                     FROM oldest_female)
ORDER BY user_id;
