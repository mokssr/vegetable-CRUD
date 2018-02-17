# Simple CRUD App

This is a simple CRUD Restful API for vegetable list using basic Express setup on Node.js and MongoDB.


## Dependencies
Here is all the dependencies you will need to install before using this app :
  - [express](https://www.npmjs.com/package/express)
  - [body-parser](https://www.npmjs.com/package/body-parser)
  - [mongoose](https://www.npmjs.com/package/mongoose)

## Additional Tools
To try this App please use any API Development tools for simulating the requests available. I personally recommend  [POSTMAN](https://www.getpostman.com/).

## Routes
Each object item has **name** and **Image Url** property, feel free to edit it.
These are various requests that available in the App :

Getting all list is simply :

    GET : /vegetables 


----------


Filtering list based on vegetable name :

    GET : /vegetables/name 
taking **name** of the vegetable to find item in the database.

----------

Adding new item into list :


    POST : /vegetables/new 

taking both **name** and **Image Url** of the vegetable in the request body.
> note that this only receives single item each request
----------

Update details of a vegetable by its ID : 

    PUT : /vegetables/update/id 
taking **ID** as parameter, also taking vegetable **name** and **Image Url** in the request body.

If only one of vegetable **name** or **Image Url** passed in the request body, other properties will remain the same

> note that you are **not able** to change the vegetable ID

  

----------

Delete a single vegetable from the list :

    DELETE : /vegetables/delete/id 

taking vegetable **ID** as parameter to find and remove item from the list.


----------


