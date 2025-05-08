# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier tous les fichiers (adapté à ton projet)
COPY . .

# Installer les dépendances
RUN npm ci

# Build l'application
RUN npm run build

# Étape 2 : Runner
FROM node:20-alpine AS runner

# Sécurité : créer un utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copier uniquement les fichiers nécessaires à l’exécution
COPY --from=builder /app ./

# Propriété au bon utilisateur
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["npm", "start"]
