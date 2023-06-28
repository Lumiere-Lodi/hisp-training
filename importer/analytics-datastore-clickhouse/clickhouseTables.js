const queries = [
    // Resource Tables 
    `CREATE TABLE IF NOT EXISTS patient(
        id String NULL,
        patient_name String NULL,
        patient_gender String NULL,
      ) 
      ENGINE=MergeTree
      ORDER BY tuple();`,

        `CREATE TABLE IF NOT EXISTS condition(
            id String NULL,
            patient_id String NULL,
            encounter_id String NULL,
          ) 
          ENGINE=MergeTree
          ORDER BY tuple();`,
  
    // Manufactuerer Table
    `CREATE TABLE IF NOT EXISTS manufacturer(
          id String,
          version String,
          inserted_at DateTime DEFAULT now(),
          last_updated String,
          name String,
          max_doses String,
          age_group_start String,
          age_group_end String, 
          series String,
          weeks_waiting_interval String,
          code String
          ) 
          ENGINE=MergeTree
          ORDER BY tuple();`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('1','Pfizer-BioNTech','3','0.5','4','Primary', '2', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('2','Pfizer-BioNTech','2','5','17','Primary', '', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('3','Pfizer-BioNTech','1','5','17','Booster', '0', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('4','Pfizer-BioNTech','2','18','49','Primary', '', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('5','Pfizer-BioNTech','1','18','49','Booster', '0', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('6','Pfizer-BioNTech','2','50','','Primary', '', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('7','Pfizer-BioNTech','2','50','','Booster', '0', 'XM8NQ0')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('8','Moderna','2','0.5','17','Primary', '2', 'XM3DT5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('9','Moderna','2','18','49','Primary', '', 'XM3DT5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('10','Moderna','1','18','49','Booster', '0', 'XM3DT5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('11','Moderna','2','50','','Primary', '', 'XM3DT5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('12','Moderna','2','50','','Booster', '0', 'XM3DT5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('13','Novavax','2','18','','Primary', '2', 'XM5JC5')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('14','Johnson and Johnson','1','18','49','Primary', '', 'XM6QV1')`,
  
    `INSERT into manufacturer(id, name, max_doses, age_group_start, age_group_end, series, weeks_waiting_interval, code) 
          values('15','Johnson and Johnson','1','18','49','Booster', '0', 'XM6QV1')`,
  ];

  module.exports = queries;
