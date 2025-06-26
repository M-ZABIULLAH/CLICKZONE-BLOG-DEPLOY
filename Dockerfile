# استفاده از nginx به عنوان وب‌سرور
FROM nginx:alpine

# حذف فایل پیش‌فرض index.html که در Nginx هست
RUN rm -rf /usr/share/nginx/html/*

# کپی کردن فایل‌های پروژه به مسیر html
COPY . /usr/share/nginx/html

# پورت 80 را باز می‌کنیم
EXPOSE 80
