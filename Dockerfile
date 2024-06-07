ARG BASE_STAGE_FROM=node:latest

FROM $BASE_STAGE_FROM AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN npm install -g npm@latest && npm install -g typescript && npm install -g @nestjs/cli
WORKDIR /service
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
COPY . .