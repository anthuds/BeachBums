FROM openjdk:19
LABEL maintainer="jfs.com"
ADD target/BB-0.0.1-SNAPSHOT.jar bb.jar
ENTRYPOINT ["java", "-jar", "bb.jar"]