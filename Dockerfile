# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the app using NGINX
FROM nginx:alpine

# Copy the build directory from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
