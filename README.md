# RxDB / GraphQL / Auth0 / Hasura Todo App
This project follows the app sample provided by Hasura.io. This is a Todo app Offline First. This means that it's an app which is unaffected by intermittent lack of a network connection

![imagen](https://i.imgur.com/wz8Uv21.jpg)

## Things to know:
Before setting up this project we will need to:

- Deploy Hasura on Hasura Cloud
- Setup the database schema
- Integrate with Authentication provider Auth0

Hasura Cloud will take care of the GraphQL infrastructure and hence we don't need to worry about the Ops portion of this app.


## Requirements
This app was built using create-react-app so the requirements are the same.

- Node >= 8.10

# How to set up the project
## 1) Deploy Hasura
To do that go to: https://cloud.hasura.io/ and click on "Try a free database with Heroku" and Create a project.

Hasura Cloud will:
- Create an app on Heroku
- Install Postgres Add-on
- Fetch database URL that you can use to configure Hasura

## 2) Setup Database
Open the Hasura console and create the tables.
```
# The users table will contain two fields
Users
- auth0_id: text primary key unique
- name: text

# The todos table will contain the following fields
Todos
- id: text primary key unique
- userId: text
- text: text
- isCompleted: boolean
- deleted: boolean; default: false
- createdAt: timestamp with timezone, default: now()
- updatedAt: timestamp with time zone, default: now()
```

### Set Permissions
A user should be able to create, select, update and delete only todos belonging to him. This can be enforced by setting permissions like this:

```{"userId": {"_eq": "X-Hasura-User-Id"}}```


## 3) Integrate with Authentication provider Auth0
You can follow this tutorial: https://hasura.io/learn/graphql/hasura/authentication/1-create-auth0-app/ 

The rules you need to configure in Auth0 are under src/utils folder. You have to follow that tutorial and replace it with your Auth0 credentials.

## 4) Setup this project in your local

The basic steps are:
- Open the folder
- Copy env-example and change global variables
    - Run ```cp .env.example .env ``` and make the changes you want.
- Run ```npm install``` or  ``` yarn install ```
- Run ```npm start``` or ``` yarn start ```

Once its done you should be able to see the project up and running on ```http://localhost:3000/```

*Note: If you want to test the mobile first functionality you must build this project. To test it you can do the following:*

- Run ```yarn build``` to build a productive version of the project.
- Then you can use the following to install a static server ```yarn global add serve```
- Once is installed execute ```serve -s build```

You should be able to see the project up and running on ```http://localhost:5000/```


