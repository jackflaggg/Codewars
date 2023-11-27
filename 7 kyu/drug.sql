select * from dose_records d

JOIN
  drugs dr ON d.drug_id = dr.drug_id
JOIN
  units u1 ON d.drug_unit_id = u1.unit_id
LEFT JOIN
  units u2 ON d.check_unit_id = u2.unit_id
ORDER BY
  dr.drug_name ASC,
  d.record_id ASC;