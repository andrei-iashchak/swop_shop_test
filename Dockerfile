FROM node:latest
RUN useradd jenkins --shell /bin/bash --create-home
RUN chown -R jenkins:jenkins /usr/local/lib/node_modules
USER jenkins
