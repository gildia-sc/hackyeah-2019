FROM openjdk:11-alpine

COPY build/libs/*.jar app.jar

ENTRYPOINT exec java -jar app.jar
