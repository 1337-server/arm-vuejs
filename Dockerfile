FROM node:alpine AS armui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# build stage
FROM automaticrippingmachine/arm-dependencies:1.1.5 AS base
WORKDIR /app

# Core dependencies
RUN apt-get update && apt-get install -y nginx default-libmysqlclient-dev \
    && pip3 install mysql-connector-python \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

##Fast api
COPY ./api /app/api
WORKDIR /app/api
RUN mkdir /etc/service/fast_api/ && echo "#!/bin/bash\ncd /app/api\nexec uvicorn main:app --host 0.0.0.0 --port 81" > /etc/service/fast_api/run && cat /etc/service/fast_api/run
RUN mkdir -p /etc/my_init.d && echo "#!/bin/bash\nnginx" > /etc/my_init.d/armvueui.sh
#RUN echo "#!/bin/bash\nsed -i -r \"s/http:\/\/127.0.0.1:8000/\$MYSQL_IP:8890/\" /app/src/main.js" > /etc/my_init.d/fixapilink.sh && cat /etc/my_init.d/fixapilink.sh

# TODO replace 'http://127.0.0.1:8000' inside main.js with the ip from mysql_ip env variable on first run
#      This needs to be the full link to the backend fast api and not the mysql
RUN chmod +x /etc/service/fast_api/run
RUN chmod +x /etc/my_init.d/*.sh


COPY api/requirements.txt /app/api/requirements.txt
RUN pip3 install --no-cache-dir --upgrade -r /app/api/requirements.txt
###########################################################
COPY --from=armui /dist /var/www/html
# For vuejs router - replace 404 location with new vuejs location
RUN sed -i 's/z\|=404/\/index.html/' /etc/nginx/sites-available/default

# production stage
EXPOSE 81
EXPOSE 80
WORKDIR /app/api
CMD ["/sbin/my_init"]
#CMD ["nginx", "-g", "daemon off;"]