# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy the built application from the build stage to nginx's html directory
COPY --from=build /app/.next /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
