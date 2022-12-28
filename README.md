# PaymentMicroService
# Payment Microservice

a microservice to handle payments


## Routes

## articles

``` http
  POST /articles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customerID` | `string` | **Required**. User's ID  |


> Returns:
If the user subscribed
  * Articles data
Otherwise 
  * redirect to payment form



## payment

``` http
  GET /sendpublishablekey
```

> Returns:
*  publishable key

``` http
  POST /creditcarddata
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.   |
| `cardNumber` | `string` | **Required**.   |
| `cvv` | `string` | **Required**.   |
| `date` | `string` | **Required**.   |

> Returns:
* Customer's ID


## Authors

- [@sayedkhaled](https://github.com/SayedKhaledd)
- [@AhmedRabie](https://github.com/ARMMM96)



# Payment Microservice

a microservice to handle payments


## Routes

## articles

``` http
  POST /articles
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `customerID` | `string` | **Required**. User's ID  |


> Returns:
* Customer's data



## payment

``` http
  GET /sendpublishablekey
```

> Returns:
*  publishable key

``` http
  POST /creditcarddata
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.   |
| `cardNumber` | `string` | **Required**.   |
| `cvv` | `string` | **Required**.   |
| `date` | `string` | **Required**.   |

> Returns:
* Customer's ID


## Authors

- [@sayedkhaled](https://github.com/SayedKhaledd)
- [@AhmedRabie](https://github.com/ARMMM96)


