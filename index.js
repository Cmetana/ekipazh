const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

// Обработчик команды /start
bot.start(ctx => {
    // Выводим кнопки на стартовом экране
    ctx.reply('Выберите пункт меню:', {
    reply_markup: {
    inline_keyboard: [
    [{text: 'Простої',callback_data: 'main'},
    {text: 'Навігація',callback_data: 'navigation'}],
    [{text: 'Статистика простоїв',callback_data: 'statistics'}]
    ]
    }});
    });

 // --------вибір дільниці простоїв
bot.action('main', ctx => {
    ctx.reply('Виберіть потрібну дільницю:', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'СТК', callback_data: 'STK' },
            { text: 'ПДГ', callback_data: 'PDG' },
            { text: 'ПВХ', callback_data: 'PVH' },
          ],
          [{ text: 'Назад ↩️', callback_data: 'back_main' }],
        ],
      },
    });
  });

  //Обробка дільниць простоїв
 
bot.action('STK', ctx => {
    ctx.reply('Виберіть обладнання:', {
    reply_markup: {
    inline_keyboard: [
    [{text: 'Лінія Робот',url: 'https://forms.gle/p8RbvXoPFX8Bqnv8A'},
    {text: 'Лінія Екструдер',url: 'https://forms.gle/sd7oy8PSUbymeCzC9'}],
    [{text: 'Lisek 1',url: 'https://forms.gle/m77EgPHRPHtUyUeD6'},
    {text: 'Lisek2',url: 'https://forms.gle/MSRrd78LyYnQvijN9'}],
    [{text: 'Назад ↩️',callback_data: 'main'}]
    ]}
    });
    });
    
    bot.action('PDG', ctx => {
    ctx.reply('Виберіть обладнання:', {
        reply_markup: {
        inline_keyboard: [
        [{text: 'Schirmer 1',url: 'https://forms.gle/febqSGg8mKdXQDr4A'},
        {text: 'Schirmer 3',url: 'https://forms.gle/t2pyJ9DzEyTvEEhy5'}],
        [{text: 'Schirmer 4',url: 'https://forms.gle/zM4TPrVBUiGrStVu5'},
        {text: 'Порізка Імпосту',url: 'https://forms.gle/Xbq6EZT16xYGG96NA'}],
        [{text: 'Назад ↩️',callback_data: 'main'}]
        ]}
        })
    })
    
    bot.action('PVH', ctx => {
        ctx.reply('Виберіть Лінію:', {
        reply_markup: {
        inline_keyboard: [
        [{text: 'Лінія 1',callback_data: 'line1'},
        {text: 'Лінія 2',callback_data: 'line2'},
        {text: 'NSTD',callback_data: 'nstd'}],
        [{text: 'Назад ↩️',callback_data: 'main'}]
        ]}
        });
        });
    
        bot.action('line1', ctx => {
            ctx.reply('Яке обладнання на Лінії 1?', {
                reply_markup: {
                inline_keyboard: [
                        [{text: 'Зварка',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'},
                        {text: 'Зачистка',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'}],
                        [{text: 'Імпост',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'},
                        {text: 'Фурнітура',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'}],
                        [{text: 'Обмотка',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'},
                        {text: 'Штапікоріз',url: 'https://forms.gle/u53ydSqDK2LPYDvN8'}],
                        [{text: 'Не та лінія 🤦‍♂️',callback_data: 'PVH'}]
                    ]}
                })
            })
    
            bot.action('nstd', ctx => {
                ctx.reply('Яке обладнання на Нестандарті ?', {
                    reply_markup: {
                    inline_keyboard: [
                        [{text: 'Зварка 1гол',url: 'https://forms.gle/ceRXmNKZ9Moxni137'},
                        {text: 'Звака 2гол',url: 'https://forms.gle/ceRXmNKZ9Moxni137'},
                        {text: 'Зварка 3гол',url: 'https://forms.gle/ceRXmNKZ9Moxni137'}],
                        [{text: 'Зачистка',url: 'https://forms.gle/ceRXmNKZ9Moxni137'},
                        {text: 'Імпост',url: 'https://forms.gle/ceRXmNKZ9Moxni137'},
                        {text: 'Фурнітура',url: 'https://forms.gle/ceRXmNKZ9Moxni137'}],
                        [{text: 'Обмотка',url: 'https://forms.gle/ceRXmNKZ9Moxni137'},
                        {text: 'Штапікоріз',url: 'https://forms.gle/ceRXmNKZ9Moxni137'}],
                        [{text: 'Не та лінія 🤦‍♂️',callback_data: 'PVH'}]
                    ]}
                    })
                })
    
                bot.action('line2', ctx => {
                    ctx.reply('Яке обладнання на Лінії 2?', {
                        reply_markup: {
                        inline_keyboard: [
                            [{text: 'Зварка',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'},
                            {text: 'Зачистка',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'}],
                            [{text: 'Імпост',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'},
                            {text: 'Фурнітура',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'}],
                            [{text: 'Обмотка',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'},
                            {text: 'Штапікоріз',url: 'https://forms.gle/87GTRA78nYWnXeCJ9'}],
                            [{text: 'Не та лінія 🤦‍♂️',callback_data: 'PVH'}]
                        ]}
                        })
                    })

                    

// Обробка кнопок статистики

bot.action('statistics', ctx => {
    ctx.reply('Виберіть дільницю', {
        reply_markup: {
        inline_keyboard: [
            [{text: 'СТК',callback_data: 'stk_stat'},
            {text: 'ПДГ',callback_data: 'pdg_stat'},
            {text: 'ПВХ',callback_data: 'pvh_stat'}],
        [{text: 'Назад ↩️',callback_data: 'main'}]
        ]}
        })
    })
    //Обробка кнопок дільниць статистики

    bot.action('stk_stat', ctx => {
        ctx.reply('Які данні цікавлять?:', {
            reply_markup: {
            inline_keyboard: [
                [{text: 'Простої збірки',url: 'https://google.com/stat_zborka'},
                {text: 'Простій порізки',url: 'https://google.com/stat_porizka'}],
            [{text: 'Назад ↩️',callback_data: 'statistics'}]
            ]}
            })
        })

        bot.action('pdg_stat', ctx => {
            ctx.reply('Які данні цікавлять?:', {
                reply_markup: {
                inline_keyboard: [
                    [{text: 'Простій ширмерів',url: 'https://google.com/stat_schirmer'},
                    {text: 'Простій імпостів',url: 'https://google.com/stat_impost'}],
                [{text: 'Назад ↩️',callback_data: 'statistics'}]
                ]}
                })
            })

            bot.action('pvh_stat', ctx => {
                ctx.reply('Які данні цікавлять?:', {
                    reply_markup: {
                    inline_keyboard: [
                        [{text: 'Простій ліній',url: 'https://google.com/stat_pvh_line'},
                        {text: 'Статистика випуску',url: 'https://google.com/stat_vipusk'}],[{text: 'Рекламації',url: 'https://google.com/stat_reklamacii'}],
                    [{text: 'Назад ↩️',callback_data: 'statistics'}]
                    ]}
                    })
                })
// Обробка головне меню

  bot.action('back_main', ctx => {
    ctx.reply('Выберите пункт меню:', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Простої', callback_data: 'main' },
            { text: 'Навігація', callback_data: 'navigation' },
          ],
          [{ text: 'Статистика простоїв', callback_data: 'statistics' }],
        ],
      },
    });
  });


// Обработчик текстовых сообщений
bot.on('text', ctx => {
    ctx.reply('Я не розумію що Ви маєте на увазі. Спробуйте обрати пункт меню.');
    });
    
    bot.launch();
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
