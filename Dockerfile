# 1: Build Frontend
FROM node:18-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# 2: Nginx Image to Serve
FROM nginx:alpine

# Copy build output to Nginx's default public folder
COPY --from=build-frontend /app/frontend/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the frontend port
EXPOSE 5001

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
