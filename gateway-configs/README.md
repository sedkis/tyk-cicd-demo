# Install and Configure Tyk Gateway to serve requests

This is simple instruction to install hybrid gateway that connects to a Tyk Cloud control plane.

1. Create namespace
```
export TYK_ENV=dev
kubectl create ns tyk$TYK_ENV
```

2. Create .env file
e.g. For dev environment, create `.env.dev` from [`.env`](./env)

3. Install Redis
```
helm install tyk-redis bitnami/redis -n tyk$TYK_ENV
```

4. Install Tyk Gateway
```
export REDIS_PASSWORD=$(kubectl get secret --namespace tyk$TYK_ENV tyk-redis -o jsonpath="{.data.redis-password}" | base64 -d)

helm install tyk-hybrid tyk-helm/tyk-hybrid -f gateway-values.yaml -f .env.$TYK_ENV -n tyk$TYK_ENV --set redis.pass=$REDIS_PASSWORD
```