import { ClickHouse } from "clickhouse";
import config from "@config/index";

const clickhouse = new ClickHouse({
  ...config.clickhouseConfig,
});

const insertQuery = (tableName: string, data: object) => {
  const filteredData = Object.keys(data).reduce((obj, key) => {
    if (data[key] !== null) {
      obj[key] = data[key];
    }
    return obj;
  }, {});
  return `INSERT INTO ${tableName}(${Object.keys(filteredData).join(
    ", "
  )}) VALUES('${Object.values(filteredData).join("', '")}')`;
};

export const loadIntoClickhouse = (tableName, data) => {
  clickhouse
    .insert(insertQuery(tableName, data))
    .toPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
