FROM node:22.4.0-alpine3.20

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY . .

# Expose API port
EXPOSE 3001

# Start the server
CMD ["npm", "start"]