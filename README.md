# Thesys Cat API

## Available Scripts
In the project directory, you can run:

Install nodemon globally. `npm install nodemon -g`

`npm install` to dowload all the dependencies

`npm start` or `npm run watch` will start server on [http://localhost:3000](http://localhost:3000)

### Usage in Development

    npm start - Node server start on http://localhost:3000
    npm run watch - Node server watcher
    npm run lint - Eslint execution
    
## APIs Available
   1. GET - [/thesys/api/CoffeeShops](http://localhost:3000/thesys/api/CoffeeShops)
   2. POST - [/thesys/api/CoffeeShops](http://localhost:3000/thesys/api/CoffeeShops)
   3. GET - [/thesys/api/CoffeeShops/:id](http://localhost:3000/thesys/api/CoffeeShops/3bf4b8eae5674a4e853ced241e832016)
   4. PUT - [/thesys/api/CoffeeShops/:id](http://localhost:3000/thesys/api/CoffeeShops/3bf4b8eae5674a4e853ced241e832016)

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

UNLICENSED © [SAPIENT]
