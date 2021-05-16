FROM strapi/base
WORKDIR /backend
COPY package.json /backend/package.json
COPY yarn.lock /backend/yarn.lock
RUN yarn install
COPY . /backend
ENV NODE_ENV production
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]