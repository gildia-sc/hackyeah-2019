FROM openjdk:11.0.4-jdk-slim

EXPOSE 8080

ENTRYPOINT exec java -jar app.jar

COPY build/libs/*.jar app.jar

