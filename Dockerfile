FROM node:8.9 as builder

COPY package.json yarn.lock /usr/src/app/

WORKDIR /usr/src/app

# Install package
RUN yarn install

COPY . /usr/src/app

# Set env for API url
ARG api_url=https://api.kcoin.club
ENV API_URL=$api_url

# Build dist files
RUN yarn run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html