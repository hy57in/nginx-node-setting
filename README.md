# React + Node webcam image caputre

Capture screenshot from Your webcam, sends it into server. The server save it in `/public/uploads` folder.

## Clone repository

```
git clone https://github.com/MSBT-2021-Silicon-Valley-Internship/nginx-node-setting.git

```

## How to run

```
yarn install
yarn start
yarn start:server
```

You have to run both `yarn start` and `yarn start:server` in separate consoles.

## Using different file upload endpoint or server

If You want to use different server to upload screenshots, You can change host:

```
./package.json:
"proxy": "http://localhost:4000",
```

To change API URI You can edit:

```
./src/App.js:
App -> uploadImage method
const url = '/upload-face';
```

"# webcam-react-nginx-express"

# Nginx 연결(우분투)

1. root folder에서 npm run build
2. build내부에 있는 file들 옮기기 : cp -r build/ /var/www/dir_name
3. /etc/nginx/sites-available folder의 default 파일에서 : root /var/www/dir_name
4. 그대로 default파일에서
   location /{
   #...
   try_files $uri $uri/ index.html;
   }
