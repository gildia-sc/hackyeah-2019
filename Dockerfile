FROM openjdk:11.0.4-jdk-slim

COPY build/libs/*.jar app.jar

ENTRYPOINT exec java -jar app.jar
