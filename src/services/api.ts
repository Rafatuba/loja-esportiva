import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-products-dh-next.vercel.app/",
});

/*
https://api-products-dh-next.vercel.app/?vercelToobarCode=lWIq7kaiM7X5KMu
*/

/*
{
  "name": "Jhon Doe",
  "email": "teste@teste.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzNjVkIiwiaWF0IjoxNzM1ODQ0MjIzfQ.cuMVatSu_RF1Ea5zDT3-Jf8Ae-4HET9ORTJ5rSPS8so"
}
*/
