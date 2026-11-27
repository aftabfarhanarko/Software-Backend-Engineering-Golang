# Backend Engineering Learning Repository

[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Relational_DB-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![NestJS](https://img.shields.io/badge/NestJS-Framework-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Go](https://img.shields.io/badge/Go-Standard_Library-00ADD8?logo=go&logoColor=white)](https://go.dev/)

## Table of Contents

- [Introduction](#introduction)
- [About This Repository](#about-this-repository)
- [Learning Objectives](#learning-objectives)
- [Technologies and Tools](#technologies-and-tools)
- [Complete Backend Engineering Roadmap](#complete-backend-engineering-roadmap)
- [Module-wise Learning Progress](#module-wise-learning-progress)
- [Practical Implementations](#practical-implementations)
- [Project Folder Structure](#project-folder-structure)
- [Key Concepts and Technical Knowledge](#key-concepts-and-technical-knowledge)
- [API Development Practice](#api-development-practice)
- [Database Learning](#database-learning)
- [Authentication and Security](#authentication-and-security)
- [Code Examples from This Repository](#code-examples-from-this-repository)
- [What I Have Learned](#what-i-have-learned)
- [Currently Learning](#currently-learning)
- [Future Learning Roadmap](#future-learning-roadmap)
- [How to Run This Project](#how-to-run-this-project)
- [Installation and Setup](#installation-and-setup)
- [Author Information](#author-information)

## Introduction

This repository is a practical backend engineering learning workspace. It combines focused exercises with complete sample applications written in JavaScript, TypeScript, Node.js, Express.js, Go, C++, PostgreSQL, and NestJS.

The work is organized as separate projects and practice folders. Each project can have its own dependencies, entry point, environment variables, database configuration, and run command. The repository is therefore a monorepo-style learning collection rather than one single application.

## About This Repository

This repository demonstrates backend learning through implementation instead of isolated theory. The projects include REST APIs, middleware, route and controller separation, JSON and PostgreSQL persistence, password hashing, JWT and cookie authentication, sessions, rate limiting, audit logs, TypeScript OOP, Go HTTP services, and a PostgreSQL-backed NestJS application.

Important status principles used in this README:

- **Verified implementation** means the behavior exists in source code.
- **A folder name or dependency is not treated as proof** unless the corresponding code uses it.
- **Practice code and production-grade code are not presented as equally mature.**
- Several folders contain experiments, assignments, incomplete features, or alternative implementations.

The repository also contains nested projects and nested Git repositories. Each project should be built and run from its own directory.

## Learning Objectives

- Understand the HTTP request-response lifecycle.
- Build and organize REST APIs with Node.js and Express.js.
- Separate routing, controllers, services, middleware, and persistence concerns.
- Apply JavaScript asynchronous programming and non-blocking I/O.
- Model relational data with PostgreSQL and constraints.
- Use parameterized SQL and an ORM safely.
- Implement cookies, sessions, password hashing, JWT access tokens, and refresh tokens.
- Apply TypeScript types and object-oriented programming principles.
- Add validation, centralized error handling, logging, and rate limiting.
- Progress from learning exercises to complete, testable backend services.

## Technologies and Tools

| Technology | How it is used in the repository |
|---|---|
| JavaScript | Express servers, in-memory models, middleware, authentication, and array exercises |
| Node.js | HTTP servers, Express applications, file I/O, environment variables, and process runtime |
| Express.js 5 | REST routing, static assets, middleware chains, and HTTP API handlers |
| TypeScript | OOP exercises, PostgreSQL APIs, and the NestJS application |
| PostgreSQL | Student data and VocabMaster relational schema |
| `pg` | PostgreSQL connection pools and parameterized queries |
| Prisma | VocabMaster models, migrations and database access |
| NestJS | Modular backend application with controllers, services, guards, validation and Swagger |
| Redis/ioredis | Redis module and throttling storage in VocabMaster |
| JWT / bcrypt | Authentication, password hashing, access tokens and refresh tokens |
| Cookies / Sessions | `cookie-parser` and `express-session` implementations |
| Joi | Request validation in API assignments |
| Go | Native HTTP REST server and POS backend |
| C++ | OOP and data structures practice |
| MongoDB / MongoDB package | Present in `AS-1` dependencies; verified database code should be reviewed before relying on it |
| Jest / Supertest | VocabMaster test dependencies and specifications |
| Node test runner | HTTP integration tests in `To-Do Manager-AS/tests/app.test.js` |
| Docker / Docker Compose | VocabMaster container configuration |

## Complete Backend Engineering Roadmap

The roadmap below is evidence-based. A topic is marked complete only when source code or a documented implementation demonstrates it.

### Status Legend

- ✅ **Completed** — implemented and verified.
- 🟡 **In Progress** — implemented partially, as an exercise, or without full production hardening.
- ⬜ **Not Started** — not implemented or insufficient evidence was found.

## Module-wise Learning Progress

### Module 1: Introduction to Web Servers

| Topic | Status | Evidence |
|---|---|---|
| Introduction to Web Servers | ✅ | [server.js](/home/aftab-farhan/projects/Backend Software Development/server.js), [pos-backend/main.go](/home/aftab-farhan/projects/Backend Software Development/pos-backend/main.go) |
| How Web Servers Work | ✅ | Native Node HTTP server and Express listener implementations |
| Client-Server Architecture | ✅ | Browser/static frontend with Express and Node API handlers |
| HTTP Request and Response | ✅ | Request parsing, response JSON, HTML and status methods |
| HTTP Methods and Status Codes | ✅ | GET, POST, PUT, DELETE and explicit 2xx, 4xx, 5xx responses |

### Module 2: Introduction to Backend Systems

| Topic | Status | Evidence |
|---|---|---|
| Introduction to Backend Development | ✅ | Multiple REST API and service implementations |
| Backend Architecture | ✅ | Controllers, services, routes, middleware and storage layers |
| Frontend vs Backend | ✅ | Frontend and API folders in `Full-Stack`, `Task`, `VocabMaster`, and `ProcessinPC` |
| Request-Response Lifecycle | ✅ | Middleware → route/controller → response patterns |
| Backend Responsibilities | ✅ | Validation, persistence, authentication, logging, and error handling |

### Module 3: JavaScript with Node.js and Express.js

| Topic | Status | Evidence |
|---|---|---|
| JavaScript for Backend Development | ✅ | JavaScript server and application entry points |
| Node.js Fundamentals | ✅ | CommonJS modules, built-in HTTP/FS modules and Node process APIs |
| Node.js Runtime | ✅ | Direct `node` entry points and Nodemon development scripts |
| Express.js Fundamentals | ✅ | `express()` applications and middleware |
| Routing and Controllers | ✅ | Separate `router/` and `controllers/` directories in multiple projects |

### Module 4: Async JavaScript Inside Node.js

| Topic | Status | Evidence |
|---|---|---|
| Synchronous vs Asynchronous JavaScript | ✅ | Synchronous validation/storage examples and async database handlers |
| Callbacks | ✅ | [app.js](/home/aftab-farhan/projects/Backend Software Development/app.js) and Node callbacks |
| Promises | ✅ | Promise-based HTTP tests and database operations |
| Async/Await | ✅ | Async Express and NestJS service methods |
| Event Loop | ⬜ | Used through Node APIs, but no dedicated implementation or documented study evidence |
| Call Stack | ⬜ | No dedicated call-stack exercise |
| Microtask and Callback Queues | ⬜ | No dedicated implementation or documented study evidence |
| Non-blocking I/O | 🟡 | Async database and file operations are present; Node internals are not explicitly demonstrated |

### Module 5: API Development Part One

| Topic | Status | Evidence |
|---|---|---|
| REST API Fundamentals | ✅ | Resource-based routes and CRUD implementations |
| HTTP Methods | ✅ | GET, POST, PUT, PATCH and DELETE usage |
| Route Handling | ✅ | Express routers and Go `ServeMux`/handlers |
| Request and Response | ✅ | `req.body`, `req.query`, parameters and `res.json()`/`send()` |
| Query Parameters | ✅ | Product search, analytics and student/user routes |
| Route Parameters | ✅ | `/tasks/:id`, `/api/todos/:id`, and Go path extraction |
| Request Body | ✅ | `express.json()` and `express.urlencoded()` parsing |
| HTTP Status Codes | ✅ | Success, validation, authentication, forbidden and server error responses |

### Module 6: API Development Part Two

| Topic | Status | Evidence |
|---|---|---|
| Advanced API Development | 🟡 | Modular projects exist, but not every project has full pagination/versioning/transactions |
| Middleware | ✅ | Authentication, logging, audit, rate limiting and CORS middleware |
| Error Handling | ✅ | Central error middleware and NestJS exception filter |
| Request Validation | ✅ | Joi, manual validation, NestJS `ValidationPipe` and DTOs |
| Controller and Service Separation | ✅ | `API-Part-2`, To-Do Manager, NestJS and TypeScript projects |
| API Structure | ✅ | Router/controller/service directories and module boundaries |
| API Testing | 🟡 | Node test runner integration tests and NestJS Jest specs; no complete root test suite |

### Module 7: Data Modeling Part One

| Topic | Status | Evidence |
|---|---|---|
| Database Fundamentals | ✅ | PostgreSQL schemas and Prisma models |
| Data Modeling | ✅ | Student, user, product, todo and VocabMaster entities |
| Entities and Attributes | ✅ | TypeScript types, SQL columns and Prisma models |
| Relationships | ✅ | One-to-many and many-to-many relations in Prisma |
| One-to-One Relationships | ⬜ | No explicit relational implementation found |
| One-to-Many Relationships | ✅ | Users to progress, collections, notes and activity logs |
| Many-to-Many Relationships | ✅ | Collections and words through `CollectionItem` |
| ER Diagrams | ⬜ | Not found as repository documentation or source artifact |

### Module 8: JavaScript Essentials for API Development

| Topic | Status | Evidence |
|---|---|---|
| Array Methods | ✅ | `map`, `filter`, `reduce`, `slice` exercises |
| Objects | ✅ | Request payloads, models and JSON data |
| Destructuring | ✅ | Imports and object/array data extraction |
| Spread and Rest Operators | 🟡 | Used in JavaScript/TypeScript code; no dedicated comprehensive examples |
| Map and Set | 🟡 | `Map` and `Set` concepts appear in exercises but dedicated backend usage is limited |
| Higher-Order Functions | ✅ | Array callbacks and middleware functions |
| Modules | ✅ | CommonJS `require/module.exports` and ES modules |
| Error Handling | ✅ | `try/catch`, async rejection handling and centralized middleware |

### Module 9: Process

| Topic | Status | Evidence |
|---|---|---|
| Node.js Process | ✅ | `process.env`, `process.cwd()`, `process.uptime()` and process exit usage |
| Environment Variables | ✅ | `dotenv`, `.env.example` files and `process.env` |
| `process.env` | ✅ | Ports, database credentials, secrets and application configuration |
| Process Arguments | 🟡 | npm scripts pass arguments, but no dedicated `process.argv` CLI implementation |
| Runtime Information | 🟡 | `process.uptime()` and server logs; no formal metrics or system process dashboard |

### Module 10: Cookies and Sessions

| Topic | Status | Evidence |
|---|---|---|
| Cookies | ✅ | `cookie-parser`, `res.cookie()`, `clearCookie()` |
| HTTP Cookies | ✅ | Authorization and session cookies |
| Cookie Properties | 🟡 | `httpOnly`, `sameSite`, `secure` and `maxAge` are used in places |
| Sessions | ✅ | `express-session` implementations |
| Session Management | ✅ | Login, logout and session destruction |
| Cookie-Based Authentication | ✅ | Auth cookie and session cookie examples |
| Session-Based Authentication | ✅ | `req.session.userId` middleware checks |

### Module 11: JWT

| Topic | Status | Evidence |
|---|---|---|
| Authentication vs Authorization | 🟡 | Authentication is implemented; role-based authorization is limited |
| JSON Web Tokens | ✅ | `jsonwebtoken` and VocabMaster native JWTs |
| JWT Structure | 🟡 | Signed payloads are used, but no dedicated teaching document |
| Access Tokens | ✅ | Short-lived access token generation and verification |
| Refresh Tokens | ✅ | VocabMaster refresh token generation and stored hash design |
| Token Verification | ✅ | Bearer/cookie verification and passport-style guard |
| Protected Routes | ✅ | Auth middleware and NestJS guards |
| JWT Security | 🟡 | HTTP-only cookies and token verification exist; fallback secrets and demo paths need production hardening |

### Module 12: TypeScript with OOP

| Topic | Status | Evidence |
|---|---|---|
| TypeScript Fundamentals | ✅ | Types, interfaces, DTOs and generic database helpers |
| Classes and Objects | ✅ | [OOP/src/classType.ts](/home/aftab-farhan/projects/Backend Software Development/OOP/src/classType.ts) |
| Constructors | ✅ | Product constructor and NestJS dependency injection classes |
| Encapsulation | ✅ | Private fields and encapsulated C++/TypeScript classes |
| Access Modifiers | ✅ | `private` fields and public methods |
| Inheritance | 🟡 | `extends` examples exist in OOP exercises |
| Abstraction | 🟡 | Interfaces and abstracted services exist conceptually, but no dedicated abstract-class study |
| Static Members | ⬜ | No clear static member implementation found |
| Getters and Setters | ⬜ | No clear getters/setters implementation found |

### Module 13: Interface and Polymorphism

| Topic | Status | Evidence |
|---|---|---|
| Interfaces | ✅ | TypeScript interfaces and contract types |
| Interface Implementation | ✅ | Service/controller and class contracts in several projects |
| Polymorphism | ✅ | TypeScript animal polymorphism example |
| Method Overriding | 🟡 | TypeScript polymorphic `spek()` implementations demonstrate overriding |
| Method Overloading | ⬜ | No explicit overload implementation found |
| Abstraction with Interfaces | 🟡 | Interfaces are used in TypeScript and NestJS, but formal abstract interface modeling is limited |

### Module 14: Introduction to Database - PostgreSQL

| Topic | Status | Evidence |
|---|---|---|
| Relational Database Fundamentals | ✅ | SQL tables and Prisma relational models |
| PostgreSQL | ✅ | `pg` pool and Prisma PostgreSQL provider |
| Tables and Records | ✅ | Student and VocabMaster tables |
| Primary Keys | ✅ | SQL `PRIMARY KEY`, UUID and serial keys |
| Foreign Keys | ✅ | Prisma relation fields and SQL relational design |
| Constraints | ✅ | `NOT NULL`, `UNIQUE`, enum and foreign-key constraints |
| SQL Queries | ✅ | Parameterized SELECT and INSERT statements |
| Joins | ⬜ | No explicit handwritten JOIN query or join query exercise found |
| Indexes | ✅ | Prisma `@@index` and SQL `UNIQUE` indexes |
| Database Relationships | ✅ | Prisma one-to-many and many-to-many models |
| Database Normalization | 🟡 | Relational separation is used, but no normalization exercise or explanation |
| Transactions | ⬜ | No explicit transaction API or isolation-level implementation found |

## Practical Implementations

### VocabMaster

VocabMaster is the most complete full-stack application in the repository.

- NestJS backend with modular feature domains.
- Next.js frontend PWA.
- Prisma and PostgreSQL models.
- Supabase and native JWT authentication support.
- Access and refresh tokens stored in HTTP-only cookies.
- Redis-backed throttling storage.
- Swagger at `/api/docs`.
- Global validation, exception filtering, transformation interceptors and audit logging.
- Jest specifications and Docker configuration.

Relevant entry points:

- [VocabMaster/backend/src/main.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/main.ts)
- [VocabMaster/backend/src/app.module.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/app.module.ts)
- [VocabMaster/backend/prisma/schema.prisma](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/prisma/schema.prisma)

### To-Do Manager

This project demonstrates a complete Express application using in-memory JSON-backed models.

- Session and JWT authentication.
- bcrypt and legacy scrypt password verification.
- HTTP-only auth cookies.
- Protected Bearer/cookie/session routes.
- Controller, route, middleware and model separation.
- Request/audit/log middleware.
- Static frontend.
- Node test runner integration suite.

Relevant entry points:

- [To-Do Manager-AS/app.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/app.js)
- [To-Do Manager-AS/middleware/auth.middleware.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/middleware/auth.middleware.js)
- [To-Do Manager-AS/utils/auth.utils.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/utils/auth.utils.js)
- [To-Do Manager-AS/tests/app.test.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/tests/app.test.js)

### Full-Stack PostgreSQL Student API

This TypeScript application connects Express to PostgreSQL using `pg`.

- PostgreSQL connection pool.
- Parameterized queries.
- Duplicate-email lookup.
- Student CRUD/list endpoints.
- Manual request validation.
- Typed success and error responses.

Relevant files:

- [Full-Stack/backend/src/app.ts](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/src/app.ts)
- [Full-Stack/backend/src/utils/database.ts](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/src/utils/database.ts)
- [Full-Stack/backend/src/utils/studentQueries.ts](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/src/utils/studentQueries.ts)
- [Full-Stack/backend/database/schema.sql](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/database/schema.sql)

### POS Backend

The Go POS backend uses the standard library and an in-memory, mutex-protected store.

- Product, category, customer and order resources.
- Checkout and stock deduction.
- Product barcode lookup.
- Sales reports.
- CORS and request logging middleware.
- Unit tests for store behavior.

Relevant files:

- [pos-backend/main.go](/home/aftab-farhan/projects/Backend Software Development/pos-backend/main.go)
- [pos-backend/store/store.go](/home/aftab-farhan/projects/Backend Software Development/pos-backend/store/store.go)
- [pos-backend/store/store_test.go](/home/aftab-farhan/projects/Backend Software Development/pos-backend/store/store_test.go)

### API Security and Analytics

The API and monitoring projects demonstrate:

- Express rate limiting.
- Audit and access logs.
- User-agent collection and scanner/bot blocking.
- Static dashboard endpoints.
- API tokens supplied through query parameters, bearer headers or API-key headers.
- CORS configuration.

Representative projects include `API-Part-2`, `Agent-Analytics`, `Pricktise-Server`, `ProcessinPC`, and `To-Do Manager-AS`.

### Process, OOP and Data Practice

Additional folders demonstrate:

- Node.js process and environment usage.
- JavaScript array transformations and pagination.
- C++ and Go OOP/data modeling.
- TypeScript classes, private fields and polymorphism.
- DSA exercises and linked-list implementations.
- Docker and deployment examples in VocabMaster.

## Project Folder Structure

Dependencies, build outputs, nested `.git` directories and generated frontend caches are omitted. The tree reflects the repository as inspected.

```text
Backend Software Development/
├── README.md
├── app.js
├── file.js
├── main.go
├── server.js
├── test.js
├── API/
│   ├── package.json
│   └── server.js
├── API-Part-2/
│   ├── app.js
│   ├── package.json
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── public/
│   ├── router/
│   ├── services/
│   └── utils/
├── AS-1/
│   ├── app.js
│   ├── blog.js
│   ├── db.js
│   └── package.json
├── Agent-Analytics/
│   ├── app.js
│   ├── controllers/
│   ├── middleware/
│   ├── router/
│   ├── utils/
│   └── views/
├── Basick/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
├── Cookies_and_Session/
│   ├── app.js
│   ├── appv1.js
│   ├── appv2.js
│   ├── hash.js
│   ├── jwt.js
│   └── test.js
├── Data Modeling Part One/
│   ├── README.md
│   ├── Object.cpp
│   ├── dataModal.cpp
│   ├── encapsulation.cpp
│   ├── test.cpp
│   ├── go-oop/
│   └── JS/
├── DSA/
│   ├── README.md
│   ├── LinkedList.cpp
│   ├── structs_and_objects.cpp
│   ├── task1.cpp
│   ├── Comparative-Programming-all-Code/
│   ├── Js-Core/
│   ├── Linked-List/
│   └── Thinking/
├── Full-Stack/
│   ├── backend/
│   └── student-Fn/
├── JWT/
├── LS-13-Introduction-to-Database/
│   ├── README.md
│   └── rewr.ts
├── OOP/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
├── part-1-api-routing/
│   ├── app.js
│   ├── payment.js
│   ├── student.js
│   └── user.js
├── pos-backend/
│   ├── go.mod
│   ├── main.go
│   ├── handlers/
│   ├── middleware/
│   ├── models/
│   └── store/
├── Pricktise-Server/
│   ├── app.js
│   ├── controllers/
│   ├── middleware/
│   └── router/
├── Problem-Practice/
│   ├── README.md
│   ├── array.js
│   ├── reduce.js
│   └── array transformation exercises
├── ProcessinPC/
│   ├── agent/
│   ├── backend/
│   ├── docs/
│   ├── frontend/
│   └── public/
├── Task/
│   ├── backend/
│   └── frontend/
├── Test Session Cooki/
├── To-Do Manager-AS/
│   ├── app.js
│   ├── controllers/
│   ├── data/
│   ├── logs/
│   ├── middleware/
│   ├── models/
│   ├── public/
│   ├── router/
│   ├── tests/
│   └── utils/
├── Typescripet OOP/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   └── test/
└── VocabMaster/
    ├── backend/
    ├── frontend/
    ├── packages/
    └── docker-compose.yml
```

## Key Concepts and Technical Knowledge

### Middleware

Middleware functions execute between receiving a request and returning a response. They can validate credentials, parse bodies, log requests, apply rate limits or pass control to the next handler.

Example locations:

- [To-Do Manager-AS/app.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/app.js)
- [API-Part-2/middleware/user.js](/home/aftab-farhan/projects/Backend Software Development/API-Part-2/middleware/user.js)
- [VocabMaster/backend/src/main.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/main.ts)

### Controller and Service Separation

The API projects place HTTP responsibilities in controllers and reusable application logic in services. Routers define endpoints and forward requests into those components.

In `API-Part-2`, `router/user.js` mounts the user routes, `controllers/userControllers.js` handles responses, and `services/userservices.js` implements the user data behavior.

### Centralized Error Handling

To avoid repeated error response code, applications define not-found and error middleware. VocabMaster additionally uses a global NestJS exception filter and response transformation interceptor.

### Parameterized PostgreSQL Queries

The student API builds SQL with positional parameters such as `$1` rather than embedding request values directly:

```sql
SELECT email FROM students WHERE email = $1 LIMIT 1
```

This is implemented in [Full-Stack/backend/src/utils/studentQueries.ts](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/src/utils/studentQueries.ts).

### Password Hashing

Passwords are hashed with bcrypt rather than stored in plain text. A few older or experimental projects retain legacy `scrypt` verification for data migration compatibility.

### JWT and Protected Routes

JWT middleware verifies a signed access token and loads the matching user. `To-Do Manager-AS` accepts a session, a bearer token or an auth cookie.

### Session Cookies

`express-session` stores session state and identifies the browser with a session cookie. The actual session data is held by the MemoryStore in the practice applications unless a persistent session store is added.

### TypeScript OOP

The OOP projects demonstrate private fields, constructors, methods, inheritance and polymorphism. TypeScript types and interfaces improve compile-time contract checking.

## API Development Practice

The repository contains:

- Health/root endpoints.
- CRUD-style resource endpoints.
- Query parameter filtering.
- Route parameter lookup.
- JSON and URL-encoded request bodies.
- Pagination and in-memory slicing exercises.
- Bearer and API-key authentication patterns.
- Session and JWT protection.
- Global and route-level middleware.
- Manual and DTO-based validation.
- 404, 401, 403, 409, 422/400 and 500 response handling.

API testing evidence exists in:

- [To-Do Manager-AS/tests/app.test.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/tests/app.test.js)
- [VocabMaster/backend/src/audit/audit.service.spec.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/audit/audit.service.spec.ts)
- [VocabMaster/backend/src/auth/auth.service.spec.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/auth/auth.service.spec.ts)
- [VocabMaster/backend/src/quiz/quiz.service.spec.ts](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/src/quiz/quiz.service.spec.ts)

## Database Learning

### PostgreSQL in the Student API

The student project uses a `students` table with primary, unique and required-column concepts in [Full-Stack/backend/database/schema.sql](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/database/schema.sql).

The application uses `pg.Pool` for connection reuse and parameterized SQL for writes and reads.

### PostgreSQL in VocabMaster

[VocabMaster/backend/prisma/schema.prisma](/home/aftab-farhan/projects/Backend Software Development/VocabMaster/backend/prisma/schema.prisma) defines:

- User profiles and roles.
- Vocabulary words, definitions and examples.
- Spaced-repetition progress and review history.
- Collections and collection items.
- Notes and bookmarks.
- Quiz sessions and daily activity.
- Audit logs.
- One-to-many and many-to-many relationships.
- Unique constraints and indexes.

### SQL and ORM Trade-off

Raw SQL gives direct control over SQL statements and query planning. Prisma provides generated types, migration workflows and relation-aware database operations. This repository includes examples of both approaches.

## Authentication and Security

Verified security patterns include:

- bcrypt password hashing.
- JWT signing and verification.
- Bearer, cookie and session authentication.
- HTTP-only access/refresh cookies.
- Refresh-token hashes stored in VocabMaster.
- Native JWT and Supabase token verification.
- CORS restrictions.
- Global validation pipelines.
- Rate limiting and Redis-backed throttling.
- Audit logging.
- Bot and security-scanner user-agent blocking.
- Parameterized SQL to prevent direct string interpolation.

Security limitations to address in later work:

- Replace example or fallback secrets with required environment variables.
- Enforce HTTPS and secure cookie flags for production deployments.
- Add authorization policy/RBAC rather than relying mainly on authentication.
- Rotate secrets and define refresh-token revocation.
- Configure trusted proxy behavior and CORS carefully.
- Review all `.env` files and remove committed credentials before public deployment.

## Code Examples from This Repository

### Express Middleware

From [To-Do Manager-AS/app.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/app.js):

```javascript
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "todo_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 },
  })
);
```

### JWT Generation and Verification

From [To-Do Manager-AS/utils/auth.utils.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/utils/auth.utils.js):

```javascript
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
```

### Protected Express Middleware

From [To-Do Manager-AS/middleware/auth.middleware.js](/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS/middleware/auth.middleware.js):

```javascript
const decoded = verifyToken(token);
const user = decoded?.id ? UserModel.findById(decoded.id) : null;

if (!user) {
  return res.status(401).json({
    success: false,
    message: "Invalid or expired token",
  });
}

req.user = user;
next();
```

### TypeScript Polymorphism

From [OOP/src/index.ts](/home/aftab-farhan/projects/Backend Software Development/OOP/src/index.ts):

```typescript
class Dog extends Animal {
  spek() {
    console.log("Dog Spaking");
  }
}

function taking(animal: Animal) {
  animal.spek();
}
```

### Go Thread-Safe In-Memory Store

From [pos-backend/main.go](/home/aftab-farhan/projects/Backend Software Development/pos-backend/main.go):

```go
type TaskStore struct {
	sync.Mutex
	tasks  map[int]Task
	nextID int
}

store.Lock()
store.tasks[newTask.ID] = newTask
store.Unlock()
```

### PostgreSQL Parameterized Query

From [Full-Stack/backend/src/utils/studentQueries.ts](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/src/utils/studentQueries.ts):

```typescript
export async function findStudentByEmail(email: string): Promise<Student | null> {
  const result = await query<Student>(
    `SELECT ${studentColumns} FROM students WHERE email = $1 LIMIT 1`,
    [email],
  );

  return result.rows[0] ?? null;
}
```

## What I Have Learned

- Structuring Express applications with modular routers and middleware.
- Using native Node HTTP and Express for API development.
- Parsing JSON, URL-encoded bodies, query parameters and route parameters.
- Handling success and error status codes consistently.
- Applying controller, service and model separation.
- Working with in-memory and JSON-backed persistence.
- Using bcrypt and JWT for authentication.
- Using `express-session` and HTTP cookies.
- Defining and querying PostgreSQL tables through `pg`.
- Using Prisma models and PostgreSQL relations.
- Writing TypeScript interfaces, DTOs and generic database helpers.
- Implementing classes, constructors, private fields and polymorphism.
- Building request validation and centralized error handling.
- Writing Node.js HTTP tests and Jest specifications.
- Building a modular NestJS application with Swagger.
- Using Redis-backed throttling and audit middleware.
- Building Go REST handlers with thread-safe in-memory state.

## Currently Learning

- Building deeper PostgreSQL relationships and schema design.
- Writing joins and transaction-safe SQL.
- Strengthening TypeScript abstraction and interface design.
- Improving API test coverage.
- Separating authentication from authorization.
- Applying secure cookie and secret configuration.
- Understanding Node.js event-loop behavior with practical experiments.
- Improving NestJS module boundaries and test isolation.
- Deploying containerized full-stack applications.

## Future Learning Roadmap

| Topic | Status |
|---|---|
| Advanced PostgreSQL features | ⬜ Future |
| Database indexing and query optimization | ⬜ Future |
| Transactions, isolation levels and locking | ⬜ Future |
| Database normalization and ER design | ⬜ Future |
| Deeper NestJS architecture | 🟡 In Progress |
| Authentication and authorization design | 🟡 In Progress |
| Role-Based Access Control (RBAC) | ⬜ Future |
| Redis and caching strategies | 🟡 In Progress |
| Background jobs and queues | ⬜ Future |
| Docker and container orchestration | 🟡 In Progress |
| CI/CD pipelines | ⬜ Future |
| Linux and server management | ⬜ Future |
| Cloud deployment | ⬜ Future |
| System design | ⬜ Future |
| Scalability and horizontal scaling | ⬜ Future |
| Rate limiting at application and infrastructure layers | 🟡 In Progress |
| Structured logging and monitoring | 🟡 In Progress |
| Automated testing and coverage | 🟡 In Progress |
| Security best practices and threat modeling | 🟡 In Progress |
| Microservices architecture | ⬜ Future |
| Message brokers and event streaming | ⬜ Future |

## How to Run This Project

No single root command runs the complete repository. Select a project folder and follow its package scripts or language toolchain.

### Run the native Node.js server

```bash
cd "/home/aftab-farhan/projects/Backend Software Development"
node server.js
```

Default listener: `http://localhost:6000`

### Run an Express project

Example for the To-Do Manager:

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/To-Do Manager-AS"
npm install
npm start
```

Check each project for the exact script names. Some use `npm run dev`, while others export an Express app without a `start` script.

### Run the Go POS backend

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/pos-backend"
go run main.go
```

Run POS tests:

```bash
go test -v ./...
```

### Run the TypeScript student API

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend"
npm install
npm run dev
```

### Run VocabMaster

From the VocabMaster workspace:

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/VocabMaster"
npm install
npm run dev:backend
npm run dev:frontend
```

Backend default: `http://localhost:4000`

Swagger: `http://localhost:4000/api/docs`

Frontend default: `http://localhost:3000`

Docker option:

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/VocabMaster"
docker compose up --build
```

## Installation and Setup

### Prerequisites

- Node.js 18 or newer for the current Express, TypeScript and NestJS projects.
- npm.
- PostgreSQL when running PostgreSQL-backed projects.
- Go 1.22 or newer for `pos-backend` if applicable.
- Docker and Docker Compose for VocabMaster container workflows.
- TypeScript compiler for standalone TypeScript projects.

### General JavaScript setup

```bash
cd "<project-directory>"
npm install
npm run dev
```

If a project uses only source scripts and has no dev script:

```bash
node app.js
```

### PostgreSQL setup

1. Create a PostgreSQL database.
2. Use the SQL in [Full-Stack/backend/database/schema.sql](/home/aftab-farhan/projects/Backend Software Development/Full-Stack/backend/database/schema.sql).
3. Configure database variables or update the project connection settings.
4. For VocabMaster, configure `DATABASE_URL` and run Prisma commands:

```bash
cd "/home/aftab-farhan/projects/Backend Software Development/VocabMaster"
npm run prisma:generate --workspace=backend
npm run prisma:migrate --workspace=backend
npm run seed --workspace=backend
```

### Environment variables

Never commit real credentials. Use `.env.example` files as templates and create local `.env` files.

Common variables include:

```text
PORT=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DATABASE_URL=
JWT_SECRET=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
SESSION_SECRET=
SUPABASE_URL=
SUPABASE_ANON_KEY=
CORS_ORIGIN=
REDIS_URL=
```

The exact variable names differ by project; inspect that project's source and `.env.example`.

## Author Information

- **Author:** Aftab Farhan Arko
- **Repository:** [aftabfarhanarko/Backend-Golang](https://github.com/aftabfarhanarko/Backend-Golang)

This repository is a living backend engineering portfolio and learning notebook. Projects may intentionally remain at different levels of maturity as new concepts are added and existing implementations are improved.
