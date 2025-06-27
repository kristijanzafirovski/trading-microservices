FROM gradle:7.6.0-jdk11 AS build
WORKDIR /app
COPY . .
RUN gradle shadowJar --no-daemon

FROM eclipse-temurin:11-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*-all.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java", "--add-opens", "java.base/java.nio=ALL-UNNAMED", "-jar", "app.jar"]
