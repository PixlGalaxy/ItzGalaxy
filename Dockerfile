# Frontend Build
FROM node:18-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Final Image Nginx And Node.js
FROM node:18-alpine
WORKDIR /app

# Install Nginx
RUN apk add --no-cache nginx

# Copy Frontend To Nginx Dir
COPY --from=build-frontend /app/frontend/dist /usr/share/nginx/html

# Copy Nginx Config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose Ports 
EXPOSE 5000

# Start Commands
CMD ["sh", "-c", "nginx -g 'daemon off;'"]