import express from 'express';
const router = express.Router();
import { Request, Response, NextFunction } from 'express';
import * as k8s from '@kubernetes/client-node';
import { promController } from '../controllers/promController';

router.get('/', (req: Request, res: Response) => {
  console.log('hello from root');
  return res.status(200).json('Hello World!');
}); 

router.get('/api/prometheus', promController.promTest, (req: Request, res: Response) => {
  console.log('finished middleware');
  return res.status(200).json(res.locals.promTest);
}); 
  
router.get('/api/metrics', async (req: Request, res: Response) => {
  console.log('getting metrics')
  let topPodsData = await topPods();
  topPodsData = JSON.parse(toJSON(topPodsData)); // use toJSON() 

  let topContainersData = await topContainers();
  topContainersData = JSON.parse(toJSON(topContainersData)); // use toJSON()

  return res.status(200).json({
    topPods: topPodsData,
    topContainers: topContainersData
  });
});
  
function toJSON(data: any) {  // necessary to render the entire dataset in the browser
  if (data !== undefined) {
    return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v).replace(/"(-?\d+)#bigint"/g, (_, a) => a);
  } else return '';
}

// add more functions from https://github.com/kubernetes-client/javascript/tree/master/examples
// below are the functions from 'top_pods.js'

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
k8sApi.listNamespacedPod('default').then((res: any) => {
  // console.log(res);
});

async function topPods() {
  const metricsClient = new k8s.Metrics(kc);
  return k8s.topPods(k8sApi, metricsClient, "kube-system")  // added return keyword
  .then((pods: any) => {

    const podsColumns = pods.map((pod: any) => {
        return {
            "POD": pod.Pod.metadata.name,
            "CPU(cores)": pod.CPU.CurrentUsage,
            "MEMORY(bytes)": pod.Memory.CurrentUsage,
        }
    });
    // console.log("TOP PODS")
    // console.table(podsColumns)
    return podsColumns;   // added return statement
  });
}

async function topContainers() {
  const metricsClient = new k8s.Metrics(kc);
  return k8s.topPods(k8sApi, metricsClient, "kube-system")  // added return keyword
  .then((pods: any) => {

      const podsAndContainersColumns = pods.flatMap((pod: any) => {
        return pod.Containers.map((containerUsage: any) => {
          return {
            "POD": pod.Pod.metadata.name,
            "NAME": containerUsage.Container,
            "CPU(cores)": containerUsage.CPUUsage.CurrentUsage,
            "MEMORY(bytes)": containerUsage.MemoryUsage.CurrentUsage,
          };
        })
      });
      // console.log("TOP CONTAINERS")
      // console.table(podsAndContainersColumns)
      return podsAndContainersColumns;  // added return statement
  });
}

module.exports = router;