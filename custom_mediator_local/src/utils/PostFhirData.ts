import axios from "axios";

export const postFhirData = (url: string, data: any) => {
  console.log("SEOND TIME: " + url);

  return axios({
    url,
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
