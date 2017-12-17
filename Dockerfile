# use a node base image
FROM node:latest

# set maintainer
LABEL maintainer "andrey@yashchak.ru"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:3000 || exit 1

ADD . /home/node/app
WORKDIR /home/node/app
RUN npm i -g @angular/cli
RUN npm i
ENV port 3000
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/npm", "ng", "serve", "--port 3000"]