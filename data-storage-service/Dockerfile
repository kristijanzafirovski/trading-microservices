FROM gradle:7.6.0-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle build -Dquarkus.package.type=fast-jar --no-daemon

FROM eclipse-temurin:17-jdk
WORKDIR /deployments
COPY --from=build /app/build/quarkus-app/lib/ /deployments/lib/
COPY --from=build /app/build/quarkus-app/*.jar /deployments/
COPY --from=build /app/build/quarkus-app/app/ /deployments/app/
COPY --from=build /app/build/quarkus-app/quarkus/ /deployments/quarkus/
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/deployments/quarkus-run.jar"]
