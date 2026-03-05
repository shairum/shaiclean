<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="globals.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="style2.css" />
    <link rel="stylesheet" href="responsive.css" />
    <link rel="stylesheet" href="form-styles.css" />
    <title>SHAIRUM</title>
  </head>
  <body>
    <div class="PC">
      <div class="navbar">
        <a href="" class="logo-link">SHAIRUM</a>
        <div class="nav-links">
          <a href="catalog.html" class="nav-link">Каталог услуг</a>
          <a href="about.html" class="nav-link">О нас</a>
          <a href="#contacts" class="nav-link">Контакты</a>
          <a href="#contact-form" class="nav-link">Оплата и доставка</a>
        </div>
        <img class="nav-line" src="imgLine2.svg" />
      </div>

      <div class="frame">
        <a href="catalog/" class="div">
          <div class="rectangle"></div>
          <div class="text-wrapper">Перейти в каталог</div>
        </a>
        <div class="text-wrapper-2">Клининговые услуги</div>
        <p class="p">Предоставляем услуги качественной и безопасной уборки</p>
        <div class="frame-2">
          <div class="SHA-CLEAN">SHAIRUM</div>
        </div>
        <img class="line" src="imgLine3.svg" />
        <img class="img" src="img1.svg" />
      </div>
      <div class="frame-3">
        <div class="div-wrapper"><div class="text-wrapper-3">Что такое клининг?</div></div>
        <img class="line" src="imgLine3.svg" />
        <p class="text-wrapper-4">
          Клининг — это комплексная система организации и выполнения работ по поддержанию и восстановлению чистоты в
          помещениях и на прилегающих территориях, основанная на применении профессиональных технологий,
          специализированного оборудования, эффективных моющих средств и строгом соблюдении утвержденных стандартов
          качества.
        </p>
        <img class="pngwing-com-2" src="img2.svg" />
      </div>
      <div class="frame-4">
        <div class="frame-5"><div class="text-wrapper-5">Польза от профессионального клининга</div></div>
        <img class="line" src="imgLine3.svg" />
        <p class="text-wrapper-6">Экономия вашего времени и сил</p>
        <div class="text-wrapper-7">Высокое, гарантированное качество чистоты</div>
        <div class="text-wrapper-8">Здоровье и безопасность</div>
        <img class="frame-6" src="img3.svg" />
        <img class="frame-7" src="img4.svg" />
        <img class="frame-8" src="img5.svg" />
      </div>
      <div class="frame-9">
        <div class="frame-5"><p class="text-wrapper-5">Услуги и стоимость профессионального клининга</p></div>
        <img class="line" src="imgLine3.svg" />
        <div class="frame-10">
          <div class="element">ОТ <br />8000 <br />₽</div>
          <p class="text-wrapper-13">Регулярные (ежедневные или еженедельные) работы</p>
          <div class="rectangle-2"></div>
        </div>
        <div class="frame-11">
          <div class="element">ОТ<br />15000 <br />₽</div>
          <p class="text-wrapper-13">Периодические (генеральные или комплексные) работы</p>
          <div class="rectangle-2"></div>
        </div>
        <div class="frame-12">
          <div class="element">ОТ<br />300<br />₽</div>
          <div class="text-wrapper-13">Специализированные работы</div>
          <div class="rectangle-2"></div>
        </div>
      </div>
      <div class="frame-13">
        <div class="frame-14"><p class="text-wrapper-5">Мы открываем двери в мир чистоты и порядка</p></div>
        <p class="text-wrapper-14">
          Представьте: вы приходите домой, а там идеально чисто, пахнет свежестью, и вам не нужно ничего делать. Это не
          мечта, а реальность с нашим клинингом. Отдохните по-настоящему. Забронируйте уборку и посвятите вечер себе!
        </p>
        <img class="line" src="imgLine3.svg" />
        <a href="#contact-form" class="frame-15">
          <div class="rectangle"></div>
          <div class="text-wrapper">Оставить заявку</div>
        </a>
        <div class="text-wrapper-15">Клининговые услуги</div>
        <img class="img-2" src="img1.svg" />
      </div>
      <div class="frame-16" id="contact-form">
        <div class="frame-17">
          <p class="text-wrapper-16">Заполните поля формы, и мы свяжемся с вами в ближайшее время</p>
        </div>
        <img class="line" src="imgLine3.svg" />

        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <input type="text" class="form-input" id="name" name="name" placeholder="Ваше имя" required>
            <label for="name" class="form-label">Имя</label>
            <div class="form-error" id="name-error"></div>
          </div>

          <div class="form-group">
            <input type="tel" class="form-input" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required>
            <label for="phone" class="form-label">Телефон</label>
            <div class="form-error" id="phone-error"></div>
          </div>

          <div class="form-group">
            <textarea class="form-textarea" id="message" name="message" placeholder="Сообщение..." rows="4" required></textarea>
            <label for="message" class="form-label">Сообщение</label>
            <div class="form-error" id="message-error"></div>
          </div>

          <button type="submit" class="form-submit">
            <span class="submit-text">Оставить заявку</span>
          </button>

          <p class="form-notice">
            нажимая на кнопку, вы даете согласие на обработку своих персональных данных<br />согласно с политикой конфиденциальности
          </p>
        </form>

        <div class="SHA-CLEAN-3">SHAIRUM</div>
      </div>
      <div class="frame-21" id="contacts">
        <div class="text-wrapper-23">Контакты</div>
        <div class="frame-22">
          <div class="frame-23">
            <img class="mail" src="imgmail.svg" />
            <div class="text-wrapper-24">romanshayapov1@gmail.com</div>
          </div>
          <div class="frame-24">
            <img class="call-end" src="imgcall.svg" />
            <div class="text-wrapper-24">+7 (937) 323-49-71</div>
          </div>
          <div class="frame-25">
            <div class="text-wrapper-25">@SHA1RUM</div>
            <img class="telegram-black" src="imgTelegram.svg" />
          </div>
          <div class="frame-26">
            <div class="text-wrapper-25">https://vk.com/shairum</div>
            <img class="VK-black" src="imgVK.svg" />
          </div>
          <div class="frame-27">
            <img class="location-on" src="imglocation.svg" />
            <div class="text-wrapper-26">Казань, Сибирский тракт 19/6</div>
          </div>
        </div>
        <div class="SHA-CLEAN-4">SHAIRUM</div>
      </div>
      <div class="frame-28" id="about">
        <div class="frame-5"><p class="text-wrapper-5">Кому могут пригодится услуги клининга?</p></div>
        <img class="line" src="imgLine3.svg" />
        <div class="frame-29">
          <div class="text-wrapper-27">Занятые и работающие люди</div>
          <p class="text-wrapper-28">
            Жёсткий график, ненормированный рабочий день, командировки и усталость после работы. Свободное время они
            предпочитают тратить на отдых, хобби или семью, а не на изматывающую уборку.
          </p>
          <div class="rectangle-3"></div>
        </div>
        <div class="frame-30">
          <div class="text-wrapper-27">Семьи с маленькими детьми</div>
          <p class="text-wrapper-28">
            Родители, особенно с малышами, физически не успевают за поддержанием идеального порядка. На первом месте —
            безопасность и здоровье ребенка, что требует постоянной и часто глубокой уборки.
          </p>
          <div class="rectangle-3"></div>
        </div>
        <div class="frame-31">
          <div class="text-wrapper-29">Люди, ценящие свой комфорт</div>
          <p class="text-wrapper-28">
            Физическое облегчение, безопасность и уверенность в том, что дом содержится в идеальном состоянии без личных
            усилий и риска для здоровья.
          </p>
          <div class="rectangle-3"></div>
        </div>
        <div class="frame-32">
          <div class="text-wrapper-27">Особые жизненные ситуации</div>
          <p class="text-wrapper-28">
            Экспертное решение разовых, но трудоемких задач, с которыми сложно справиться самостоятельно в сжатые
            сроки.<br />(После ремонта, вечеринки, переезда)
          </p>
          <div class="rectangle-3"></div>
        </div>
      </div>
      <div class="frame-33">
        <div class="frame-34"><div class="text-wrapper-5">Часто задаваемые вопросы?</div></div>
        <div class="frame-35">
          <p class="text-wrapper-30">Чем клининг отличается от обычной уборки?</p>
          <p class="text-wrapper-31">
            Обычная уборка — это поверхностное наведение порядка (помыть пол, протереть пыль). Клининг — это глубокая и
            системная уборка с профессиональной техникой и химией по четкому плану для достижения гигиенической чистоты.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <div class="frame-36">
          <div class="text-wrapper-30">Это не слишком дорого?</div>
          <p class="text-wrapper-31">
            Стоимость зависит от объема и типа уборки. Часто это вложение не в саму уборку, а в ваше свободное время,
            силы и комфорт. Для многих цена оказывается ниже ожидаемой, особенно при регулярном заказе.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <div class="frame-37">
          <p class="text-wrapper-30">Я могу доверять клинерам в своем доме?</p>
          <p class="text-wrapper-31">
            Да, если вы обратились в проверенную компанию. Надежные клининговые службы тщательно проверяют сотрудников,
            заключают официальный договор с прописанной материальной ответственностью, а работают всегда в составе
            команды под контролем менеджера.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <div class="frame-37">
          <p class="text-wrapper-30">Нужно ли мне быть дома во время уборки и готовить чистящие средства?</p>
          <p class="text-wrapper-31">
            Нет, это не обязательно. Профессиональные клинеры приезжают со своим полным комплектом оборудования и
            средств. Вы можете передать им ключи или быть в другой комнате, не отвлекаясь на работу.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <div class="frame-37">
          <p class="text-wrapper-30">Какие средства вы используете? Они безопасны для детей и животных?</p>
          <p class="text-wrapper-31">
            Да, мы используем профессиональную и безопасную химию (часто с пометкой &#34;eco&#34; или &#34;bio&#34;).
            При заказе вы всегда можете уточнить состав средств. При необходимости мы используем гипоаллергенные
            составы.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <div class="frame-37">
          <div class="text-wrapper-30">Как рассчитывается стоимость уборки?</div>
          <p class="text-wrapper-31">
            Цена формируется исходя из трех главных факторов: типа уборки (поддерживающая, генеральная, после ремонта),
            площади квартиры и степени ее загровненности. Часто есть фиксированные тарифы &#34;под ключ&#34;.
          </p>
          <div class="rectangle-4"></div>
        </div>
        <img class="line-7" src="imgLine3.svg" />
      </div>
      <div class="frame-38">
        <div class="frame-39"><p class="text-wrapper-5">Реальные отзывы о нашей компании</p></div>
        <div class="frame-40">
          <div class="text-wrapper-30">Мария, молодая мама</div>
          <p class="div-3">
            После рождения ребенка на уборку совсем не оставалось сил и времени. Решилась попробовать клининг и ни
            разу не пожалела! Ребята не просто вытерли пыль — они отмыли до блеска смеситель в ванной, вычистили
            духовку и пропылесосили даже под диваном. В квартире не просто чисто, а пахнет свежестью. Теперь заказываю
            уборку раз в две недели и наконец-то могу спокойно гулять с малышом, а не мыть полы. Спасибо за мое
            свободное время и нервы!
          </p>
          <div class="rectangle-5"></div>
        </div>
        <div class="frame-40">
          <div class="text-wrapper-30">Семья Ивановых, после ремонта</div>
          <p class="div-3">
            Сделали долгожданный ремонт в коридоре и кухне. Восторг от нового сразу омрачился ужасом от количества
            строительной пыли — она была везде: в шкафах, на балконе, даже в дальних комнатах. Самостоятельно
            справиться было нереально. Обратились в эту компанию для постремонтной уборки. Результат превзошел все
            ожидания! Они убрали следы шпаклевки с плитки, отмыли окна от брызг краски, и главное — побороли эту
            вездесущую пыль. Сдали работу точно в срок. Очень рекомендую для таких сложных задач!
          </p>
          <div class="rectangle-5"></div>
        </div>
        <div class="frame-41">
          <div class="text-wrapper-30">Антон, менеджер</div>
          <p class="div-4">
            Как человек, который много работает, я ценю свое свободное время. Долго не решался доверить кому-то
            уборку в своей квартире, но постоянный стресс и усталость взяли верх. С самого начала порадовала четкая
            система: менеджер подробно всё объяснил, прислали понятный прайс, а бригада приехала точно в назначенное
            время. Клинеры работали быстро, аккуратно и не отвлекали меня лишними вопросами. После их работы я
            наконец-то могу прийти домой и по-настоящему отдохнуть в чистой и уютной атмосфере. Теперь пользуюсь
            услугами на постоянной основе. Сервис, которому можно доверять!
          </p>
          <div class="rectangle-6"></div>
        </div>
        <img class="line-8" src="imgLine3.svg" />
      </div>
      <div class="frame-42">
        <div class="frame-5"><p class="text-wrapper-5">Чем наш клининг отличается от других?</p></div>
        <img class="line" src="imgLine3.svg" />
        <div class="frame-43">
          <p class="text-wrapper-34">Не просто <br />сотрудники,<br />а ваши личные <br />эксперты по чистоте</p>
          <p class="text-wrapper-35">Мы нанимаем не просто уборщиков, а клинеров-профессионалов</p>
          <div class="frame-44">
            <img class="star" src="imgstar.svg" />
          </div>
          <div class="ellipse-2"></div>
        </div>
        <div class="frame-45">
          <p class="text-wrapper-34">
            Не просто <br />техника, <br />а профессиональный <br />арсенал для <br />безупречного результата
          </p>
          <p class="text-wrapper-35">Наш рабочий инструмент — это мощное профессиональное оборудование</p>
          <div class="frame-46">
            <img class="star" src="imgstar.svg" />
            <img class="star-2" src="imgstar.svg" />
          </div>
          <div class="ellipse-2"></div>
        </div>
        <div class="frame-47">
          <p class="text-wrapper-34">Не просто <br />договор, <br />а прозрачность <br />и ваше спокойствие</p>
          <p class="text-wrapper-35">Мы работаем по детализированному чек-листу, с которым вы сверяете результат</p>
          <div class="frame-48">
            <img class="star" src="imgstar.svg" />
            <img class="star-2" src="imgstar.svg" />
            <img class="star-3" src="imgstar.svg" />
          </div>
          <div class="ellipse-2"></div>
        </div>
        <div class="frame-49">
          <p class="text-wrapper-34">
            Не просто <br />уборка, <br />а индивидуальный <br />подход <br />и забота о деталях
          </p>
          <p class="text-wrapper-35">Мы не работаем по шаблону</p>
          <div class="frame-50">
            <img class="star" src="imgstar.svg" />
            <img class="star-2" src="imgstar.svg" />
            <img class="star-3" src="imgstar.svg" />
            <img class="star-4" src="imgstar.svg" />
          </div>
          <div class="ellipse-2"></div>
        </div>
      </div>
    </div>

    <link rel="stylesheet" href="form-styles.css" />

    <script src="mobile-nav.js"></script>
    <script src="form-validation.js"></script>
  </body>
</html>
