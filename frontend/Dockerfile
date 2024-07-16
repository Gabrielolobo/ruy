# Use an official Node.js runtime as a base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the React app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]