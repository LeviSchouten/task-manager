# Task Manager

### Building a task manager using

- **NodeJS**
- **TypeScript**
- **Nestjs** (Backend)
- **PostgreSQL** (Database)
- **Docker** (docker-compose)
- **JWT** (Authorization)

For the frontend I intend to use **React**, **Redux** and **TypeScript**. But so far I've only worked on the backend.

---

### Running this project

To run this project locally

1. **Clone** the repository and **cd** in to it.
2. Create a **.env** file containing atleast the following variables to the root directory (change the values to what you want them to be).

```
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=database
SECRET=secret
```

3. Make sure **Docker** is installed.
4. Finally run the project with the following command.

```
docker-compose up --build
```
