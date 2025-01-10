# Use a base image for Java
FROM openjdk:11-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/ServiceCall.jar ServiceCall.jar

# Expose the application's port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "ServiceCall.jar"]
