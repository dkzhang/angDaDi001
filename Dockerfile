FROM node:alpine AS builder

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN git clone https://github.com/dkzhang/angDaDi001.git

WORKDIR /angDaDi001

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /angDaDi001/dist/* /usr/share/nginx/html/
