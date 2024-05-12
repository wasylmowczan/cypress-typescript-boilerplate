ARG IMAGE=cypress/base:20.5.0

FROM $IMAGE

WORKDIR /app

COPY .npmr[c] package.json package-lock.json ./

RUN npm ci && npm cache clean --force && \
  npm dedupe && \
  rm -f .npmrc
COPY . .

RUN chmod 777 entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]