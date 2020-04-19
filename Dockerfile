FROM node:13.3.0
RUN mkdir -p /portafolio
WORKDIR /portafolio
COPY . portafolio/
RUN npm install
RUN npm run build
EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000
