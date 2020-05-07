FROM node:alpine AS builder


RUN git clone https://github.com/dkzhang/angDaDi001.git

WORKDIR /angDaDi001

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /angDaDi001/dist/* /usr/share/nginx/html/
