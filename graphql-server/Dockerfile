# Use an official Node.js runtime as a base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the GraphQL server
CMD ["node", "index.js"]
