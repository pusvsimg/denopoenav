# WebNav Hub

[![Deno Deploy](https://img.shields.io/badge/Deno%20Deploy-Ready-brightgreen.svg)](https://deno.com/deploy)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 项目介绍
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/bbylw/PicGo@master/20241220015300647.png" alt="WebNav Hub Preview" width="100%">
</div>
WebNav Hub 是一个简洁、快速、可定制的导航网站，旨在帮助您组织和访问常用的网络资源。它采用现代化的 UI 设计，响应式布局，并使用 Deno 构建，以实现出色的性能和安全性。

**主要特点：**

*   **简洁的 UI：**  采用黑色主题，搭配橙色强调色（借鉴 Pornhub 的配色方案），提供清晰、专注的视觉体验。
*   **响应式设计：**  在桌面、平板和移动设备上都能良好显示。
*   **可定制：**  通过修改 HTML 和 CSS 文件，轻松添加、删除或修改链接和类别。
*   **快速加载：**  得益于 Deno 的高性能和静态文件服务，页面加载速度极快。
*   **安全性：**  内置内容安全策略 (CSP) 以防止跨站脚本攻击 (XSS)。
*   **易于部署：**  通过 Deno Deploy 和 GitHub 集成，实现一键部署。

## UI 风格

WebNav Hub 的 UI 设计灵感来自 Pornhub 的配色方案和整体布局。 我们采用了以下设计元素：

*   **主题：** 黑色背景 (`#0d0d0d`)，卡片背景 (`#1a1a1a`)，橙色强调色 (`#ff9000`)，白色文本 (`#fff`)。  这种配色方案提供了高对比度，易于阅读，并且具有现代感。
*   **字体：** 使用 Arial, Helvetica, sans-serif 作为主要字体，提供良好的跨平台兼容性。
*   **布局：**
    *   顶部导航栏 (sticky)：包含主要类别的链接。
    *   主要内容区域：使用 CSS Grid 布局，将链接组织成卡片形式。卡片采用圆角设计，并具有悬停效果（背景颜色变化、轻微提升、阴影）。
    *   响应式设计：通过媒体查询，针对不同屏幕尺寸调整卡片布局和字体大小。
*   **图标：** 使用 Font Awesome 图标库，为每个链接添加视觉提示。

**免责声明：** 本项目仅借鉴 Pornhub 的 UI/UX 设计，与 Pornhub 网站本身或其内容无关。本项目不包含、不推广任何成人内容。

## 部署方式

### 使用 Deno Deploy (推荐)

1.  **创建 GitHub 仓库：**
    *   创建一个新的 GitHub 仓库（或使用现有仓库）。
    *   将 `app.ts`、`index.html`、`style.css` 和 `script.js` 文件上传到仓库的根目录。

2.  **Deno Deploy 帐户：**
    *   如果你还没有帐户，请在 [https://deno.com/deploy](https://deno.com/deploy) 上创建一个免费的 Deno Deploy 帐户。

3.  **创建新项目：**
    *   登录 Deno Deploy。
    *   点击 "New Project"。

4.  **连接 GitHub 仓库：**
    *   选择 "GitHub" 作为部署来源。
    *   授权 Deno Deploy 访问你的 GitHub 帐户。
    *   选择你刚刚创建的包含 WebNav Hub 代码的仓库。
    *   选择要部署的分支（通常是 `main` 或 `master`）。
    *   设置 "Entrypoint" 为 `app.ts`。

5.  **部署：**
    *   点击 "Deploy"。
    *   Deno Deploy 将自动构建和部署你的应用程序。

6.  **访问：**
    *   部署完成后，Deno Deploy 将提供一个 URL，你可以通过该 URL 访问你的 WebNav Hub 网站。

### 手动部署 (使用 Deno)

1.  **安装 Deno：**  如果你的系统上还没有安装 Deno，请按照 Deno 官方网站 ([https://deno.land](https://deno.land)) 上的说明进行安装。

2.  **克隆仓库：**
    ```bash
    git clone <你的 GitHub 仓库 URL>
    cd <仓库目录>
    ```

3.  **运行：**
    ```bash
    deno run --allow-net --allow-read app.ts
    ```

    *   `--allow-net`:  允许 Deno 应用程序监听网络端口。
    *   `--allow-read`:  允许 Deno 应用程序读取文件（`index.html`、`style.css` 等）。

4.  **访问：**  在浏览器中打开 `http://localhost:8000` (或 Deno 告诉你的其他端口)。

## 项目结构webnav-hub/
├── app.ts # Deno 服务器代码
├── index.html # HTML 结构
├── style.css # CSS 样式
└── script.js # JavaScript 代码

## 自定义

*   **添加/删除链接：**  编辑 `index.html` 文件，在相应的 `<section>` 中添加或删除 `<div class="link-card">` 元素。
*   **修改类别：**  编辑 `index.html` 文件，修改 `<h2>` 标签的文本和 `id` 属性，以及 `nav` 中相应的链接。
*   **更改样式：**  编辑 `style.css` 文件，修改 CSS 变量（颜色、字体等）或添加自定义样式。
*   **更改图标:** 修改 `index.html`中的`i`标签, 使用不同的[Font Awesome](https://fontawesome.com/) 图标。

## 贡献

欢迎提交 issue 或 pull request 来改进 WebNav Hub！

## 许可证

本项目采用 [MIT 许可证](LICENSE)。
