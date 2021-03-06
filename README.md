# Loopback Demo API

## Available Scripts
In the project directory, you can run:

Install nodemon globally. `npm install nodemon -g`

`npm install` to dowload all the dependencies

`npm start` or `npm run watch` will start server on [http://localhost:3000](http://localhost:3000)


### Usage in Development

    npm start - Node server start on http://localhost:3000
    npm run watch - Node server watcher
    npm run lint - Eslint execution
    npm run test:lint - Eslint execution for specs
    npm run test - Unit Test
    npm run test:coverage - Unit Test with coverage


## APIs Available
   1. GET - [/api/CoffeeShops](http://localhost:3000/api/CoffeeShops)
   2. POST - [/api/CoffeeShops](http://localhost:3000/api/CoffeeShops)
   3. GET - [/api/CoffeeShops/:id](http://localhost:3000/api/CoffeeShops/3bf4b8eae5674a4e853ced241e832016)
   4. PUT - [/api/CoffeeShops/:id](http://localhost:3000/api/CoffeeShops/3bf4b8eae5674a4e853ced241e832016)


## Request Header to access APIs

    Content-Type: application/json
    x-demo-brand: demo-api
    x-demo-correlation-id: 8eae5674a4e853ced2413bf4b8eae5ew

**Sample post data**

```
{
    "name": "ZZZZ Coffee",
    "city": "Lake Berry",
    "currencyCode": "IQD",
    "phone": "209-294-0597",
    "info": "Et sit atque doloremque enim sequi veniam ut fuga veniam. Eum rerum quisquam ut odit inventore velit aliquam et sequi. Quae repellat exercitationem deleniti quia quasi et. Ut sed maiores porro culpa officiis itaque. Iure aut quo quaerat consequatur quod tempore. Aliquid non id voluptatem recusandae ut."
}
```

## License

UNLICENSED © [RAKESH KUMAR]
