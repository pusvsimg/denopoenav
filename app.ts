// app.ts

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const filepath = decodeURIComponent(url.pathname);

  // Content Security Policy (CSP) - 根据你的需要进行调整
  const cspHeader = {
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self'; style-src 'self' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; img-src 'self'",
  };

  try {
    let file;
    let contentType = "";

    switch (filepath) {
      case "/":
      case "/index.html":
        file = await Deno.readFile("./index.html");
        contentType = "text/html; charset=utf-8";
        break;
      case "/style.css":
        file = await Deno.readFile("./style.css");
        contentType = "text/css; charset=utf-8";
        break;
      case "/script.js":
        file = await Deno.readFile("./script.js");
        contentType = "application/javascript; charset=utf-8";
        break;
      // 移除 favicon.ico 处理
      // case "/favicon.ico":
      //   file = await Deno.readFile("./favicon.ico");
      //   contentType = "image/x-icon";
      //   break;
      default:
        // 对于其他请求，返回 404
        return new Response("Not Found", { status: 404 });
    }

    return new Response(file, {
      headers: {
        "content-type": contentType,
        ...cspHeader, // 包含 CSP 标头
      },
    });
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("Not Found", { status: 404 });
    } else {
      console.error("Server error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
}

Deno.serve(handler);
