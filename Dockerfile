# ==========================================
# 第一阶段：构建阶段 (Build Stage)
# ==========================================
FROM hub.rat.dev/library/node:20-alpine AS build

# 安装构建依赖（Strapi v5 的图片处理库 sharp 在 Alpine 下需要这些 C++ 编译环境）
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    git

# 设置环境变量
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# 优先复制依赖清单，利用 Docker 缓存机制加速构建
# 注：如果你使用的是 yarn 或 pnpm，请将 package-lock.json 替换为 yarn.lock 或 pnpm-lock.yaml
COPY package.json package-lock.json ./

# 安装生产环境以及构建所需的依赖
RUN npm install

# 复制项目源代码
COPY . .

# 构建 Strapi 管理面板页面
RUN npm run build

# ==========================================
# 第二阶段：生产运行阶段 (Production Stage)
# ==========================================
FROM hub.rat.dev/library/node:20-alpine

# 安装运行时的系统依赖 (sharp 运行时需要)
RUN apk update && apk add --no-cache vips-dev bash

# 设置生产环境变量
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# 从构建阶段把编译好的文件和依赖复制过来
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app ./

# 给 node_modules 和相关目录赋予正确权限 (防止部分 Linux 宿主机下的权限报错)
RUN chown -R node:node /opt/app
USER node

# 暴露 Strapi 默认端口
EXPOSE 1337

# 启动 Strapi
CMD ["npm", "run", "start"]