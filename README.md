# 🚀 Software Backend Engineering with Golang & Gin

[![Go Version](https://img.shields.io/badge/Go-1.21+-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://golang.org/)
[![Gin Framework](https://img.shields.io/badge/Framework-Gin_Gonic-008ECF?style=for-the-badge&logo=go&logoColor=white)](https://gin-gonic.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20%2F%20Modular-brightgreen?style=for-the-badge)](#-production-grade-architecture)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

A high-performance, scalable, and production-grade backend engineering guide and repository implementing modern RESTful API architectures using **Go (Golang)** and the **Gin Web Framework**.

---

## 📑 Table of Contents
- [Overview & Philosophy](#-overview--philosophy)
- [Why Golang & Gin for Backend Systems?](#-why-golang--gin-for-backend-systems)
- [System Architecture](#-system-architecture)
- [Core Engineering Concepts](#-core-engineering-concepts)
  - [1. Standard Library (`net/http`) Foundation](#1-standard-library-nethttp-foundation)
  - [2. High-Performance Web Routing with Gin](#2-high-performance-web-routing-with-gin)
  - [3. Request Validation & Binding](#3-request-validation--binding)
  - [4. Middleware Architecture](#4-middleware-architecture)
  - [5. Concurrency & Thread-Safety](#5-concurrency--thread-safety)
  - [6. Error Handling & Graceful Shutdown](#6-error-handling--graceful-shutdown)
- [REST API Specifications](#-rest-api-specifications)
- [Scalable Project Structure](#-scalable-project-structure)
- [Quick Start & Setup](#-quick-start--setup)
- [Production Best Practices](#-production-best-practices)

---

## 🎯 Overview & Philosophy

Modern backend systems require ultra-low latency, optimal resource utilization, and predictable concurrency. This repository showcases real-world backend engineering patterns ranging from low-level standard library primitives (`net/http`, `sync.Mutex`) to high-throughput, enterprise-ready APIs powered by the **Gin** HTTP framework.

### Primary Objectives:
- **Zero-Allocation Mindset:** Maximizing throughput and minimizing garbage collection overhead.
- **Thread-Safe State Management:** Demonstrating race-condition-free concurrent memory access.
- **Idiomatic Go:** Enforcing explicit error handling, interface segregation, and composition over inheritance.
- **Production Readiness:** Structuring modular APIs ready for containerization, observability, and scaling.

---

## ⚡ Why Golang & Gin for Backend Systems?

| Feature | Golang Standard (`net/http`) | Gin Framework |
| :--- | :--- | :--- |
| **Routing Engine** | Sequential matching / Subtree match | **Radix Tree** (Fastest routing algorithm, minimal memory) |
| **Memory Allocation** | Standard heap allocations | **Zero Memory Allocation** on routing path |
| **Middleware Chain** | Manual wrapper chaining | Built-in native middleware pipeline (`c.Next()`, `c.Abort()`) |
| **Data Validation** | Manual conditional checks | Declarative struct tags via `go-playground/validator` |
| **JSON Serialization** | `encoding/json` standard library | High-speed JSON rendering & streaming |
| **Concurrency** | Native Goroutines & Channels | Native Goroutines per request with thread-safe Context |

---

## 🏗 System Architecture

The project adopts **Clean Architecture** principles to decouple business logic from transport protocols, database drivers, and external dependencies.

```
                    ┌─────────────────────────┐
                    │       HTTP Client       │
                    └────────────┬────────────┘
                                 │ HTTP Request
                                 ▼
                    ┌─────────────────────────┐
                    │    Gin Router / Mux     │
                    │   (Routing & Middleware)│
                    └────────────┬────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 │ Interceptor / Middlewares      │
                 │ (Logger, Recovery, Auth, CORS) │
                 └───────────────┬───────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Handler / Controller│  <-- Request Binding & DTO Validation
                    └────────────┬────────────┘
                                 │ Interface
                                 ▼
                    ┌─────────────────────────┐
                    │   Service / Use Case    │  <-- Pure Business Logic & Domain Rules
                    └────────────┬────────────┘
                                 │ Interface
                                 ▼
                    ┌─────────────────────────┐
                    │   Repository / Storage  │  <-- In-Memory (Mutex) / Postgres / MySQL
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │  Database / Persistence │
                    └─────────────────────────┘
```

---

## 💡 Core Engineering Concepts

### 1. Standard Library (`net/http`) Foundation
Before adopting frameworks, understanding Go's native primitives is essential. Every request in Go runs inside its own lightweight **Goroutine**.

Key standard library elements implemented:
- Dynamic path parsing without third-party dependencies (`strings.Split`).
- HTTP method multiplexing (`switch r.Method`).
- Thread-safe storage with `sync.Mutex` ensuring concurrent write consistency.

### 2. High-Performance Web Routing with Gin
Gin uses a **Radix tree** structure for routing, enabling parameterized routes (`/tasks/:id`) and wildcards (`/files/*filepath`) with $O(k)$ lookup time, where $k$ is the path length.

```go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
    r := gin.New()
    
    // Core middlewares
    r.Use(gin.Logger())
    r.Use(gin.Recovery())

    v1 := r.Group("/api/v1")
    {
        tasks := v1.Group("/tasks")
        {
            tasks.GET("", GetTasks)
            tasks.POST("", CreateTask)
            tasks.GET("/:id", GetTaskByID)
            tasks.PUT("/:id", UpdateTask)
            tasks.DELETE("/:id", DeleteTask)
        }
    }
    return r
}
```

### 3. Request Validation & Binding
Gin integrates with `go-playground/validator/v10` through declarative struct tags, guaranteeing strict schema validation before data reaches your business layer:

```go
type CreateTaskInput struct {
    Title       string `json:"title" binding:"required,min=3,max=100"`
    Description string `json:"description" binding:"max=500"`
    Priority    string `json:"priority" binding:"required,oneof=low medium high"`
}
```

### 4. Middleware Architecture
Middlewares allow you to intercept and modify the execution pipeline before or after handlers:

- **Logger Middleware:** Captures latency, status codes, client IP, and request path.
- **Recovery Middleware:** Catches any unhandled panic inside a handler and gracefully returns a `500 Internal Server Error` instead of crashing the server.
- **CORS & Authentication:** Validates JWT tokens and sets security headers.

### 5. Concurrency & Thread-Safety
When handling shared state in memory or connection pools:
- **`sync.Mutex` / `sync.RWMutex`:** Ensures mutual exclusion during reads and writes to maps or shared counters.
- **Channels & Worker Pools:** Distributes background processing (emails, analytics, async tasks) without blocking HTTP responses.

```go
type TaskStore struct {
    sync.RWMutex
    tasks  map[int]Task
    nextID int
}

func (s *TaskStore) Read(id int) (Task, bool) {
    s.RLock()
    defer s.RUnlock()
    task, ok := s.tasks[id]
    return task, ok
}
```

### 6. Error Handling & Graceful Shutdown
In production, backend services must handle OS signals (`SIGINT`, `SIGTERM`) to finish inflight requests before exiting:

```go
srv := &http.Server{
    Addr:    ":8080",
    Handler: router,
}

go func() {
    if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
        log.Fatalf("listen: %s\n", err)
    }
}()

// Listen for syscall signals for graceful shutdown
quit := make(chan os.Signal, 1)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()
if err := srv.Shutdown(ctx); err != nil {
    log.Fatal("Server forced to shutdown:", err)
}
```

---

## 📡 REST API Specifications

### Endpoints

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/tasks` | Retrieve all tasks | `200 OK` |
| `GET` | `/tasks/:id` | Retrieve single task by ID | `200 OK` / `404 Not Found` |
| `POST` | `/tasks` | Create a new task | `201 Created` / `400 Bad Request` |
| `PUT` | `/tasks/:id` | Update an existing task | `200 OK` / `404 Not Found` |
| `DELETE` | `/tasks/:id` | Remove a task | `204 No Content` / `404 Not Found` |

### Sample Payload

#### `POST /tasks`
```json
{
  "title": "Implement JWT Middleware in Gin",
  "completed": false
}
```

#### Response (`201 Created`)
```json
{
  "id": 3,
  "title": "Implement JWT Middleware in Gin",
  "completed": false
}
```

---

## 📂 Scalable Project Structure

Standard Go Enterprise Layout ([golang-standards/project-layout](https://github.com/golang-standards/project-layout)):

```plaintext
.
├── cmd/
│   └── api/
│       └── main.go           # Application entrypoint & dependency wiring
├── internal/
│   ├── config/               # Environment & configuration loader
│   ├── handler/              # HTTP controllers (Gin handlers)
│   ├── middleware/           # Custom middlewares (auth, logger, metrics)
│   ├── model/                # Domain models & database entities
│   ├── repository/           # Data access layer (SQL / In-memory)
│   └── service/              # Core business rules & use cases
├── pkg/
│   └── response/             # Standardized JSON response envelope
├── go.mod                    # Dependency definitions
├── go.sum                    # Dependency checksums
├── Dockerfile                # Production multi-stage Docker build
└── README.md                 # System documentation
```

---

## 🚀 Quick Start & Setup

### Prerequisites
- [Go (1.21 or later)](https://go.dev/dl/) installed
- Git installed
- Optional: `air` for hot-reloading (`go install github.com/air-verse/air@latest`)

### 1. Clone the Repository
```bash
git clone https://github.com/aftabfarhanarko/Software-Backend-Engineering-Golang.git
cd Software-Backend-Engineering-Golang
```

### 2. Run the In-Memory REST API (Standard Library)
```bash
go run main.go
```
The server will start listening at `http://localhost:8080`.

### 3. Verify Endpoints with cURL

```bash
# Fetch all tasks
curl -X GET http://localhost:8080/tasks

# Create a new task
curl -X POST http://localhost:8080/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Master Gin Radix Tree Routing", "completed": false}'

# Retrieve task with ID 1
curl -X GET http://localhost:8080/tasks/1

# Update task with ID 1
curl -X PUT http://localhost:8080/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Master Gin Radix Tree Routing", "completed": true}'

# Delete task with ID 1
curl -X DELETE http://localhost:8080/tasks/1
```

---

## 🛡 Production Best Practices

1. **Context Propagation:** Always pass `context.Context` to database queries and external RPC calls to enforce cancellation deadlines and prevent resource leaks.
2. **Connection Pooling:** Configure database connection pools explicitly (`SetMaxOpenConns`, `SetMaxIdleConns`, `SetConnMaxLifetime`).
3. **Structured Logging:** Use structured loggers such as [`uber-go/zap`](https://github.com/uber-go/zap) or [`rs/zerolog`](https://github.com/rs/zerolog) instead of standard `fmt.Println`.
4. **Environment-Driven Configuration:** Use tools like `viper` or standard `os.Getenv` with strict fallback defaults.
5. **Multi-Stage Docker Builds:** Compile static Go binaries with `CGO_ENABLED=0` to run inside minimal `scratch` or `alpine` images (~15MB final image size).

---

## 👨‍💻 Author & Contributions
Maintained by **[Aftab Farhan Arko](https://github.com/aftabfarhanarko)**. Contributions, bug reports, and pull requests are warmly welcome!
