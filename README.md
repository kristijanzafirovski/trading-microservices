# Trading Microservices

> This project was developed as a **FINKI course project** (Faculty of Computer Science and Engineering, Ss. Cyril and Methodius University in Skopje).

A microservices-based trading analytics system. Market trade data flows through Apache Kafka, is processed in real time, stored in PostgreSQL, analysed for moving-average crossover signals, and displayed in a web dashboard. Each service runs in its own Docker container, and the backend services are independent Gradle projects.

This repository is the Gradle-based version of the same architecture as [DIANS_TRADING](https://github.com/kristijanzafirovski/DIANS_TRADING), which uses Maven.

## Architecture

| Service | Responsibility | Port (host) |
|---|---|---|
| `data-ingestion-service` | Ingests market trade data and publishes it to Kafka | — |
| `real-time-processing-service` | Consumes raw trades from Kafka and processes them with Apache Spark | — |
| `data-storage-service` | Stores processed data in PostgreSQL and serves it over a REST API | 8081 |
| `data-analysis-service` | Computes SMA crossover signals (BUY / SELL) and exposes them over a REST API | 8082 |
| `data-visualization-service` | React dashboard that displays trades and signals | 3000 |

Infrastructure (Zookeeper, Kafka, PostgreSQL) is defined in `docker-compose.yml`.

## Signal generation

The analysis service uses a **Simple Moving Average (SMA) crossover** strategy. A short-window SMA is compared with a long-window SMA over each bar's average price. A BUY signal is generated when the short SMA crosses above the long SMA, and a SELL signal when it crosses below. These signals are for learning and demonstration and are not financial advice.

## Getting started

### Prerequisites

- Docker and Docker Compose

### Run the full stack

```bash
docker compose up --build
```

Once the containers are running:

- Dashboard: http://localhost:3000
- Storage API: http://localhost:8081
- Analysis API: http://localhost:8082

Database credentials should be supplied through environment variables rather than committed to version control.

## Project structure

```
.
├── docker-compose.yml
├── data-ingestion-service/          # Gradle project
├── real-time-processing-service/    # Gradle project (Spark)
├── data-storage-service/            # Gradle project
├── data-analysis-service/           # Gradle project
└── data-visualization-service/      # React frontend
```

## Tech stack

Java · Gradle · Apache Kafka · Apache Spark · PostgreSQL · React · Docker

## Author

**Kristijan Zafirovski**
