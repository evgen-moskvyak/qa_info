const qaKnowledgeBase = [
    // ==========================================
    // РОЗДІЛ 1: CORE QA & TEST DESIGN
    // ==========================================
    {
        category: "core",
        categoryTitle: "📚 1. Core QA, Теорія та Тест-дизайн",
        topics: [
            {
                title: "SDLC, STLC та моделі розробки (Agile, Scrum, Kanban, V-Model)",
                tags: ["sdlc", "stlc", "scrum", "kanban", "agile", "shift-left"],
                content: `
                    <p><strong>Shift-Left Testing:</strong> підхід, за якого тестування починається на максимально ранніх етапах (аналіз вимог, грумінг, рев'ю макетів), щоб виявляти дефекти до написання коду. Вартість виправлення бага на етапі вимог у 10–100 разів нижча, ніж на продакшені.</p>
                    <p><strong>Етапи STLC:</strong></p>
                    <ul>
                        <li><strong>Requirement Analysis:</strong> виявлення прогалин, суперечностей та нетестованих вимог.</li>
                        <li><strong>Test Planning:</strong> оцінка трудовитрат (Estimation), вибір інструментів, розподіл ресурсів, визначення ризиків.</li>
                        <li><strong>Test Design:</strong> написання чек-листів, тест-кейсів, підготовка тестових даних.</li>
                        <li><strong>Environment Setup:</strong> налаштування тестових стендів, проксі, моків, тестових акаунтів.</li>
                        <li><strong>Test Execution:</strong> прогін тестів, репортинг дефектів, ретест та регресія.</li>
                        <li><strong>Test Closure:</strong> формування Test Summary Report, ретроспектива, аналіз метрик.</li>
                    </ul>
                `
            },
            {
                title: "Техніки тест-дизайну: коли і що застосовувати",
                tags: ["тест-дизайн", "граничні значення", "еквівалентні класи", "pairwise", "decision table", "state transition"],
                content: `
                    <ul>
                        <li><strong>Equivalence Partitioning (Еквівалентні класи):</strong> поділ даних на групи з однаковою поведінкою системи. Якщо один тест із класу падає — падає весь клас.</li>
                        <li><strong>Boundary Value Analysis (Граничні значення):</strong> перевірка значень на межах класів (<code>min-1</code>, <code>min</code>, <code>min+1</code>, <code>max-1</code>, <code>max</code>, <code>max+1</code>). Найбільше помилок програмісти роблять у нерівностях (<code>&lt;</code> замість <code>&lt;=</code>).</li>
                        <li><strong>Decision Table (Таблиця прийняття рішень):</strong> ідеально підходить для складної бізнес-логіки з багатьма умовами (наприклад, розрахунок знижок, кредитного скорингу, тарифів).</li>
                        <li><strong>State Transition (Діаграма станів та переходів):</strong> тестування систем, де поведінка залежить від попереднього стану (статуси замовлення, банківські транзакції, життєвий цикл підписки). Обов'язково перевіряємо невалідні переходи (наприклад, зі статусу "Скасовано" у "Доставлено").</li>
                        <li><strong>Pairwise Testing (Попарне тестування):</strong> комбінаторна техніка для конфігурацій (ОС + Браузер + Роздільна здатність + Мова), що дозволяє скоротити сотні комбінацій до 15–20 тестів, покривши всі пари параметрів.</li>
                    </ul>
                `
            },
            {
                title: "Класифікація тестування та Smoke / Sanity / Regression",
                tags: ["види тестування", "smoke", "sanity", "regression", "exploratory", "ad-hoc"],
                content: `
                    <ul>
                        <li><strong>Smoke Testing:</strong> поверхнева перевірка критичного функціоналу (білд не "димить", основні сценарії працюють, можна брати в тестування).</li>
                        <li><strong>Sanity Testing:</strong> вузькоспрямована перевірка працездатності конкретної фічі після фіксу бага або дрібної зміни, щоб переконатися, що логіка працює правильно.</li>
                        <li><strong>Regression Testing:</strong> перевірка існуючого функціоналу після внесення змін у код (нових фіч або багфіксів), щоб упевнитися у відсутності побічних ефектів.</li>
                        <li><strong>Risk-Based Testing (RBT):</strong> пріоритезація тестів на основі ймовірності виникнення дефекту та критичності наслідків для бізнесу. Застосовується за умов жорсткого дедлайну.</li>
                    </ul>
                `
            }
        ]
    },

    // ==========================================
    // РОЗДІЛ 2: WEB, API & ARCHITECTURE
    // ==========================================
    {
        category: "web-api",
        categoryTitle: "🌐 2. Web, API та Архітектура додатків",
        topics: [
            {
                title: "HTTP/HTTPS, Headers, CORS, Cookies та Web Storage",
                tags: ["http", "https", "cors", "cookies", "localstorage", "sessionstorage", "jwt", "cache"],
                content: `
                    <p><strong>Коди відповідей, які часто плутають:</strong></p>
                    <ul>
                        <li><code>401 Unauthorized</code> — користувач не автентифікований (немає токена або він прострочений).</li>
                        <li><code>403 Forbidden</code> — користувач автентифікований, але не має прав доступу (наприклад, звичайний юзер лізе в адмінку).</li>
                        <li><code>409 Conflict</code> — конфлікт стану ресурсу (наприклад, спроба зареєструвати вже існуючий email або одночасне редагування документа).</li>
                        <li><code>422 Unprocessable Entity</code> — синтаксис запиту вірний (JSON валідний), але не пройшла бізнес-валідація полів.</li>
                        <li><code>429 Too Many Requests</code> — спрацював Rate Limiter (захист від спаму/DDoS).</li>
                        <li><code>502 Bad Gateway / 504 Gateway Timeout</code> — проблеми на рівні проксі/балансувальника (Nginx) або сусідній мікросервіс не відповів вчасно.</li>
                    </ul>
                    <p><strong>CORS (Cross-Origin Resource Sharing):</strong> механізм безпеки браузера, що блокує запити з одного домену на інший, якщо сервер не повернув дозвільний заголовок <code>Access-Control-Allow-Origin</code>. Перед складними запитами браузер шле <code>OPTIONS</code> (Preflight request).</p>
                    <p><strong>Сховища браузера:</strong></p>
                    <ul>
                        <li><strong>Cookies:</strong> передаються з кожним HTTP-запитом на сервер; мають прапорці безпеки <code>HttpOnly</code> (захист від XSS), <code>Secure</code> (тільки HTTPS), <code>SameSite</code> (захист від CSRF).</li>
                        <li><strong>LocalStorage:</strong> до 5-10 МБ, зберігається вічно (поки не очистять кеш), не відправляється на сервер автоматично.</li>
                        <li><strong>SessionStorage:</strong> живе лише в межах однієї вкладки браузера; при закритті вкладки очищається.</li>
                    </ul>
                `
            },
            {
                title: "Архітектура: REST, GraphQL, WebSockets, gRPC та Брокери повідомлень",
                tags: ["rest", "graphql", "websockets", "grpc", "kafka", "rabbitmq", "мікросервіси"],
                content: `
                    <ul>
                        <li><strong>REST API:</strong> архітектурний стиль поверх HTTP. Недоліки: <em>Over-fetching</em> (сервер шле зайві дані) або <em>Under-fetching</em> (треба робити 3 запити замість 1).</li>
                        <li><strong>GraphQL:</strong> мова запитів до API, де клієнт сам описує, які саме поля йому потрібні. Зазвичай один endpoint (<code>POST /graphql</code>). Увага: при помилці валідації GraphQL часто повертає статус <code>200 OK</code>, а сама помилка лежить у масиві <code>errors</code> всередині JSON!</li>
                        <li><strong>WebSockets:</strong> двосторонній постійний канал зв'язку (Full-Duplex) поверх TCP. Використовується для чатів, біржових котирувань, сповіщень у реальному часі. Тестується у DevTools -> Network -> WS (Messages).</li>
                        <li><strong>Message Brokers (Kafka, RabbitMQ):</strong> асинхронна взаємодія між мікросервісами. Сервіс А кладе подію в чергу, Сервіс Б забирає її, коли готовий. Для QA важливо тестувати: ідемпотентність (що буде, якщо повідомлення прийде двічі), порядок повідомлень та Dead Letter Queue (куди падають биті повідомлення).</li>
                    </ul>
                `
            },
            {
                title: "API Testing: Авторизація, Ідемпотентність та Чек-лист перевірок",
                tags: ["api", "postman", "oauth", "bearer", "іденпотентність", "json schema"],
                content: `
                    <p><strong>Ідемпотентність методів:</strong> повторне виконання запиту дає той самий стан сервера. Ідемпотентні: <code>GET</code>, <code>PUT</code>, <code>DELETE</code>. Неідемпотентний: <code>POST</code> (кожен виклик створює новий ресурс, якщо не передано спеціальний <code>Idempotency-Key</code>, наприклад, при оплаті).</p>
                    <p><strong>Чек-лист тестування API endpoint:</strong></p>
                    <ul>
                        <li>Валідація JSON Schema (типи даних, обов'язкові/необов'язкові поля, null-значення).</li>
                        <li>Перевірка прав доступу (токен іншого користувача — IDOR, прострочений токен, відсутній токен).</li>
                        <li>Граничні значення параметрів (пагінація <code>limit=-1</code>, <code>offset=999999</code>, сортування за неіснуючим полем).</li>
                        <li>Спецсимволи, емодзі, SQL/HTML ін'єкції у строкових полях.</li>
                        <li>Перевірка запису в БД після успішного <code>POST/PUT/DELETE</code> запиту.</li>
                    </ul>
                `
            }
        ]
    },

    // ==========================================
    // РОЗДІЛ 3: MOBILE DEEP DIVE
    // ==========================================
    {
        category: "mobile",
        categoryTitle: "📱 3. Mobile Testing Deep Dive (iOS & Android)",
        topics: [
            {
                title: "Архітектура збірок, підписи та розповсюдження (APK/AAB, IPA, TestFlight)",
                tags: ["android", "ios", "apk", "aab", "ipa", "testflight", "firebase", "signing"],
                content: `
                    <p><strong>Android:</strong></p>
                    <ul>
                        <li><strong>APK (Android Package):</strong> готовий інсталяційний файл для встановлення на пристрій.</li>
                        <li><strong>AAB (Android App Bundle):</strong> формат публікації в Google Play, з якого Google сам генерує оптимізовані APK під конкретну архітектуру процесора (ARM64, x86) та щільність екрана (mdpi, xhdpi, xxhdpi).</li>
                        <li><strong>Keystore / Signing:</strong> кожен додаток має бути підписаний цифровим ключем. Оновлення поверх старої версії можливе ТІЛЬКИ якщо збігся підпис (Signature) та виріс <code>versionCode</code>.</li>
                    </ul>
                    <p><strong>iOS:</strong></p>
                    <ul>
                        <li><strong>IPA (iOS App Store Package):</strong> архів додатку для iOS.</li>
                        <li><strong>Provisioning Profile & Certificates:</strong> щоб поставити білд на тестовий iPhone (Ad-Hoc / Development), UDID пристрою має бути вписаний в Apple Developer Portal. Для публічних тестів використовують <strong>TestFlight</strong> (білд живе 90 днів).</li>
                    </ul>
                `
            },
            {
                title: "Чек-лист специфічних мобільних перевірок (Interrupts