# What is Kleric?

Kleric is an open source Kubernetes cluster monitoring tool. We implement a friendly and easy to use UI to serve you your most essential metrics without the hassle of setting it all up yourself, saving you time and a headache. 

# Current Features
- Display a Dashboard that shows metrics and a graph that shows reports
![image](https://user-images.githubusercontent.com/104526811/189206117-288340a5-c831-4764-b6e4-68c56d7de322.png)
![image](https://user-images.githubusercontent.com/104526811/189206145-45c2bc05-3a29-4679-bec4-50ef321c17a7.png)


- Get an Alert any time the memory exceeds a number in memory
![image](https://user-images.githubusercontent.com/104526811/189206176-fb7b3432-0cf3-4f99-90bf-af481bdacf87.png)

# Strech Goals
- Build a Desktop App use Electron
- Cloud Deployment to AWS
- Database storage for capturing historic data on cluster metric and previous rollouts
# Installation
1. Clone this repo down to your local machine
2. Install minikube from here https://minikube.sigs.k8s.io/docs/start/
3. Run minikube with minikube start
4. Open new second tab to run - kubectl proxy --port=8080 & // accesses k8 API on localhost:8080
5. Open third tab for  - kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml // views API on localhost:8080 (and localhost:8080/api, localhost:8080/api/v1, etc. etc.)
6. minikube addons list            // shows a list of current addons
7. minikube addons enable metrics-server    // lets us enable metrics-server if it's missing from the addons list
8. npm run dev // to view API at localhost:3000/api/metrics
# Built With

* Docker

* Grafana

* Kubernetes

* Node.js/Express

* Prometheus

* React

* React Router

* Typescript

# Core Team:
An Le | [Github](https://github.com/AnLelol) - [LinkedIn](https://www.linkedin.com/in/anlelol/)

Chris Jamali | [Github](https://github.com/chrisjamali) - [LinkedIn](https://www.linkedin.com/in/chris-jamali-b740521b7/)  

Crystal Agoncillo | [Github](https://github.com/cagoncil) - [LinkedIn](https://www.linkedin.com/in/agoncillo/)  

Rosendo De Luna | [Github](https://github.com/Rosend0) - [LinkedIn](https://www.linkedin.com/in/rosendo-isra-deluna/)
