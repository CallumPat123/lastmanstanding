# Running the App with Docker Compose

This guide provides instructions on how to run the application locally using Docker Compose, which simplifies the process of setting up and managing application containers.

## Prerequisites

- Docker and Docker Compose installed on your machine. If you don't have Docker installed, follow the [official Docker installation guide](https://docs.docker.com/get-docker/).

## Steps to Run the App

1. **Clone the Repository** (if you haven't already):
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Navigate to the Project Directory**:
    Ensure you are in the directory containing the `docker-compose.yml` file.

3. **Build and Run the Containers**:
    Use Docker Compose to build and start the application containers. This command will also pull the necessary Docker images if they are not already present on your machine.
    ```bash
    docker-compose up --build
    ```

4. **Accessing the Application**:
    Once the containers are running, you can access the application via the specified ports in your `docker-compose.yml` file, typically `http://localhost:3000`.

5. **Stopping the Containers**:
    To stop and remove the containers, networks, and volumes associated with your setup, run:
    ```bash
    docker-compose down
    ```

## Additional Docker Compose Commands

- To start the services in detached mode (running in the background):
    ```bash
    docker-compose up -d
    ```

- To view the logs of running containers:
    ```bash
    docker-compose logs
    ```

- To rebuild the containers after making changes:
    ```bash
    docker-compose up --build
    ```

By following these steps, you can easily set up and run your application in a consistent and isolated environment using Docker Compose.
