import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';

const app = express();
const port = 3000;

// Log the requests
app.use(
  morgan('[:date[iso]] Request: :method :url HTTP/:http-version', {
    immediate: true,
    stream: {
      write: (message) => {
        console.log(message.trim());
      }
    }
  })
);

// Log the responses
app.use(
  morgan(
    '[:date[iso]] Response: :method :url :status :res[content-length] :response-time ms',
    {
      stream: {
        write: (message) => {
          console.log(message.trim());
        }
      }
    }
  )
);

// API routes
app.use('/api', routes);

// Basic UI for testing Image Processing API
app.get('/', (req, res) => {
  const html = `<!DOCTYPE html>
    <html lang="en-US">
    <head>
      <title>Image Processing API - Arpit Srivastava</title>
      <style>
        html * { font-family: sans-serif; }
      </style>
    </head>
    <body>
      <h2>Image Processing API - Arpit Srivastava</h2>
      
      <h3>Resize Images (width x height)</h3>
      <h4>JPG image</h4>
      <p style="font-weight:bold;">fjord.jpg</p>
      <a href="api/image?name=fjord.jpg">Original Image</a>
      <p style="font-weight:bold;">Resized:
        <a href="api/image-resize?name=fjord.jpg&width=300&height=200">300x200</a> 
        <a href="api/image-resize?name=fjord.jpg&width=50&height=50">50x50</a>
        <a href="api/image-resize?name=fjord.jpg&width=800&height=600">800x600</a><br>
      </p>
      
      <h4>PNG image</h4>
      <p style="font-weight:bold;">testpng.png</p>
      <a href="api/image?name=testpng.png">Original Image</a><br>
      <p style="font-weight:bold;">Resized:
        <a href="api/image-resize?name=testpng.png&width=300&height=200">300x200</a>
        <a href="api/image-resize?name=testpng.png&width=200&height=200">200x200</a>
        <a href="api/image-resize?name=testpng.png&width=800&height=600">800x600</a>
      </p>
    </body>
    </html>`;
  res.send(html);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
