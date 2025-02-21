# Use Node.js LTS version
FROM node:22.4.0-alpine3.20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# We'll create a volume mount point specifically for node_modules
VOLUME /app/node_modules

# Copy project files
COPY . .

# Expose port 3000 (default for Create React App)
EXPOSE 3000

# Start development server
CMD ["npm", "start"]