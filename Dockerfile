FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

# When set, the build fetches the spec from this URL instead of the local
# openapi/gc-stats.json copy (see docusaurus.config.ts).
ARG OPENAPI_SPEC_URL
ENV OPENAPI_SPEC_URL=$OPENAPI_SPEC_URL
# Changing this value invalidates the layer cache below so the spec is
# re-fetched even when the source files are unchanged.
ARG CACHEBUST

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
