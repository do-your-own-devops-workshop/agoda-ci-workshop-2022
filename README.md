# Agoda CI Workshop 2022

This example is a part of "Do your own DevOps workshop" by Tech@agoda

## How to contribute

You can add your own hotels in the fake database located at `./db/fakedb.ts`

## Running locally

Building

```bash
docker build -t our-website .
```

Running

```bash
docker run -it --rm -p 3000:3000 our-website
```

and your website will be available on `http://localhost:3000`
