## Pre requirement for production

```bash
cp .env.production.sample .env.production
```

## Production check

```bash
npm run build
npm install -g serve
serve -s build
```

## Log

This started with `npx create-react-app react-apps --template typescript`. [Reference]([https://create-react-app.dev/docs/adding-typescript/ Adding TypeScript | Create React App])

Install [React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
Install [Tailwind css](https://tailwindcss.com/docs/guides/create-react-app)

## Deploy

```
rsync -rltuvzn ./build/ sample:/var/www/html
# e.g. rsync -rltuvz ./build/ dev:/usr/share/nginx/freks.jp/app
```

### Nginx config

If you publish /app

```
location /app {
  try_files $uri /app/index.html;
}
```
