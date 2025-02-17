/**Задание:

Из таблицы user_actions с помощью подзапроса или табличного выражения отберите все заказы, которые не были отменены пользователями.

Выведите колонку с id этих заказов. Результат запроса отсортируйте по возрастанию id заказа.

Добавьте в запрос оператор LIMIT и выведите только первые 1000 строк результирующей таблицы.

Поле в результирующей таблице: order_id**/
  
WITH not_cancel as (
    SELECT order_id FROM user_actions WHERE action <> 'create_order'
)
SELECT order_id FROM user_actions
WHERE order_id NOT IN (SELECT * FROM not_cancel)
order by order_id
limit 1000
