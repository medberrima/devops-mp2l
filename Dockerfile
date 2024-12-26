# Use the official Node.js image as the base
FROM node:18-lts

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the Next.js app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 8080 (required by Azure Web App)
EXPOSE 8080

# Start the Next.js app on port 8080 (Override default Next.js port)
CMD ["npm", "start"]
