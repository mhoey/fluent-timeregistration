FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Expose port for development server
EXPOSE 3000

# Start in development mode with volume mount
# Volume should be mounted at /app with -v $(pwd):/app
CMD ["/bin/sh"]