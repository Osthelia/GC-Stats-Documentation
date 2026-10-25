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

# Unprivileged image: runs as `nginx` (uid 101) and listens on 8080, so the pod can run non-root.
FROM nginxinc/nginx-unprivileged:1.30-alpine3.24

USER root
RUN apk upgrade --no-cache
USER 101

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
