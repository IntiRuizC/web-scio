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

# Expose port 5173 (default for Vite dev server)
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]