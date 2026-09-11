# Stage 1: Build project React/Vite
FROM node:20-alpine AS build
WORKDIR /app

# Copy file dependency
COPY package*.json ./
RUN npm install

# Copy seluruh kodingan dan build
COPY . .
RUN npm run build

# Stage 2: Jalankan hasil build menggunakan Nginx (super ringan)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]