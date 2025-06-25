import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title = 'Muhsin A - Frontend Engineer' } = req.query;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #BA68C8 0%, #455A64 100%);
            width: 1200px;
            height: 630px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .container {
            text-align: center;
            padding: 60px;
          }
          .title {
            font-size: 64px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          .subtitle {
            font-size: 32px;
            opacity: 0.9;
            margin-bottom: 30px;
          }
          .description {
            font-size: 24px;
            opacity: 0.8;
            max-width: 800px;
            line-height: 1.4;
          }
          .badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            margin: 5px;
            font-size: 18px;
            backdrop-filter: blur(10px);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="title">${title}</div>
          <div class="subtitle">Frontend Engineer</div>
          <div class="description">
            Specializing in React, JavaScript, TypeScript, and modern web technologies
          </div>
          <div style="margin-top: 40px;">
            <span class="badge">React</span>
            <span class="badge">TypeScript</span>
            <span class="badge">Next.js</span>
            <span class="badge">JavaScript</span>
          </div>
        </div>
      </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate');
  res.status(200).send(html);
} 