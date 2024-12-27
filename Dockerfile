# Use official Node.js image
FROM node:18-alpine

# Build arguments (these are passed during build time)
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

# Set environment variables for the application
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID}
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=${CONTENTFUL_ACCESS_TOKEN}

# Set the working directory for the app inside the container
WORKDIR /usr/app

# Copy package.json and package-lock.json first to optimize Docker caching
COPY package*.json ./

# Install dependencies (including dev dependencies for Next.js)
RUN npm ci

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js app
RUN npm run build --verbose

# Debugging: Log environment variables (optional, can be removed in production)
RUN echo "Building with CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID} and CONTENTFUL_ACCESS_TOKEN=${CONTENTFUL_ACCESS_TOKEN}"

# Expose the port the app will run on
EXPOSE 3000

# Start the application (Next.js will start the app in production mode)
CMD ["npm", "start"]
