# Install and Configure Tyk Operator

### Create Operator User
1. On each environment, create Operator user group (Write permissions: APIs, Certificates, Policies, Portal)
2. Then create new Operator user in Operator user group
3. Update .env files with Operator user's API access keys and OrgID
   * [dev](./dev/.env.dev)
   * [staging](./staging/.env.staging)
   * [production](./production/.env.production)
```
TYK_ORG=
TYK_AUTH=
TYK_URL=
```

### Install Operator and Configure OperatorContext
1. Switch to correct cluster
```
kubectx staging
kubectx production
```

2. Install cert-manager
```
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.8.0/cert-manager.yaml
```

3. Install Operator CRDs
```
kubectl apply -f 'https://github.com/TykTechnologies/tyk-operator/blob/master/helm/crds/crds.yaml?raw=true'
```

4. Create namespace to install tyk operator
```
kubectl create namespace tyk-operator-system
```

5. Use Kustomize to create tyk-operator-conf Secret and Operator Context
First, go to the folder for target environment
```
cd dev
echo 'Inspect resources to be created'
kubectl apply -n tyk-operator-system --dry-run=client -o yaml -k ./ 
echo 'Create required secret and operator context for the target environment'
kubectl apply -n tyk-operator-system -k ./
secret/tyk-operator-conf-dev-6t8cf7bkb7 created
operatorcontext.tyk.tyk.io/tyk-operator-ctx-dev created
```

6. Install Operator
```
helm install tyk-operator tyk-helm/tyk-operator -n tyk-operator-system --set-json 'envFrom=[{"secretRef":{"name":"tyk-operator-conf-dev-6t8cf7bkb7"}}]'
```