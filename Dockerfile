FROM node:13.3.0
RUN apt-get update && apt-get install -y build-essential
RUN mkdir -p /portafolio
WORKDIR /portafolio
COPY . portafolio/
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
