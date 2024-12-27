FROM node:18-alpine

# Build arguments
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

# Set environment variables for the application
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID}
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=${CONTENTFUL_ACCESS_TOKEN}

# Set working directory
WORKDIR /usr/app

# Copy application code to the container
COPY . .

# Install dependencies
RUN npm ci

# Build the application
RUN npm run build

# Debugging: Log environment variables during build (optional, remove in production)
RUN echo "Building with CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID} and CONTENTFUL_ACCESS_TOKEN=${CONTENTFUL_ACCESS_TOKEN}"

# Start the application
CMD ["npm", "start"]
