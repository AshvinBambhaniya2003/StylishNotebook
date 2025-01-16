# Multi-stage build using Node.js Alpine image with build stage named 'build'
FROM node:16-alpine as build

# Accept build-time arguments
ARG REACT_APP_BACKEND_URI

# Set environment variable during build
ENV REACT_APP_BACKEND_URI=$REACT_APP_BACKEND_URI

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./package.json ./package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Start new stage for serving the built application
FROM node:16-alpine

# Set working directory for serving app
WORKDIR /app

# Copy only the build artifacts from previous stage
COPY --from=build /app/build ./build

# Install serve package globally to host static files
RUN npm install -g serve

# Expose port 3000 for the application
EXPOSE 3000

# Command to start the application using serve
CMD ["serve", "-s", "build", "-l", "3000"]