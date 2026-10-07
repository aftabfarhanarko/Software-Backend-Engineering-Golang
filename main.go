package main

import (
	"encoding/json"
	"fmt"

	"net/http"
	"strconv"
	"strings"
	"sync"
)

// Task represents our data model
type Task struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

// In-memory store with thread safety
type TaskStore struct {
	sync.Mutex
	tasks  map[int]Task
	nextID int
}

func NewTaskStore() *TaskStore {
	store := &TaskStore{
		tasks:  make(map[int]Task),
		nextID: 1,
	}
	// Initial dummy data
	store.tasks[1] = Task{ID: 1, Title: "Learn Go Basics", Completed: true}
	store.tasks[2] = Task{ID: 2, Title: "Build a REST API", Completed: false}
	store.nextID = 3
	return store
}

var store = NewTaskStore()

// Root Handler
func handleTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	switch r.Method {
	case http.MethodGet:
		getTasks(w, r)
	case http.MethodPost:
		createTask(w, r)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// Single Item Handler (/tasks/{id})
func handleTaskByID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// Extract ID from URL path: /tasks/1 -> 1
	pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
	if len(pathParts) < 2 {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(pathParts[1])
	if err != nil {
		http.Error(w, "Invalid Task ID", http.StatusBadRequest)
		return
	}

	switch r.Method {
	case http.MethodGet:
		getTaskByID(w, r, id)
	case http.MethodPut:
		updateTask(w, r, id)
	case http.MethodDelete:
		deleteTask(w, r, id)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

// 1. GET all tasks
func getTasks(w http.ResponseWriter, r *http.Request) {
	store.Lock()
	defer store.Unlock()

	taskList := make([]Task, 0, len(store.tasks))
	for _, task := range store.tasks {
		taskList = append(taskList, task)
	}

	json.NewEncoder(w).Encode(taskList)
}

// 2. GET single task by ID
func getTaskByID(w http.ResponseWriter, r *http.Request, id int) {
	store.Lock()
	defer store.Unlock()

	task, exists := store.tasks[id]
	if !exists {
		http.Error(w, `{"error": "Task not found"}`, http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(task)
}

// 3. POST - Create new task
func createTask(w http.ResponseWriter, r *http.Request) {
	var newTask Task
	err := json.NewDecoder(r.Body).Decode(&newTask)
	if err != nil || strings.TrimSpace(newTask.Title) == "" {
		http.Error(w, `{"error": "Invalid request payload"}`, http.StatusBadRequest)
		return
	}

	store.Lock()
	newTask.ID = store.nextID
	store.nextID++
	store.tasks[newTask.ID] = newTask
	store.Unlock()

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newTask)
}

// 4. PUT - Update existing task
func updateTask(w http.ResponseWriter, r *http.Request, id int) {
	store.Lock()
	defer store.Unlock()

	_, exists := store.tasks[id]
	if !exists {
		http.Error(w, `{"error": "Task not found"}`, http.StatusNotFound)
		return
	}

	var updatedTask Task
	err := json.NewDecoder(r.Body).Decode(&updatedTask)
	if err != nil {
		http.Error(w, `{"error": "Invalid request payload"}`, http.StatusBadRequest)
		return
	}

	updatedTask.ID = id
	store.tasks[id] = updatedTask

	json.NewEncoder(w).Encode(updatedTask)
}

// 5. DELETE - Remove a task
func deleteTask(w http.ResponseWriter, r *http.Request, id int) {
	store.Lock()
	defer store.Unlock()

	_, exists := store.tasks[id]
	if !exists {
		http.Error(w, `{"error": "Task not found"}`, http.StatusNotFound)
		return
	}

	delete(store.tasks, id)
	w.WriteHeader(http.StatusNoContent)
}

func main() {
	// Route endpoints
	http.HandleFunc("/tasks", handleTasks)
	http.HandleFunc("/tasks/", handleTaskByID)

	fmt.Println("Server running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Error starting server: %s\n", err)
	}
}