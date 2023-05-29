# tyk-cicd-demo

This is a playground for demostrating how to control deployment of APIs using GitOps in CI/CD via Tyk Operator

## Example 1 - Deploying your application and API configurations using Helm and ArgoCD
In this example, you'll use Helm to package your applications with API configurations. The Helm Chart and manifests are committed to Git. ArgoCD will automatically re-deploy (sync) your Helm Chart.

1. Environment setup

First, setup your Tyk environments for testing. In this demo, we assume 2 environments (dev, prod).

Then, setup some local Kubernetes clusters where you can deploy ArgoCD, Tyk Operator, and the applications.

For testing, spin up two local clusters:
```
minikube start -p staging
minikube start -p production
```

To switch cluster:
```
kubectx staging
kubectx production
```

3. Install ArgoCD

[Install ArgoCD](https://argo-cd.readthedocs.io/en/stable/getting_started/) on your cluster.

4. Deploy our infrastructure (ArgoCD, Tyk, base APIs)

...
kubectl apply -f ./argocd
...

5. Deploy HTTPBIN

```
kubectl apply -f ./httpbin/argo.yaml
```
