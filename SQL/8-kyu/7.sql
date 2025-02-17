/**
Задание:

Выясните, есть ли в таблице courier_actions такие заказы, которые были приняты курьерами, но не были созданы пользователями. Посчитайте количество таких заказов.

Колонку с числом заказов назовите orders_count.

Поле в результирующей таблице: orders_count
**/
SELECT COUNT(distinct order_id) AS orders_count
FROM   courier_actions
WHERE  action = 'accept_order'
   AND order_id NOT IN (SELECT order_id
                     FROM   user_actions)
