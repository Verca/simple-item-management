# Simple Item Manager

## Install

To install, please execute this command:

`npm install`

## Run
To run this application, install it and then run these commands (in separate terminal windows):

`npm run build_frontend`

and then

`npm run start_backend`


Application runs on `localhost:3000`

## Reducers
Master reducer in `reducers/index.js` is deciding what reducer function should be applied. In this simple example, it calls only functions from `itemManagementReducer.js` and `errorHandlingReducer.js`

## Epics
This application uses `redux-observable` library (https://github.com/redux-observable/redux-observable). It uses epics for asynchronous calls and actions chaining.

`epics/loadItemsEpic` - This epic takes 'load the list of items' action. Calls ajax get request and processes received data or errors.

`epics/saveItemEpic` - Takes 'save item' action and tries to save an item into the database. Then it displays the list of items view or an error message in the edit item view.

`epics/deleteItemEpic` - Takes 'confirm delete' action and executes the delete request to the database, then it displays list of items or error message.
## Unit tests
You can check `reducers/itemManagementReducer.spec.js` to see an example of unit testing. Since this is only a demo application, I have not covered the whole application. But it is something that is in the TODO list.

To run tests, please execute this command:

`npm run test`

## TODO list
This is only a demo application. Things which could be improved or implemented are for example:
- Images are simply taken as url of existing image on the web. This is not ideal. Better would be upload pictures and save them with some online service.
- Add test to improve unit test coverage
- Field validation also on server side as well (web browser could be fooled!)