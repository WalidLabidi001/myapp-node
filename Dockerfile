FROM node:18-alpine

# Créer un user non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package.json ./
RUN npm install --only=production

COPY . .

# Dossier où sera monté le PVC
RUN mkdir -p /data && chown -R appuser:appgroup /data

USER appuser

EXPOSE 8080
CMD ["npm", "start"]

