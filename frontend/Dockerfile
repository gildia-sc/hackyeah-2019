FROM nginx
EXPOSE 80

COPY nginx/localhost.crt /certs/localhost.crt
COPY nginx/localhost.key /certs/localhost.key

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY build build
