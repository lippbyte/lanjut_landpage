# ============================================================================
# Node.js Production Image (Tanpa Nginx di dalam Container)
# Reverse proxy / Nginx diatur dari luar (Server Sekolah / Dokploy)
# ============================================================================
FROM node:20-alpine

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

ENV PORT=3030

EXPOSE 3030

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT:-3030}/ || exit 1

CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0 --port ${PORT:-3000}"]
