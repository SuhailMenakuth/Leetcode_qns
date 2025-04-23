/* Write your T-SQL query statement below */
Select
  p.firstName , p.lastName , a.city , a.state
FROM
   Person p
LEFT JOIN
   Address a
ON 
   a.personId = p.personId;