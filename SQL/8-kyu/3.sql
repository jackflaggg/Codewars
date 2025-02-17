/**
Задание:

Посчитайте количество уникальных клиентов в таблице user_actions, сделавших за последнюю неделю хотя бы один заказ.

Полученную колонку с числом клиентов назовите users_count. В качестве текущей даты, от которой откладывать неделю, используйте последнюю дату в той же таблице user_actions.

Поле в результирующей таблице: users_count
**/
SELECT count(distinct user_id) as users_count
FROM   user_actions
WHERE  action = 'create_order'
   and time >= (SELECT max(time)
             FROM   user_actions) - interval '7 days';
