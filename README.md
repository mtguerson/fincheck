
# FINCHECK

<p align="center">
  Fincheck is an application designed for personal finance management. It allows you to create Bank Accounts, Transactions, and Categories to efficiently track your income and expenses.
  <img src="https://i.imgur.com/STaFeCm.png" alt="Presentation" />
</p>

## Technologies Used

<img src="https://skillicons.dev/icons?i=html,css,javascript,typescript,docker,git,prisma,nodejs,nestjs,react,vite,tailwindcss" width="415px" alt="Technologies" />

The design is available on [Figma](https://www.figma.com/file/RRBEBWgyQZbEYPQhzOc1OQ/Fincheck).

## Running the App (Back End)

- First, clone the repository:

```bash
git clone https://github.com/mtguerson/fincheck.git
```

- Navigate to the `/api` folder.
- Install the dependencies (you can use yarn or any other package manager you prefer):

```bash
yarn
```

- Configure the `.env` variables (refer to `.env.example` for guidance).

- Start PostgreSQL with Docker:

You can run the database locally using a [Docker Container](https://www.docker.com/resources/what-container/).

Refer to the official documentation to install the [Docker Engine](https://docs.docker.com/engine/install/ubuntu/).

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

- Run the migrations:

```bash
npx prisma migrate dev
```

## Running the App (Front End)

- Ensure you are in the `/frontend` folder.
- Install the dependencies:

```bash
yarn
```

- Configure the `.env` variables (refer to `.env.example` for guidance).
