FROM registry.hamster.newtouch.com/library/nginx:latest

ADD ./default.conf /etc/nginx/conf.d

COPY ./dist /usr/share/nginx/dist
