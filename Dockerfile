# Use a slim Node.js image to keep the footprint small
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the application code
COPY . .

# Make sure the binary is executable
RUN chmod +x ./bin/index.cjs

# Link the package so the 'bin' command is available globally in the container
RUN npm link

# Set the default command to run your package
# Repalce 'my-first-npm-package' with the actual command defined in your 'bin' field
CMD ["my-first-npm-package"]
