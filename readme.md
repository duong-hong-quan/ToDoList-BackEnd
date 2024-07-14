### To-Do List - Backend Node.js

This project represents my first attempt at coding in Node.js. I dedicated 3 hours to creating this project for submission to your company. Due to the time constraints, there may be some existing issues. My background primarily involves .NET and ReactJS.

**Technologies Used:** Node.js, TypeScript, MongoDB

## How to Run

1. Run `npm i` to install dependencies.
2. Execute `Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process` to bypass the execution policy.
3. Compile the TypeScript code with `tsc`.
4. Start the application using `npm start`.

### Example

POST: http://localhost:3000/task
Body:

```json
{
  "name": "Sample Task",
  "startDate": "2023-04-01T00:00:00.000Z",
  "endDate": "2023-04-30T23:59:59.999Z"
}
```

PUT: http://localhost:3000/task/6691e4620829540c57771dd9
Body:

```json
{
  "name": "test",
  "startDate": "2002-12-02T17:00:00.000Z",
  "endDate": "2002-12-02T17:00:00.000Z"
}
```

GET: http://localhost:3000/task

GET: http://localhost:3000/task/6691e4620829540c57771dd9

Example format response:

```json
{
  "success": true,
  "messages": [],
  "data": [
    {
      "_id": "6691e4620829540c57771dd9",
      "name": "test",
      "startDate": "2002-03-11T17:00:00.000Z",
      "endDate": "2002-03-11T17:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "669238b95ed4cbbdc83a8ba0",
      "name": "Sample Task",
      "startDate": "2023-01-03T17:00:00.000Z",
      "endDate": "2023-01-04T17:00:00.000Z",
      "__v": 0
    }
  ]
}
```

### Information

- **Name:** Duong Hong Quan
- **LinkedIn:** [https://www.linkedin.com/in/hongquan0312/](https://www.linkedin.com/in/hongquan0312/)
