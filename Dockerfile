# ============================================================================
# Stage 1: Build React + Vite Application
# ============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Salin manifest dependensi terlebih dahulu untuk memaksimalkan Docker layer cache
COPY package.json package-lock.json* ./

RUN npm ci

# Salin kode sumber aplikasi dan aset publik
COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src

# Build produksi ke folder /app/dist
RUN npm run build

# ============================================================================
# Stage 2: Production Web Server (Nginx Alpine)
# ============================================================================
FROM nginx:1.27-alpine AS production

# Salin konfigurasi Nginx khusus SPA (History API routing fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Salin hasil build statis dari stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]

