# Demo CRUD API with Deno

## Install Deno

see : https://deno.land/#installation

## Run Code for developer

```
$ deno run --allow-net server.ts
```

## Install Code by Deno

```
$ deno install --allow-read --allow-net -n deno-simple-api https://raw.githubusercontent.com/adaydesign/deno-simple-api/master/server.ts
```

## Run by installed package

```
$ deno-simple-api
```

## Test API Example with REST Client (VS Code Plug-in)

|Method | URI |
|-----:|:----|
|GET|/api/v1/products|
|GET|/api/v1/products/:id|
|POST|/api/v1/products|
|PUT|/api/v1/products/:id|
|DELETE|/api/v1/products/:id|

### Reference

https://www.youtube.com/watch?v=NHHhiqwcfRM