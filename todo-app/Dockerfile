# Use secure, slim base image
FROM node:18.20.2-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose React dev server port (if needed)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
