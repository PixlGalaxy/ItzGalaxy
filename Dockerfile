# 1: Frontend Build
FROM node:24-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install --legacy-peer-deps
COPY frontend ./
RUN npm run build

# 2: Backend Build
FROM node:24-alpine AS build-backend
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install --legacy-peer-deps
COPY backend ./

# 3: Final Image Nginx And Node.js
FROM node:24-alpine
WORKDIR /app

# Install Nginx
RUN apk add --no-cache nginx && rm -rf /var/cache/apk/*

# Copy Frontend To Nginx Dir
COPY --from=build-frontend /app/frontend/dist /usr/share/nginx/html

# Copy Nginx Config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy Backend 
COPY --from=build-backend /app/backend /app/backend
WORKDIR /app/backend
RUN chmod +x server.js

# Expose Ports 
EXPOSE 5001

# Start Commands
CMD ["sh", "-c", "node /app/backend/server.js & nginx -g 'daemon off;'"]
