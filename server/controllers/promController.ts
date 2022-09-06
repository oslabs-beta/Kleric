import { Request, Response, NextFunction, RequestHandler } from 'express';
// import { RequestInfo, RequestInit } from "node-fetch";
const fetch = require('node-fetch');

type promController = {
  promMetrics: RequestHandler;
  nodeMetrics: RequestHandler;
};

export const promController = {

  promMetrics: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // try {
      //   const response = await fetch('http://localhost:9090/metrics');
      //   console.log('response', response);
      // } catch (err) {
      //   console.log('err', err);
      // }
      const response = await fetch('http://localhost:9090/metrics');
      const parsed = await response.text();
      // const parsed = 'testing testing';
      // console.log('data type');
      // console.log(typeof parsed)
      res.locals.promMetrics = parsed;
      return next();
    } catch (err) {
      console.log('Error caught in promMetrics middleware!');
      console.log(err);
      return next({
        log: 'Error fetching data from promMetrics',
        status: 500,
        message: {
          err: 'An error occurred trying to fetch data from promMetrics'
        },
      });
    };
  },

  nodeMetrics: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // try {
      //   const response = await fetch('http://localhost:9090/metrics');
      //   console.log('response', response);
      // } catch (err) {
      //   console.log('err', err);
      // }
      const response = await fetch('http://localhost:9100/metrics');
      // console.log('type', typeof response);
      const parsed = await response.text();
      // console.log('data type');
      // console.log(typeof parsed)
      res.locals.nodeMetrics = parsed;
      return next();
    } catch (err) {
      console.log('Error caught in nodeMetrics middleware!');
      console.log(err);
      return next({
        log: 'Error fetching data from nodeMetrics',
        status: 500,
        message: {
          err: 'An error occurred trying to fetch data from nodeMetrics'
        },
      });
    };
  },

  // CPU, memory, and disk

  retrieveMemory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // extract 'node_memory_Active_bytes' from node metrics
      const query = 'node_memory_Active_bytes';
      const metricsArray = res.locals.nodeMetrics.split('# ');
      // console.log(metricsArray);
      const fixedArray = metricsArray.map((str: String) => str.slice(str.indexOf('\n') + 1));
      const result = fixedArray.filter((str: String) => str.includes(query))[0];
      let memory = result.slice(result.lastIndexOf(query) + query.length + 1);
      memory = memory.trim();
      memory = memory.split('e+');
      console.log(memory[0] * 10 ** parseInt(memory[1]));
      memory = memory[0] * 10 ** parseInt(memory[1]);
      res.locals.memory = parseInt(memory);
      return next();
    } catch (err) {
      console.log('Error caught in retrieveMemory middleware!');
      console.log(err);
      return next({
        log: 'Error fetching data from retrieveMemory',
        status: 500,
        message: {
          err: 'An error occurred trying to fetch data from retrieveMemory'
        },
      });
    }
  }

}