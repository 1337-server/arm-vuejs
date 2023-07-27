# build stage
FROM automaticrippingmachine/arm-dependencies:1.1.5 AS base

# Core dependencies
RUN apt-get update && apt-get install -y curl sudo nginx python3-dev default-libmysqlclient-dev build-essential \
    && pip3 install mysql-connector-python

# Node
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

##Fast api
COPY ./api /app/api
RUN cd /app/api && npm install && npm run build && ls -la /app/dist && cp -r /app/dist/. /var/www/html
RUN mkdir /etc/service/fast_api/ && echo "#!/bin/bash\ncd /app/api\nexec uvicorn main:app --host 0.0.0.0 --port 81" > /etc/service/fast_api/run && cat /etc/service/fast_api/run
RUN mkdir -p /etc/my_init.d && echo "#!/bin/bash\nnginx" > /etc/my_init.d/armvueui.sh && cat /etc/my_init.d/armvueui.sh

RUN chmod +x /etc/service/fast_api/run
RUN chmod +x /etc/my_init.d/*.sh

COPY api/requirements.txt /app/api/requirements.txt
RUN pip3 install --no-cache-dir --upgrade -r /app/api/requirements.txt
###########################################################
# For vuejs router - replace 404 location with new vuejs location
RUN sed -i 's/z\|=404/\/index.html/' /etc/nginx/sites-available/default

# production stage
EXPOSE 81
EXPOSE 80
CMD ["/sbin/my_init"]
#CMD ["nginx", "-g", "daemon off;"]