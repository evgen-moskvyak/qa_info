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
                title: "Чек-лист специфічних мобільних перевірок (Interrupts, Lifecycle, Deep Links)",
                tags: ["interrupts", "deep links", "push", "offline", "lifecycle", "permissions"],
                content: `
                    <ul>
                        <li><strong>Життєвий цикл (App Lifecycle):</strong> згортання у фон (Background), повернення (Foreground), вивантаження з пам'яті системою (Killed state), режим енергозбереження (Low Power Mode).</li>
                        <li><strong>Дозволи (Permissions):</strong> надання доступу до камери, геолокації, контактів, сповіщень. Обов'язково тестуємо кейс: <em>"Відмовити" -> "Не питати знову" -> перевірка, чи додаток коректно веде користувача в налаштування телефону</em>.</li>
                        <li><strong>Deep Links та Universal Links:</strong> відкриття конкретного екрана додатку за посиланням (з браузера, пошти, пуша). Перевіряємо три стани: додаток відкритий, додаток у фоні, додаток закритий (Cold Start).</li>
                        <li><strong>Push-сповіщення:</strong> доставка у фоні, на заблокованому екрані, при вимкненому інтернеті (чи прийдуть після увімкнення), перехід за кліком, коректність бейджа (лічильника непрочитаних) на іконці.</li>
                        <li><strong>Міграція даних при оновленні:</strong> встановлюємо продакшн-версію, авторизуємося, накопичуємо кеш/дані, накатуємо нову версію поверх — сесія та локальні дані не повинні зламатися.</li>
                    </ul>
                `
            },
            {
                title: "ADB команди та збір логів (Android & iOS)",
                tags: ["adb", "logcat", "xcode", "crash", "anr", "logs"],
                content: `
                    <p><strong>Корисні команди ADB (Android Debug Bridge):</strong></p>
                    <ul>
                        <li><code>adb devices</code> — перевірити підключені пристрої.</li>
                        <li><code>adb install -r app.apk</code> — встановити/перевстановити APK зі збереженням даних.</li>
                        <li><code>adb logcat -v time > log.txt</code> — записати логи з таймстемпами у файл.</li>
                        <li><code>adb logcat *:E</code> — показати тільки помилки (Error) та фатальні збої.</li>
                        <li><code>adb shell pm clear com.example.app</code> — повністю очистити дані та кеш додатку (як після свіжого встановлення).</li>
                        <li><code>adb shell am start -W -a android.intent.action.VIEW -d "myapp://profile/123"</code> — протестувати Deep Link через термінал.</li>
                    </ul>
                    <p><strong>Типові критичні проблеми Mobile:</strong> <strong>Crash</strong> (аварійне закриття через необроблений Exception) та <strong>ANR (Application Not Responding)</strong> на Android — зависання головного UI-потоку більш ніж на 5 секунд.</p>
                `
            }
        ]
    },

    // ==========================================
    // РОЗДІЛ 4: SQL, DEBUG & SECURITY
    // ==========================================
    {
        category: "db-sec",
        categoryTitle: "🔍 4. SQL, Проксі-дебаг (Charles) та Безпека",
        topics: [
            {
                title: "SQL для QA: JOIN, GROUP BY, Індекси та Транзакції (ACID)",
                tags: ["sql", "join", "group by", "having", "acid", "індекси", "бази даних"],
                content: `
                    <p><strong>Різниця між JOIN:</strong></p>
                    <ul>
                        <li><code>INNER JOIN</code> — повертає тільки рядки, де є збіг в обох таблицях.</li>
                        <li><code>LEFT JOIN</code> — повертає всі рядки з лівої таблиці та відповідні з правої (якщо збігу немає — буде <code>NULL</code>).</li>
                    </ul>
                    <p><strong>Приклад запиту з агрегацією та фільтрацією:</strong></p>
                    <pre><code>SELECT u.email, COUNT(o.id) AS total_orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.email
HAVING COUNT(o.id) > 5
ORDER BY total_orders DESC;</code></pre>
                    <p><em>Важливо:</em> <code>WHERE</code> фільтрує рядки ДО групування, а <code>HAVING</code> — групи ПІСЛЯ агрегації.</p>
                    <p><strong>ACID (Вимоги до транзакцій):</strong> Atomicity (Атомарність — все або нічого), Consistency (Узгодженість), Isolation (Ізольованість паралельних транзакцій), Durability (Стійкість збережених даних).</p>
                `
            },
            {
                title: "Charles Proxy / Proxyman: Підміна трафіку та дебаг",
                tags: ["charles", "proxyman", "ssl pinning", "map local", "breakpoints", "throttling"],
                content: `
                    <p>Сніфер трафіку дозволяє бачити весь HTTP/HTTPS обмін між мобільним пристроєм/браузером та бекендом:</p>
                    <ul>
                        <li><strong>Breakpoints (Точки зупину):</strong> перехоплення запиту або відповіді на льоту та ручна зміна параметрів (наприклад, змінити ціну товару з 1000 на 1 перед відправкою на сервер або підмінити статус відповіді на <code>500</code>).</li>
                        <li><strong>Map Local:</strong> підміна відповіді сервера локальним JSON-файлом з ПК. Дозволяє тестувати UI (довгі тексти, порожні списки, нові статуси), навіть якщо бекенд ще не готовий.</li>
                        <li><strong>Map Remote:</strong> перенаправлення запитів із прод-сервера на тестовий стенд або інший порт.</li>
                        <li><strong>Throttling:</strong> симуляція повільного з'єднання (3G, втрата пакетів) для перевірки таймаутів та спінерів завантаження.</li>
                        <li><strong>SSL Pinning:</strong> захист додатку, коли він довіряє лише конкретному сертифікату сервера і блокує сертифікат Charles. Для тестування потрібна debug-збірка з вимкненим пінінгом або патч через Frida/Objection.</li>
                    </ul>
                `
            },
            {
                title: "OWASP Top 10: Базова перевірка безпеки руками",
                tags: ["security", "owasp", "xss", "sql injection", "idor", "csrf"],
                content: `
                    <ul>
                        <li><strong>Broken Access Control / IDOR (Insecure Direct Object References):</strong> зміна ID об'єкта в URL або JSON-запиті (наприклад, <code>/api/orders/105</code> на <code>/api/orders/106</code>) під акаунтом іншого користувача. Якщо чужі дані відкрилися — це критична вразливість.</li>
                        <li><strong>XSS (Cross-Site Scripting):</strong> впровадження шкідливого JS-коду в поля вводу (наприклад, <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>), який виконається у браузері іншого користувача (Stored XSS).</li>
                        <li><strong>SQL Injection:</strong> вставка SQL-коду в параметри запиту (наприклад, <code>' OR 1=1 --</code>) для обходу авторизації або витоку БД.</li>
                        <li><strong>Sensitive Data Exposure:</strong> перевірка, чи не передаються паролі/токени у відкритому вигляді в URL (GET-параметрах), чи не пишуться вони у консольні логи браузера або мобільного пристрою.</li>
                    </ul>
                `
            }
        ]
    },

    // ==========================================
    // РОЗДІЛ 5: TEST MANAGEMENT & TEAM LEAD
    // ==========================================
    {
        category: "lead",
        categoryTitle: "👑 5. Test Management, Метрики та Team Lead Core",
        topics: [
            {
                title: "Test Strategy vs Test Plan (Архітектура якості)",
                tags: ["test plan", "test strategy", "entry criteria", "exit criteria", "документація"],
                content: `
                    <p><strong>Test Strategy (Тестова стратегія):</strong> високорівневий статичний документ на рівні компанії або продукту. Описує загальні підходи: які рівні тестування використовуємо, піраміду автоматизації, середовища, політику роботи з дефектами, стандарти якості.</p>
                    <p><strong>Test Plan (Тест-план):</strong> динамічний документ під конкретний реліз, епік або проєкт. Обов'язкові секції:</p>
                    <ul>
                        <li><strong>Scope (In-Scope / Out-of-Scope):</strong> що саме тестуємо, а що свідомо виключаємо.</li>
                        <li><strong>Entry Criteria (Критерії входу):</strong> коли QA починає роботу (готовий білд, пройдені unit-тести, затверджені вимоги, доступні стенди).</li>
                        <li><strong>Exit Criteria (Критерії виходу / Definition of Done):</strong> умови завершення тестування (100% критичних тестів пройдено, 0 Blocker/Critical багів, покриття вимог перевірено).</li>
                        <li><strong>Risks & Mitigation:</strong> технічні та організаційні ризики і план дій на випадок їх настання.</li>
                    </ul>
                `
            },
            {
                title: "Ключові метрики якості (KPI та аналітика для ліда)",
                tags: ["метрики", "dre", "escape rate", "defect density", "coverage", "flaky"],
                content: `
                    <ul>
                        <li><strong>DRE (Defect Removal Efficiency):</strong> ефективність виявлення багів до релізу.<br>
                        <em>Формула:</em> <code>(Баги знайдені QA / (Баги QA + Баги на Prod)) × 100%</code>. Хороший показник: > 90–95%.</li>
                        <li><strong>Defect Escape Rate (Витік дефектів):</strong> відсоток багів, які пропустили на продакшен. Якщо росте — сигнал переглянути регресійний сьют або покриття вимог.</li>
                        <li><strong>Defect Density (Щільність дефектів):</strong> кількість багів на одиницю розміру модуля/фічі. Допомагає виявити найбільш нестабільні ділянки коду, які потребують рефакторингу.</li>
                        <li><strong>Bug Reopen Rate:</strong> відсоток перевідкритих багів. Високий показник свідчить про погану комунікацію, нечіткі кроки в баг-репортах або поспішні фікси розробників.</li>
                        <li><strong>Test Execution & Pass Rate:</strong> швидкість проходження тест-кейсів та співвідношення успішних/впалих тестів.</li>
                    </ul>
                `
            },
            {
                title: "Release Management: Feature Flags, Staged Rollout та Hotfix",
                tags: ["release", "feature flags", "staged rollout", "hotfix", "rollback", "а/б"],
                content: `
                    <ul>
                        <li><strong>Feature Flags (Тогли):</strong> можливість вмикати/вимикати функціонал на продакшені без перевикладки коду. QA має тестувати обидва стани: <code>Flag ON</code> та <code>Flag OFF</code>.</li>
                        <li><strong>Staged Rollout (Поетапне розкатування):</strong> у мобільних сторах (Google Play / App Store) реліз викладається спочатку на 1% -> 5% -> 20% -> 50% -> 100% користувачів. Це дозволяє відстежити краші у Firebase Crashlytics / Sentry і зупинити реліз до того, як постраждає вся аудиторія.</li>
                        <li><strong>Backward Compatibility (Зворотна сумісність):</strong> критично для Mobile! Користувачі оновлюють додаток тижнями, тому новий бекенд зобов'язаний підтримувати старі версії мобільних клієнтів (Forced Update застосовується лише у крайніх випадках).</li>
                        <li><strong>Post-Release & Hotfix:</strong> моніторинг логів та краш-рейту (Crash-Free Users має бути > 99.5%) у перші години після релізу.</li>
                    </ul>
                `
            },
            {
                title: "People Management: 1-on-1, Skill Matrix, Онбординг та Конфлікти",
                tags: ["management", "1-on-1", "skill matrix", "pdp", "найм", "конфлікти"],
                content: `
                    <ul>
                        <li><strong>Skill Matrix (Матриця компетенцій):</strong> таблиця навичок команди (SQL, API, Mobile Debug, Test Design, Communication) з оцінкою рівня кожного спеціаліста (Junior / Middle / Senior). Дозволяє бачити "вузькі місця" (Bus Factor) та планувати навчання.</li>
                        <li><strong>1-on-1 та PDP (Personal Development Plan):</strong> регулярні зустрічі раз на 2–4 тижні для зворотного зв'язку, виявлення вигорання та постановки цілей розвитку на пів року.</li>
                        <li><strong>Вирішення конфліктів (QA vs Dev / PM):</strong> лід ніколи не переходить на особистості ("ти погано написав код"). Уся аргументація будується через <strong>факти, логи та бізнес-ризики</strong> (наприклад: <em>"Якщо ми випустимо це зараз, 15% користувачів на Android не зможуть оформити оплату"</em>).</li>
                        <li><strong>Автоматизація та ROI:</strong> лід вирішує, що віддавати в автоматизацію (стабільний регресійний функціонал, API-тести, критичні E2E флоу), а що лишати в мануальному тестуванні (нові нестабільні фічі, складний UI/UX, разові перевірки).</li>
                    </ul>
                `
            }
        ]
    },

    // ==========================================
    // РОЗДІЛ 6: ФУНДАМЕНТАЛЬНА ТЕОРІЯ ТА МЕТОДОЛОГІЇ (DOU)
    // ==========================================
    {
        category: "core",
        categoryTitle: "📖 6. Фундаментальна теорія та методології (DOU Archive)",
        topics: [
            {
                title: "Визначення тестування, якість, верифікація та валідація (DOU)",
                tags: ["теорія", "верифікація", "валідація", "якість", "stlc"],
                content: `
                    <p><strong>Тестування програмного забезпечення</strong> — перевірка відповідності між реальною та очікуваною поведінкою програми, що здійснюється на скінченній множині тестів, вибраних у певний спосіб[cite: 1]. У ширшому розумінні — це методика контролю якості, що включає планування (Test Management), проєктування (Test Design), виконання (Test Execution) та аналіз результатів[cite: 1].</p>
                    <p><strong>Якість ПЗ (Software Quality)</strong> — сукупність характеристик, що стосуються здатності задовольняти встановлені та передбачувані потреби[cite: 1].</p>
                    <p><strong>Верифікація (Verification) vs Валідація (Validation):</strong></p>
                    <ul>
                        <li><strong>Верифікація:</strong> процес оцінки системи для перевірки, чи відповідають результати поточного етапу умовам, сформованим на початку цього етапу (<em>"Is the system correct to specification?"</em>)[cite: 1].</li>
                        <li><strong>Валідація:</strong> процес визначення відповідності розроблюваного ПЗ реальним очікуванням і потребам користувача (<em>"Is this the right specification?"</em>)[cite: 1].</li>
                    </ul>
                    <p><strong>Мета тестування:</strong>[cite: 1]</p>
                    <ul>
                        <li>Збільшити ймовірність того, що застосунок працюватиме правильно в будь-яких умовах[cite: 1].</li>
                        <li>Перевірити відповідність описаним вимогам[cite: 1].</li>
                        <li>Надати актуальну інформацію про стан продукту на даний момент[cite: 1].</li>
                    </ul>
                `
            },
            {
                title: "Етапи тестування та структура Test Plan за IEEE 829 (DOU)",
                tags: ["test plan", "етапи", "ieee 829", "тест-план"],
                content: `
                    <p><strong>Основні етапи тестування:</strong>[cite: 1]</p>
                    <ol>
                        <li>Аналіз продукту та робота з вимогами[cite: 1].</li>
                        <li>Розробка стратегії тестування та планування[cite: 1].</li>
                        <li>Створення тестової документації[cite: 1].</li>
                        <li>Тестування прототипу та основне тестування[cite: 1].</li>
                        <li>Стабілізація та експлуатація[cite: 1].</li>
                    </ol>
                    <p><strong>Test Plan (Тест-план)</strong> — документ, що описує обсяг робіт, стратегію, графік, критерії початку/закінчення, ресурси та ризики[cite: 1]. Відповідає на запитання: <em>Що, чим, як і коли тестувати?</em>[cite: 1]</p>
                    <p><strong>Основні пункти згідно з IEEE 829:</strong> ідентифікатор плану, вступ, об'єкти тестування, функції, що тестуються / не тестуються, підхід, критерії успіху/невдачі (Pass/Fail), критерії призупинення та відновлення, deliverables (артефакти), завдання, середовище, відповідальність, розклад та ризики[cite: 1].</p>
                `
            },
            {
                title: "Методології розробки ПЗ (Waterfall, Iterative, Spiral, Agile & Scrum) (DOU)",
                tags: ["agile", "scrum", "waterfall", "методології", "спринт", "product owner"],
                content: `
                    <p><strong>Основні моделі розробки:</strong></p>
                    <ul>
                        <li><strong>Waterfall (Каскадна):</strong> послідовне проходження фаз (аналіз -> дизайн -> код -> тест -> реліз). Підходить для великих проєктів із чіткими незмінними вимогами[cite: 2].</li>
                        <li><strong>Iterative / Incremental (Ітеративна):</strong> паралельне виконання завдань з постійним аналізом і коригуванням[cite: 2].</li>
                        <li><strong>Spiral (Спіральна):</strong> цикл на кожному етапі (plan-do-check-act) для проєктів із ризиками та не до кінця сформованою візією[cite: 2].</li>
                        <li><strong>Agile:</strong> гнучкий підхід, де швидке реагування на зміни важливіше за жорсткий план[cite: 2].</li>
                    </ul>
                    <p><strong>SCRUM — ключові поняття:</strong></p>
                    <ul>
                        <li><strong>Product Owner (Власник продукту):</strong> представляє інтереси замовника, формує та пріоритизує Product Backlog[cite: 2].</li>
                        <li><strong>Scrum Master:</strong> фахівець, який стежить за дотриманням практик Scrum та усуває перешкоди для команди[cite: 2].</li>
                        <li><strong>Sprint (Спринт):</strong> часовий інтервал (2–4 тижні), протягом якого створюється готова інкрементна частина продукту[cite: 2].</li>
                        <li><strong>Backlog (Беклог):</strong> Product Backlog (повний список завдань продукту) та Sprint Backlog (завдання на найближчий спринт)[cite: 2].</li>
                        <li><strong>Щоденний Scrum (Daily):</strong> 15-хвилинна синхронізація команди на початку дня[cite: 2].</li>
                    </ul>
                `
            }
        ]
    }

    /* 
    ====================================================================
    ШАБЛОН ДЛЯ ДОДАВАННЯ НОВОГО РОЗДІЛУ АБО ТЕМИ (скопіюй і встав вище):
    ====================================================================
    ,
    {
        category: "custom",
        categoryTitle: "🚀 7. Мій новий розділ",
        topics: [
            {
                title: "Назва нової гармошки",
                tags: ["тег1", "тег2", "ключове слово"],
                content: `
                    <p>Тут пишеш основний текст абзацу.</p>
                    <ul>
                        <li><strong>Пункт списку 1:</strong> опис.</li>
                        <li><strong>Пункт списку 2:</strong> опис з <code>кодом</code>.</li>
                    </ul>
                `
            }
        ]
    }
    */
];