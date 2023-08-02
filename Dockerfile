FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 10000
CMD ["npm", "start"]
