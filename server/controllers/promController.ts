import { Request, Response, NextFunction, RequestHandler } from 'express';
// import { RequestInfo, RequestInit } from "node-fetch";
const fetch = require('node-fetch');


console.log(fetch);
//import fetch from 'node-fetch';
// const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => fetch(url, init));

type promController = {
  promTest: RequestHandler;
};

export const promController = {

  promTest: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // try {
      //   const response = await fetch('http://localhost:9090/metrics');
      //   console.log('response', response);
      // } catch (err) {
      //   console.log('err', err);
      // }
      const response = await fetch('http://localhost:9090/metrics');
      console.log('type', typeof response);
      const parsed = await response.text();
      // const parsed = 'testing testing';
      console.log('data type');
      console.log(typeof parsed)
      res.locals.promTest = parsed;
      return next();
    } catch (err) {
      console.log('error! a big booboo');
      console.log(err);
      return next({
        log: 'Error fetching data from promTest',
        status: 500,
        message: {
          err: 'An error occurred trying to fetch data from promTest'
        },
      });
    };
  }

}