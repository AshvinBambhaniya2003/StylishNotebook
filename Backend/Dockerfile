# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
