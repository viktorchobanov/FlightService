# Flight Service

Service that consumes multiple Comtravo endpoints and returns only unique flights.

# Setup

1. Create your config file which has to contain: 

```
{
    auth: {
        username: 'YOUR_USERNAME',
        password: 'YOUR_PASSWORD'
    },
    port: process.env.port,
    URL: "Base URL"
}
```

2. Run ```npm install``` in the terminal
3. You could find the results on route ```/api/uniqueflights```
