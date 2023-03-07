# httpbin

This is a helm chart that deploys targeted application and a Tyk API.

1. In `image` section, configure the application image tag. Alternatively, modify `appVersion` in `Charts.yaml`
```
image:
  repository: docker.io/kong/httpbin
  pullPolicy: IfNotPresent
  # Overrides the image tag whose default is the chart appVersion.
  tag: ""
```

2. In `api` section, configure listenPath of the Tyk API and also operator context to use.
```
api:
  listenPath: /httpbin
  operatorContext:
    name: tyk-operator-ctx-dev
    namespace: tyk-operator-system

```

3. To test
```
curl {GATEWAY_URL}/httpbin/get
```
