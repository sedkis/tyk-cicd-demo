# NodeJS Typescript starter

## Running the server:
```
$ npm i
$ npm run dev
```

## Dockerize

```bash
IMAGE_TAG=sedkis/noderize:v1.0.0
docker build . -t $IMAGE_TAG
docker push $IMAGE_TAG
docker run -v $(pwd)/.env:/usr/app/.env -p 8081:8081 sedkis/noderize:v1.0.0
```