# tyk-cicd-demo

This is a playground for demostrating how to control deployment of APIs in CI/CD use Tyk Operator or Tyk Sync.

## Example 1 - Tyk Operator
1. Environment setup

First, setup your Tyk environments for testing. In this demo, we assume 3 environments (dev, staging, prod).

Connects to the sample Tyk Cloud setup consisting of two environments and 3 control planes:

```
Staging environment
- dev_control_plane + 1 edge
- control_plane + 1 edge

Production environment
- control_plane + 3 edges
```

Spin up to local clusters:
```
minikube start -p staging
minikube start -p production
```

To switch cluster:
```
kubectx staging
kubectx production
```

2. Install Tyk Operator
Follow [`operator-configs`](./operator-configs/) to install Tyk Operator and configure OperatorContext to connect to different Tyk environments.

3. Install ArgoCD
Some of the examples make use of ArgoCD applications for CD.

4. Example HTTP API - See [httpbin](./httpbin/)

5. Example OAS HTTP API - See [petstore](./petstore/)
