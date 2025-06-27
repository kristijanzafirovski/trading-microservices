FROM gradle:7.6.0-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle shadowJar --no-daemon

FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*-all.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]