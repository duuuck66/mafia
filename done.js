var __evq, __dqs, my_gender, hdr_offset_x, my_slb, __store_sort, __rank84_xlimit, soundManager, __team_by_person, _WARN, RPX_event_done, RPX_data_arr, my_nick, pla_data, my_tals, t_persons, my_play_c, my_league, _MBK, _WND_proc, my_id, $, _GM_action, gam_state, _DLG, _CHT_action, PAGE_goto, __ach, gam_data, my_clan, __store;

const storages_prop_checkbox = ['room_money', 'use_extra', 'taro_select', 'getAuk', 'isUseShadow', 'isUseBlackLabel',
    'getAukDosr', 'getAukMoney', 'isEventPres', 'autobugs', 'autotaro', 'isCollectAll',
    'isPlayDog', 'autoExit', 'answerEraser', 'vk_id_checkbox', 'eventTask',
    'isEventMask', 'greenAnswer', 'isEventTaro', 'isTaro', 'akaEvent', 'isUseAka', 'autosay',
    'isUseTable', 'getCompleteEventTask', 'auto_power', 'isPlayShoot', 'exitTimeout', 'emptySlotsForEgg', 'isUsePsih', 'task', 'isUseBuroctrat', 'isUseIspi',
    'isUseDetector', 'autostart', 'isOptimSound', 'isOptimExtra', 'isOptimAnim', 'isOptimSmiles', 'isOptimChat', 'isOptimGifts', 'isBreakEgg', 'isApplySkin',
    'getGems', 'isPlayBones', 'isPlayPunish', 'isCutBomb', 'isUseBudili', 'ispaEvent', 'nyEvent', 'isReanimSelfPeace', 'isReanimSelf', 'nightHorror', 'isCanChangeRoomSize',
    'isCanChangeEventTaskByRuby', 'change_power', 'active_control', 'isCanChangeTaskByRuby', 'exitTimeout', 'autostartDuel'
];
const storages_prop_inp = ['updateMiscSpeed', 'updateDuelSpeed', 'updateStateSpeed', 'room_size', 'minRubyForDuel', 'room_league', 'room_type', 'takeAutDosrInp', 'nickInp', 'takeAutMoneyInp', 'bugs_nick',
    'use_extra', 'taro_select', 'vk_id', 'autosay_input', 'takeAutInpMax', 'takeAutInp', 'autobugs_select', 'change_power_select', 'active_control_select'
];
const evilMas = ['Взрывная Лили', 'Мафиози', 'Босс мафии', 'Маньяк', 'Двуликий', 'Валентин', 'Франческа', 'Жирный Тони', 'Подручный', 'Марко', 'Розарио', 'Хулиганка Пеппи'];
const extras_for_search = [
    'Карты таро раскрыли вам роль: ',
    'Пытки паяльником дали результат: ',
    'Джокер раскрыл роль случайного игрока: ',
    'Детектор лжи дал результаты: ',
    'Вами прослушанный игрок ',
    'Жирный Тони раскрыл роль: ',
    'Новогодние Таро раскрыли роль: ',
    '«Прицельный выстрел» раскрыл роль: ',
    'Вирус правды раскрыл роль: ',
    'Эликсир правды раскрыл роль: ',
    'Таро от Лили раскрыли роль: ',
    'Карнавальные Таро раскрыли роль: ',
    ' раскрыл вам свою роль',
    'Талант «Таро бустер» раскрыл вам роль игрока: ',
    'Пасхальные Таро раскрыли роль: ',
    'Таро от Бандитос раскрыли роль: '
];
const private_says = {
    'Комиссар': ['ком', 'я ком', 'комиссар', 'kom'],
    'Доктор': ['док', 'я док', 'я доктор', 'доктор', 'dok'],
    'Двуликий': ['я двуликий', 'двуликий', 'я двул', 'двул', 'dvul'],
    'Свидетель': ['свид', 'я свид', 'я свидетель', 'свидетель', 'свид я', 'svyd'],
    'Стерва': ['я стерва', 'стерва', 'стерва', 'я стерва', 'sterva'],
    'Гражданин': ['гр', 'я гр', 'гражданин', 'я гражданин', 'gr'],
    'Вор': ['я вор', 'вор', 'vor'],
    'Мафиози': ['маф', 'я маф', 'маф я', 'maf'],
    'Сержант': ['серж', 'сержант', 'serj'],
    'Маньяк': ['Ман', 'ман', 'man'],
    'Добрый зайка': ['заяц', 'зайка', 'я зая', 'zaya'],
    'Вредный зайка': ['заяц', 'зайка', 'я зая', 'zaya'],
    'Нефритовый заяц': ['заяц', 'зайка', 'я зая', 'zaya'],
    'Медработник': ['мед', 'я мед', 'med'],
    'Босс мафии': ['босс', 'я босс', 'boss'],
    'Смертник': ['смерт', 'я смерт', 'smert']
};
const buy_extra_suic_list = [53, 54, 65, 66, 67, 70, 71, 74, 75, 76];
const LEAGUES = ['Бронза', 'Серебро', 'Золото', 'Платина'];
const pools = my_id == GI ? ['ws://'] : ['wss://']; 

const player_talents = {};
const checked_messages = {};

let my_wedding = null;
let ajax_url = '';
let socket;

let intervalIdCheckRooms, intervalIdCheckGaming;
let takeAukInterval, aukCheckInterval;

let soclans_ids = [],
    replyNicks = [],
    privateMessages = [],
    nightEvents = [],
    votes = [],
    nightSkeep = [];


let upd_state_i = 0,
    last_check_night_i = 0,
    last_check_night_day = 0;

let vote_timeout = null;
let prev_gam_state;


let replyFl = false;
let set_ul_action = false;

let check_big_eggs_interval, global_big_eggs_interval, send_big_eggs_interval, selected_big_eggs_id, eggs_count = 0;
let tableFl;


let timeForSayTimeout;
let timeForSay = true;

let exit_timeout = null;
let dosrInterval;
let dosrFl = false;
let intervalCheckNight, intervalUpdateState, intervalExit;


let haves = {
    haveBoss: 0,
    haveBur: 0,
    haveDouble: 0
};
let suic_fl = false;

let duelNeedRoles = '';
let duelNeedRolesSuic = '';
let duelAukInterval = null;

let pay_bot_text = '';
let pay_menu_text = '';
let prev_settings = null;
/*****************************************************************/
/***********************Функции для сокета************************/
/*****************************************************************/
function getSocket() {
    const pool_selected = pools[rndm(pools.length)];
    console.debug('selected pool', pool_selected);
    socket = new WebSocket(pool_selected);
    socket.onopen = function () {
        authorization();
    };
    socket.onclose = function (event) {
        event.wasClean ?
            console.debug('Дуэльный помощник: Соединение закрыто') : console.debug('Дуэльный помощник: Обрыв соединения с сервером');
    };

    socket.onmessage = async function (event) {
        let data = JSON.parse(event.data);
        console.debug('message from socket', data);
        switch (data.type) {
            case 'checkPayed':
                if (data.result == 'allowed') {
                    if ($('#botStyle').prop('disabled')) {
                        $('#botStyle').prop('disabled', null);
                        $('#botStyle').prop('checked', true);
                        $('#autovote').prop('checked', true);
                        $('.autovote_li').find('option:first').prop('disabled', false);
                        $('.autovote_li').find('option:first').attr('selected', 'selected');
                    }

                    pay_bot_text = `Активно до ${new Date(data.expDate).toLocaleString()}`;


                } else {
                    $('#botStyle').prop('checked', false);
                    pay_bot_text = 'Неактивен';
                }

                const duelsDisabledList = [
                    'isCanChangeEventTaskByRuby',
                    'isCanChangeTaskByRuby',
                    'isCanChangeRoomSize',
                ];
                if (data.duelsResult === 'allowed') {
                    for (const prop of duelsDisabledList) {
                        $(`#${prop}`).prop('disabled', null);
                    }
                    isDuelPayed = true;
                    $('.duel_status_select').prop('disabled', null);


                    pay_menu_text = `Активно до ${new Date(data.duelsExpDate).toLocaleString()}`;

                } else {
                    for (const prop of duelsDisabledList) {
                        $(`#${prop}`).prop('disabled', true);
                    }
                    $('.duel_status_select').prop('disabled', true);
                    $('.duel_status_message').text('Неактивно');
                    pay_menu_text = 'Неактивно';
                    isDuelPayed = false;
                }
                loadSettingsFromServer();
                break;
            case 'error':
                if (data.text == 'need_authorization') {
                    authorization();
                }
                break;
            case 'playOnTask':
                parseTask(data.result);
                startGaming();
                break;
            case 'checkNight':
                if (data.id) {
                    if (getDay().type === 'ночь') {
                        console.debug('move to socket', data.id);
                        moveTo(data.id);
                    } else {
                        console.debug('bad getday type');
                    }
                }
                break;
            case 'checkDay':
                if (data.id) {
                    voteTo(data.id);
                }
                break;
            case 'useBugs':
                if (data.id)
                    useExtraOn('101', data.id);
                break;
            case 'useBur':
                if (data.id)
                    useExtraOn('157', data.id);
                break;
            case 'useTaro':
                if (data.id)
                    useExtraOn('156', data.id, true);
                break;
            case 'useIspa':
                if (data.id)
                    useExtraOn('155', data.id);
                break;
            case 'useOther':
                if (data.id)
                    useExtraOn(data.extra_id, data.id);
                break;
            case 'vote':
                if ($('.popupGameVote').length && data.choise !== null && pla_data['kvt']) {
                    $('.popupGameVote')[0].children[2].children[data.choise].click();
                }
                break;
            case 'setRoomSize':

                changeRoomSize(data.size);
                break;

            case 'tryWinOne':
                break;

            case 'setEventAukRole':
                if (gam_state == 'init') {
                    changeRole(data.role);
                }
                break;

            case 'setAukRole':
                if (gam_state == 'init') {
                    const isCanTakeBronzQuest = duels_quests[1].id == data.quest_id && isChecked('dosrDquestBronz');
                    const isCanTakeSerebroQuest = duels_quests[2].id == data.quest_id && isChecked('dosrDquestSerebro');
                    const isCanTakeBrillQuest = duels_quests[3].id == data.quest_id && isChecked('dosrDquestBrill');
                    const isCanTake = isCanTakeBronzQuest || isCanTakeSerebroQuest || isCanTakeBrillQuest;
                    duelNeedRoles += data.role;
                    if (isCanTake) {
                        duelNeedRolesSuic += data.role;
                    }
                    changeDuelRole(data.role);
                }
                if (!duelAukInterval) {
                    duelAukInterval = setInterval(getDuelAuk, 200);
                }

                setInRoomDQuestCompleted(data.quest_id, true);
                duelSuic(data.quest_id);

                break;
            case 'useClanExtra':
            case 'useExtra':
                if (!countOfExtra(data.id)) {
                    clan_extra_ids.includes(Number(data.id)) ? buyDuelExtra(data.id) : buyExtra(data.id);
                }
                if (!Gaming()) {
                    return;
                }
                const duel_quest_extra = getDuelQuest(data.quest_id);
                const haveMan = gam_data.v_left[3];
                const haveMaf = gam_data.v_left[2] || gam_data.v_left[9] || gam_data.v_left[25] || gam_data.v_left[26];
                if (duel_quest_extra) {
                    if ((data.quest_id == 72 || data.quest_id == 74) && (!haveMaf || duel_quest_extra.count == 0)) {
                        setInRoomDQuestCompleted(data.quest_id, true);
                        duelSuic(data.quest_id);
                        break;
                    }

                    if (data.quest_id == 73 && (!haveMan || duel_quest_extra.count == 0 || role() == 'Маньяк')) {
                        setInRoomDQuestCompleted(data.quest_id, true);
                        duelSuic(data.quest_id);
                        break;
                    }
                    if (data.uid === null) {
                        return;
                    }
                }


                const canUse = useExtraOn(data.id, data.id == 115 ? null : data.uid, false, data.id == 115);
                const isWaitingDay = (__store[data.id].action == 'day' || __store[data.id].action == 'vtb') && !gam_data['v_mode'];
                const isOnlyOneTimeExtra = onlyOneTimeExtra.includes(Number(data.id)) && (pla_data['el' + data.id]);
                const isKiller = data.quest_id == 62;

                if (duel_quest_extra) {
                    if (data.quest_id == 72) {
                        console.debug('Задание на таро в мафа, проверка на суик', canUse, duel_quest_extra.count, haveMaf);

                        if (!canUse || duel_quest_extra.count == 0 || !haveMaf) {
                            setInRoomDQuestCompleted(data.quest_id, true);
                            duelSuic(data.quest_id);
                        }
                        break;
                    }
                    if (data.quest_id == 55) {
                        if (pla_data['el' + data.id]) {
                            setInRoomDQuestCompleted(data.quest_id, true);
                            duelSuic(data.quest_id);
                        }
                        break;
                    }
                    if (data.quest_id == 73) {

                        console.debug('Задание на таро в мана, проверка на суик', canUse, duel_quest_extra.count, haveMan);
                        if (!canUse || duel_quest_extra.count == 0 || !haveMan) {
                            setInRoomDQuestCompleted(data.quest_id, true);
                            duelSuic(data.quest_id);
                        }
                        break;
                    }
                    if ((!canUse && !isWaitingDay) || duel_quest_extra.count == 0 || isOnlyOneTimeExtra || isKiller) {
                        setInRoomDQuestCompleted(data.quest_id, true);
                        console.debug('Уже не могу юзать экстру, проверяю суик', canUse, isWaitingDay, duel_quest_extra.count, isOnlyOneTimeExtra, isKiller);
                        duelSuic(data.quest_id);
                    }
                }
                break;

            case 'buyExtra':
                if (!countOfExtra(data.id)) {
                    buyExtra(data.id);
                }
                if (buy_extra_suic_list.includes(Number(data.quest_id))) {
                    setInRoomDQuestCompleted(data.quest_id, true);
                    duelSuic(data.quest_id);
                }
                break;

            case 'buyClanExtra':
                if (!countOfExtra(data.id)) {
                    buyDuelExtra(data.id);
                }
                if (buy_extra_suic_list.includes(Number(data.quest_id))) {
                    setInRoomDQuestCompleted(data.quest_id, true);
                    duelSuic(data.quest_id);
                }
                break;
            case 'sendPresent':
                if (isDuelPresents || isDuelPresentFl) {
                    return;
                }
                isDuelPresents = true;
                isDuelPresentFl = true;
                let _dsc = await getDiscount();
                let simple_id = __store[_dsc[0]].price > __store[_dsc[1]].price ? _dsc[1] : _dsc[0];

                let present_id = data.presentType == 'simple' || data.presentType == 'row' ? simple_id : data.presentType == 'mega' ? _dsc[3] : null;
                let ryadi = data.presentType == 'row';


                setTimeout(() => {
                    isDuelPresentFl = false;
                }, 5000);
                const duel_quest = getDuelQuest(data.quest_id);
                let p_uid = my_wedding || '1613081';
                if (data.presentType == 'mega' && !my_wedding) {
                    const presents_mas = ['5217964', '2648435', '759859'];
                    p_uid = presents_mas[rndm(presents_mas.length)];
                }
                for (let i = 0; i < data.count; i++) {
                    if (duel_quest) {
                        duel_quest.complete_count++;
                    }
                    await sendPresent(present_id, p_uid, '.', ryadi);
                }
                break;
            case 'setMyLeague':

                changeLeague(my_league >= 3 ? LEAGUES[2] : LEAGUES[my_league - 1]);
                break;

            case 'setPlayType':
                changeRoomType(data.playType);

                break;
            case 'useSimpleExtras':
                if (!countOfExtra(101)) {
                    buyExtra(101);
                }
                if (!countOfExtra(102)) {
                    buyExtra(102);
                }
                if (!buyExtra(107)) {
                    buyExtra(107);
                }
                if (!buyExtra(114)) {
                    buyExtra(114);
                }
                let simple_extra_ids = [101, 104, 103, 114, 115];
                for (let id of simple_extra_ids) {
                    useExtraOn(id);
                }
                if (pla_data['el114']) {
                    console.debug('Заданка на обычные экстры, уже заюзал жука и психоз');
                    setInRoomDQuestCompleted(76, true);
                    duelSuic(76);
                }
                break;
            case 'useClanExtras':
                if (!countOfExtra(157)) {
                    buyDuelExtra(157);
                }
                if (!countOfExtra(155)) {
                    buyDuelExtra(155);
                }
                if (!countOfExtra(156)) {
                    buyDuelExtra(156);
                }
                if (!countOfExtra(170)) {
                    buyDuelExtra(170);
                }

                useExtraOn(157);

                useExtraOn(155);
                useExtraOn(156);
                useExtraOn(170);


                if (pla_data['el170'] && pla_data['el157'] && checkExtra(155) && checkExtra(156)) {
                    console.debug('Заданка на клановые экстры, уже не могу кидать таро и испы, кинул таблы и бюр, проверка на суик');
                    setInRoomDQuestCompleted(data.quest_id, true);
                    duelSuic(data.quest_id);
                }
                break;
            case 'loadSettings':
                applySettings(data.settings, data.isCustom);
                changeSpeed('duel');
                changeSpeed('misc');
                break;
            case 'needSuic':
                suic();
                break;
            case 'sayToChat':
                sayToChat(data.message);
                break;
            case 'sayToPrivate':
                message(data.message, 1, data.uid);
                break;
            case 'start':
                isStarted = true;
                playOnTask();
                $('#startGameButton').val('Стоп');
                break;
            case 'stop':
                stopGaming();
                isStarted = false;
                $('#startGameButton').val('Старт');
                break;
            case 'getChat':
                sendMsgToVk(getAllChat(), data.peerId);
                break;
            case 'reload':
                window.location.reload();
                break;
            default:
                console.warn('unknow message type', data.type);
        }


    };
    socket.onerror = function (error) {
        console.debug('Ошибка ' + error);
    };
}

function authorization() {
    console.debug('try authorization');
    getSoclansList(_soclans => {

        socket.send(JSON.stringify({
            type: 'authorization',
            soclans: _soclans,
            clanId: my_clan,
            my_nick,
            my_id,
            wedding_id: my_wedding,
            password: typeof (menu_pswd) == 'undefined' ? '' : menu_pswd,
            enc_part: my_enc_id.substr(0, 8)
        }));
    });
}

function checkSocket() {
    if (!socket || socket.readyState == 3) {
        console.debug('not socket, get');
        getSocket();
    }
}
/*****************************************************************/
/***********************Системные функции*************************/
/*****************************************************************/

const duels_settings_props_list = [
    'isCanChangeEventTaskByRuby',
    'isCanChangeRoomSize',
    'changeDquestBronz',
    'dosrDquestBronz',
    'priorDquestBronz',
    'changeDquestSerebro',
    'dosrDquestSerebro',
    'priorDquestSerebro',
    'changeDquestBrill',
    'dosrDquestBrill',
    'priorDquestBrill',
    'isCanChangeTaskByRuby'
];

function applySettings(settings, isCustom) {
    console.debug('apply settings', settings, isCustom);
    if (!settings) {
        prev_settings = {
            inputs: {},
            checkboxes: {},
            duel_quests: {},
            mrk_leen_quests: {},
            duel_presets: {},
            preset_texts: {}
        };
        return;
    }
    if (isCustom) {
        console.debug('try save settings');
        socket.send(JSON.stringify({
            type: 'saveSettings',
            uid: my_id,
            changed_settings: settings,
            enc_part: my_enc_id.substr(0, 8)
        }));
    }
    prev_settings = settings;
    prev_settings.duel_presets = settings.duel_presets || {};
    prev_settings.mrk_leen_quests = settings.mrk_leen_quests || {};


    for (const key in settings.inputs) {
        $(`#${key}`).val(settings.inputs[key]);
    }
    for (const key in settings.checkboxes) {
        $(`#${key}`).prop('checked', settings.checkboxes[key]);
    }
    for (const key in settings.mrk_leen_quests) {
        $(`#quest_${key}`).val(settings.mrk_leen_quests[key]);
    }
    for (const key in settings.duel_quests) {
        $(`#duel_quest_${key}`).val(settings.duel_quests[key]);
    }

    for (let preset in settings.duel_presets) {
        if (!$('#' + preset).length) {
            const text = settings.preset_texts[preset];
            appendPreset(preset, text);
        } else {
            $('#' + preset).find('.quest-menu-preset-text').text(settings.preset_texts[preset]);
        }
    }
    $('.quest-menu-preset').each((i, el) => {
        const id = $(el).prop('id');
        const text = $(el).find('.quest-menu-preset-text').text();
        if (!$(`#option_${id}`).length) {
            $('#on_menu_presets_select').append(`
                <option id="option_${id}" value="${id}">${text}</option>
            `);
        }
    });

    const selected_preset_id = settings.selected_preset || 'preset_1';
    $('.quest-menu-preset').removeClass('selected');
    $('#' + selected_preset_id).addClass('selected');
    $('#on_menu_presets_select').find(`option[value="${selected_preset_id}"`).attr('selected', 'selected');
    for (let preset in settings.duel_presets) {
        if (preset != selected_preset_id) {
            continue;
        }
        const quests = settings.duel_presets[preset];
        for (const key in quests) {
            $(`#duel_quest_${key}`).val(quests[key]);
        }

        for (const key of duels_settings_props_list) {
            $(`#${key}`).prop('checked', quests[key]);
        }
    }



    $('#on_menu_presets_select').find(`option:contains("${selected_preset_id}")`).attr('selected', 'selected');



    prev_settings.preset_texts = settings.preset_texts || {};

    if (settings.extras_positions) {
        redraw(settings.extras_positions);
    }
}

function loadCustomSettings() {
    const uid = $('#popup_settings_uid').val();
    const enc_part = $('#popup_settings_password').val();
    if (!uid || !enc_part) {
        return;
    }
    socket.send(JSON.stringify({
        type: 'loadSettings',
        uid,
        enc_part,
        isCustom: true
    }));
    $('.quest-menu-preset').slice(1, $('.quest-menu-preset').length).remove();
    prev_settings = null;
    /* setTimeout(() => {
         prev_settings = {
             inputs: {},
             checkboxes: {},
             duel_quests: {},
             mrk_leen_quests: {},
             duel_presets: {},
             preset_texts: {}
         };
     }, 5000);*/

}

function loadSettingsFromServer() {
    socket.send(JSON.stringify({
        type: 'loadSettings',
        uid: my_id,
        enc_part: my_enc_id.substr(0, 8)
    }));
}


function saveSettings() {
    if (!prev_settings) {
        return;
    }
    const changed_settings = {
        inputs: {},
        checkboxes: {},
        mrk_leen_quests: {},
        duel_quests: {},
        duel_presets: {},
        preset_texts: {},
        selected_preset: null
    };
    let isChanged = false;
    for (const key of storages_prop_inp) {

        if (prev_settings.inputs[key] != $(`#${key}`).val()) {
            prev_settings.inputs[key] = changed_settings.inputs[key] = $(`#${key}`).val();
            isChanged = true;
        }

    }
    for (const key of storages_prop_checkbox) {
        if (prev_settings.checkboxes[key] != $(`#${key}`).prop('checked')) {
            prev_settings.checkboxes[key] = changed_settings.checkboxes[key] = $(`#${key}`).prop('checked');
            isChanged = true;
        }

    }
    for (const key in __evq) {
        if (prev_settings.mrk_leen_quests[key] != $(`#quest_${key}`).val()) {
            prev_settings.mrk_leen_quests[key] = changed_settings.mrk_leen_quests[key] = $(`#quest_${key}`).val();
            isChanged = true;
        }

    }
    const selected_preset_id = $('.quest-menu-preset.selected').prop('id') || 'preset_1';
    if (selected_preset != selected_preset_id) {
        selected_preset = changed_settings.selected_preset = selected_preset_id;
        isChanged = true;
    }
    if (!prev_settings.duel_presets[selected_preset_id]) {
        prev_settings.duel_presets[selected_preset_id] = {};
    }
    if (!changed_settings.duel_presets[selected_preset_id]) {
        changed_settings.duel_presets[selected_preset_id] = {};
    }
    const prev_preset = prev_settings.duel_presets[selected_preset_id];
    const changed_preset = changed_settings.duel_presets[selected_preset_id];
    for (const key in __dqs) {
        if (prev_preset[key] != $(`#duel_quest_${key}`).val()) {
            prev_preset[key] = changed_preset[key] = $(`#duel_quest_${key}`).val();
            isChanged = true;
        }
    }
    for (const key of duels_settings_props_list) {
        if (prev_preset[key] != $(`#${key}`).prop('checked')) {
            prev_preset[key] = changed_preset[key] = $(`#${key}`).prop('checked');
            isChanged = true;
        }
    }
    $('.quest-menu-preset').each((i, el) => {
        const id = $(el).prop('id');
        const text = $(el).find('.quest-menu-preset-text').text();
        if (!prev_settings.preset_texts[id] || prev_settings.preset_texts[id] != text) {
            prev_settings.preset_texts[id] = changed_settings.preset_texts[id] = text;
            isChanged = true;
        }
    });

    if (isChanged) {
        console.debug('save new settings', changed_settings);
        socket.send(JSON.stringify({
            type: 'saveSettings',
            uid: my_id,
            changed_settings,
            enc_part: my_enc_id.substr(0, 8)
        }));
    } else {
        // console.debug('not changed');
    }
}


/*****************************************************************/
/***********************Дуэльные функции**************************/
/*****************************************************************/
const dquests_completed_task_list = {
    20: 'Маньяк',
    42: 'Комиссар',
    43: 'Доктор',
    44: my_gender == 'f' ? 'Стерва' : 'Вор',
    45: 'Свидетель',
    46: 'Босс мафии',
    47: 'Двуликий',
    48: 'Маньяк',
    49: 'any_auk',
    50: '20_auk',
    51: '1000_auk'
};

const dquests_need_in_room_roles = {
    72: [2, 9, 25, 26],
    74: [2, 9, 25, 26],
    73: [3],

}
const duels_quests = {
    1: {
        id: null,
        count: null,
        complete_count: 0,
        in_room_complete: false,
        doIt: false
    },
    2: {
        id: null,
        count: null,
        complete_count: 0,
        in_room_complete: false,
        doIt: false
    },
    3: {
        id: null,
        count: null,
        complete_count: 0,
        in_room_complete: false,
        doIt: false
    }
};

const duel_needs_roles = {
    12: 'Гражданин',
    13: 'Комиссар',
    14: 'Доктор',
    15: 'ВорСтерва',
    16: 'Свидетель',
    16: 'Свидетель',
    17: 'Мафиози',
}
const clan_extra_ids = [153, 154, 155, 156, 157, 158, 159, 170, 171];
const isNeedAlive = {
    1: 'ГражданинКомиссарСержантМедработникДокторВорСтерваСвидетель',
    2: 'Босс мафииМафиозиДвуликий',
    12: 'Гражданин',
    13: 'Комиссар',
    14: 'Доктор',
    15: 'ВорСтерва',
    16: 'Свидетель',
    17: 'Мафиози',
    18: 'Босс мафии',
    19: 'Двуликий',
    27: 'Босс мафии',
    28: 'Босс мафии',
    29: 'Комиссар',
    30: 'Доктор',
    31: 'ВорСтерва',
    32: 'Свидетель',
    33: 'Двуликий',
    34: t_persons.join(),
    35: t_persons.join(),
    41: t_persons.join(),

};
const onlyOneTimeExtra = [157, 101, 104, 114, 103];
const suic_lst = [20, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 60, 61, 62, 65, 66, 67, 70, 71, 72, 73, 74, 75, 76];
let waitForNewRoom = false,
    isDuelPresentFl = false,
    isDuelPayed = false,
    isDuelPresents = false,
    selected_preset = null;

let isEdited = false;
let needShowDuelWindow = false;
let lastActiveTime = Date.now();
let collectFl = false;
let isBuyProccess = false;
let isStartedDuel = false;
let isStarted = false;
let global_black_players = [];
let eventPeoples = [];
let stopCancelFl = false;


function appendPreset(id, text) {
    $('.quest-menu-presets').append(`
        <div class="quest-menu-preset" id="${id}" onclick="selectPreset(this.id)">
            <p class="quest-menu-preset-text">${text}</p>
        </div>
    `);
}

function buyDuelExtra(id) {
    console.debug('Покупаю экстру', __store[id].title);
    _WND_proc('clans', 'act', {
        act: 'xbuy_own',
        id
    });
}

function cancelQuest(i) {
    console.debug('Отменяю заданку', i);
    $.ajax({
        async: false,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'duel_chg_task',
            slot: i,
        },
        dataType: 'json',
    });
}

function cancelEventQuest(i) {
    console.debug('Отменяю эвентовую заданку', i);
    $.ajax({
        async: false,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'evShop_chg_task',
            slot: i,
        },
        dataType: 'json',
    });
}




function cancelDuelQuest(i) {
    console.debug('Отменяю заданку', i);
    _Duels('0', 'chg_task', [i, 1]);
}

let prev_duel_task = {
    1: {
        id: null,
        count: 0
    },
    2: {
        id: null,
        count: 0
    },
    3: {
        id: null,
        count: 0
    }
};

function cancelDuelQuestNew(i) {
    if (stopCancelFl) {
        console.debug('Не могу отменить заданку, сработал контроль по времени');
        return;
    }

    if (prev_duel_task[i].id === duels_quests[i].id && prev_duel_task[i].count > 2) {
        console.debug('Не могу отменить заданку, сработал контроль по предыдущему заданию');
        return;
    } else if (prev_duel_task[i].id !== duels_quests[i].id) {
        prev_duel_task[i].count = 0;
    }
    /* if (!isChecked('isCanChangeTaskByRuby')) {
         return console.debug('Отключена смена заданок за рубин');
     }*/
    console.debug('Отменяю заданку', i);
    stopCancelFl = true;
    prev_duel_task[i] = duels_quests[i].id;
    prev_duel_task[i].count++;
    setTimeout(() => {
        stopCancelFl = false;
    }, 500);

    $.ajax({
        async: true,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'duel_chg_task',
            slot: i
        },
        dataType: 'json',
        success: function (data) {
            if (typeof data.ret != 'undefined') {
                console.debug('Заданка успешно отменена', i);
            }
            if (typeof data.err != 'undefined') {
                console.debug('Заданку не далось отменить', i);
            }
        }
    });
}

function changeDquest(q_number) {
    const qid = duels_quests[q_number + 1].id;
    if (!qid) {
        return;
    }
    $(`#duel_quest_${qid}`).val($('.duel_status_select').eq(q_number).val());
}

function checkCompleteDquestCount() {
    if (waitForNewRoom) {
        return;
    }
    if (!Gaming()) {
        return;
    }
    waitForNewRoom = true;
    for (let i = 0; i < 3; i++) {
        let needly_task = dquests_completed_task_list[duels_quests[i + 1].id];
        if (needly_task && pla_data['sale_w'] == 1 && role() == needly_task) {
            duels_quests[i + 1].complete_count++;
            console.debug(`Я выиграл требуемую роль ${needly_task} на ауке, засчитываю счетчик`);
        }
    }
}

function checkCompleteRoomDuelQuest() {
    for (let i = 1; i <= 3; i++) {
        const isHavePrior = (i == 1 && isChecked('priorDquestBronz')) ||
            (i == 2 && isChecked('priorDquestSerebro')) ||
            (i == 3 && isChecked('priorDquestBrill'));


        if ($('#duel_quest_' + duels_quests[i].id).val() == 'nothing' || !isHavePrior) {
            console.debug('continue', duels_quests[i].id, '1')
            continue;
        }

        if (isNeedAlive[duels_quests[i].id] && !isNeedAlive[duels_quests[i].id].includes(role())) {
            console.debug('continue', duels_quests[i].id, '2')
            continue;
        }
        if (isNeedAlive[duels_quests[i].id] && isNeedAlive[duels_quests[i].id].includes(role())) {
            console.debug('return ', duels_quests[i].id, 'false 1');
            return false;
        }
        if (!duels_quests[i].in_room_complete) {
            console.debug('return ', duels_quests[i].id, 'false 2');
            return false;
        }
    }
    return true;
}

function createDuelQuestMenu() {
    const duels_auk_list = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    const extras_list = [52, 54, 55, 58, 60, 61, 62, 65, 66, 67, 70, 71, 72, 73, 74, 75, 76];
    const cancel_list = [3, 4, 5, 24, 25, 26, 27, 28, 21, 22, 23, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 52, 54, 57, 59, 77];
    const all_keys_list = {};
    for (let key in __dqs) {
        all_keys_list[key] = true;
    }

    let s = '';
    s += getDuelWindowRow('Задания на ауки', duels_auk_list, all_keys_list, cancel_list, suic_lst);
    s += getDuelWindowRow('Задания на суик', suic_lst, all_keys_list, cancel_list, suic_lst);
    s += getDuelWindowRow('Задания на экстры', extras_list, all_keys_list, cancel_list, suic_lst);
    s += getDuelWindowRow('Часто отменяемые заданки', cancel_list, all_keys_list, cancel_list, suic_lst);
    s += getDuelWindowRow('Прочее', Object.keys(all_keys_list), all_keys_list, cancel_list, suic_lst);

    $('body').append(`<div id="duel_quest_menu" class="select_quest_menu">
        <input class="menubtn" type="button" onclick="$('#duel_quest_menu').hide()" value="X"> 
        <div class="quest-menu-presets"> 
            <div class="quest-menu-buttons"> 
                <div class="quest-menu-preset-delete-button" onclick="deletePreset()"> <i class="fas fa-trash"></i></div>
                <div class="quest-menu-preset-edit-button" onclick="editPreset()"><i class="fas fa-edit"></i> </div>
                <div class="quest-menu-preset-add-button" onclick="addNewPreset()"><i class="fas fa-plus-square"></i></div>
                
            </div>

            <div class="quest-menu-preset selected" id="preset_1" onclick="selectPreset(this.id)">
                <p class="quest-menu-preset-text">Набор 1</p>
            </div>
        </div>
        <div class="quest-menu-body"> </div>
        <div class="quest-menu-footer"> 
            <div class="quest-menu-save-button"> </div>
        </div>
    </div>`);
    $('#duel_quest_menu').hide();
    $('#duel_quest_menu > .quest-menu-body').append(s);

}

function deletePreset() {
    const selected_preset_id = $('.quest-menu-preset.selected').prop('id');
    if (selected_preset_id == 'preset_1') {
        return;
    }
    socket.send(JSON.stringify({
        type: 'removePreset',
        preset_id: selected_preset_id,
        enc_part: my_enc_id.substr(0, 8)
    }));
    $('.quest-menu-preset.selected').remove();
    prev_settings.duel_presets[selected_preset_id] = {};
    delete prev_settings.duel_presets[selected_preset_id];
    selectPreset('preset_1');
}

function editPreset() {
    if (isEdited) {
        return;
    }
    const text = $('.quest-menu-preset.selected').text().trim();
    $('.quest-menu-preset.selected > p').hide();
    $('.quest-menu-preset.selected').append(`<input id="preset_edit_text" value="${text}"><i id="preset_save_check" class="preset-save fas fa-check" onclick="savePreset()"></i>`);
    isEdited = true;
}

function savePreset() {
    console.debug('try save');
    isEdited = false;
    const selected_preset_id = $('.quest-menu-preset.selected').prop('id');
    const text = $('#preset_edit_text').val();
    $('.quest-menu-preset.selected > p').show();
    setTimeout(() => {
        $('.quest-menu-preset.selected > p').text(text);
        $('#preset_edit_text').remove();
        $('#preset_save_check').remove();
    }, 200);


}

function addNewPreset() {
    if (isEdited) {
        return;
    }
    const last_number = Number($('.quest-menu-preset').last().prop('id').match(/\d+/)[0]) + 1;
    appendPreset('preset_' + last_number, 'Набор ' + last_number);
}

function selectPreset(id) {
    if (isEdited) {
        return;
    }
    $('.quest-menu-preset').removeClass('selected');
    $('#' + id).addClass('selected');
    $('#on_menu_presets_select').find(`option[value="${id}"`).attr('selected', 'selected');
    prev_settings.selected_preset = id;
    applySettings(prev_settings);
}

function duelSuic(quest_id) {
    if (!checkCompleteRoomDuelQuest()) {
        console.debug('есть еще необходимые для выполнения задания');
        return;
    }
    if (Gaming() && $('#duel_quest_' + quest_id).val() == 'doitSuic') {
        console.debug('doit suic');
        suic();
    }
}

function isNeedRubyCount() {
    if (!$('#minRubyForDuel').val()) {
        return;
    }
    const currentRubyCount = Number($('.profileBlock').find('span.rubyBalance').html());
    const minRubyCount = Number($('#minRubyForDuel').val());
    if (Number.isNaN(currentRubyCount) || Number.isNaN(minRubyCount)) {
        return false;
    }
    return currentRubyCount > minRubyCount;
}

function getDuelWindowRow(name, target_list, all_keys_list, cancel_list, suic_lst) {
    if (!target_list) {
        return '';
    }
    let html_str = '';
    html_str += `<h6 class="duel-quests-row">${name}</h6>`;
    html_str += '<ul>';
    for (let key of target_list) {
        if (all_keys_list[key]) {
            delete all_keys_list[key];
            html_str += getDuelWindowLi(key, cancel_list, suic_lst);
        }
    }
    html_str += '</ul>';
    return html_str;
}

function getDuelWindowLi(key, cancel_list, suic_lst) {
    return `<li>
    <p>${__dqs[key].title}<p>
    <select id='duel_quest_${key}'>
        <option value='nothing'>Ничего не делать</option>
        <option value='cancel'  ${cancel_list.includes(Number(key)) ? 'selected' : ''} >Отменять</option>
        <option value='doit' ${!cancel_list.includes(Number(key)) ? 'selected' : ''} >Выполнять обычно</option>
        <option value='doitSuic' ${!suic_lst.includes(Number(key)) ? 'disabled' : ''}>Выполнять через суик</option>
    </select>
    </li>`;
}

function getDuelQuest(id) {
    for (let i = 0; i < 3; i++) {
        if (duels_quests[i + 1].id == id) {
            return duels_quests[i + 1];
        }
    }
    return null;
}

function getDuelAuk() {
    if (gam_state != 'init') {
        return;
    }
    const role_name = $('.roleName').text();

    const isNeedRole = duelNeedRolesSuic.includes(role_name) || duelNeedRolesSuic.includes('*');
    if (isNeedRole && isNeedRubyCount()) {
        console.debug('Беру дуэльную роль досрочно');
        _GM_action('', 'sale_bet', $('#gxt_162').length ? 1 : 2, event);
    }
}

const prev_quests = {
    1: null,
    2: null,
    3: null
};

function takeAward(_slot) {
    $.ajax({
        async: false,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'duel_takeaw',
            slot: _slot
        },
        dataType: 'json'
    });
}

const types_tasks = {


    'init': [13, 14, 15, 16, 17, 18, 19, 20, 24, 26, 27, 28, 29, 30, 31, 32, 33, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    'play': [1, 2, 3, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 52, 54, 55, 58, 60, 61, 62, 65, 66, 67, 70, 71, 72, 73, 74, 75, 76],
    'none': [6, 7, 8, 9, 10, 11, 21, 22, 41, 42, 79, 81],
    'def': [],
    'fin': []
};
let enemyClanMas = [];

async function fillEnemy(enemyId) {
    if (!enemyClanMas.length) {
        console.debug('try get bd enemy', enemyId);
        const bd_ids = await getBdPlayers('clan', enemyId);
        console.debug('get bd enemy', bd_ids);
        if (bd_ids.length) {
            enemyClanMas = bd_ids.map(val => String(val.player_id));
        }
    }
}

function parseDuelTasks() {
    if (!isStartedDuel) {
        return;
    }

    if (!isDuel()) {
        return;
    }
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }

    if (!isDuelPayed) {
        return;
    }
    if (gam_state == '') {
        $('#takeAutInp').val($('#takeAutInp').val().replace(/;.+/, ''));
    }
    checkCompleteDquestCount();
    if (gam_state !== 'init') {
        duelNeedRoles = '';
        duelNeedRolesSuic = '';
        clearInterval(duelAukInterval);
        duelAukInterval = null;
    }

    $.ajax({
        async: true,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'duels',
            cid: 0,
        },
        dataType: 'json',
        success: (data) => {
            if (!data || !data.arr || data.arr.length != 10) {
                return;
            }
            fillEnemy(data.arr[2]);
            for (let i = 0; i < data.arr[8][0].length; i++) {
                const qid = data.arr[8][0][i];
                const limit = __dqs[data.arr[8][0][i]].limits[i];
                const count = data.arr[8][1][i];

                if (limit == count) {
                    if (gam_state == 'def') {
                        console.debug('Надо забрать награду выхожу');
                        _GM_action('', 'exit');
                    } else if (gam_state == '') {
                        console.debug('Забираю награду');
                        takeAward(i + 1);
                        return;
                    }
                }

                if (duels_quests[i + 1].id != qid) {
                    duels_quests[i + 1].complete_count = 0;
                    duels_quests[i + 1].in_room_complete = false;
                    duels_quests[i + 1].doIt = false;
                }
                const auto_completed_dquests = [1, 2, 17, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
                if (auto_completed_dquests.includes(Number(qid))) {
                    duels_quests[i + 1].in_room_complete = true;
                }
                const extras_dquests = [52, 54, 55, 58, 60, 61, 62, 65, 66, 67, 70, 71, 72, 73, 74, 75, 76];
                if (gam_state == 'init' && extras_dquests.includes(Number(qid))) {
                    duels_quests[i + 1].in_room_complete = false;
                }

                duels_quests[i + 1].id = qid;
                duels_quests[i + 1].count = limit - count;
                duels_quests[i + 1].doIt = false;

                if ($('#duel_quest_' + qid).val() == 'nothing' || $('#duel_quest_' + qid).val() == 'cancel') {
                    duels_quests[i + 1].in_room_complete = true;
                }
                const notForRuby = data.arr[8][2] < 13;
                if ($('#duel_quest_' + qid).val() == 'cancel') {

                    const canChangeForRuby = isChecked('isCanChangeTaskByRuby') && isNeedRubyCount();
                    let canChangeSelectedTypeDquest = isChecked('changeDquestBronz') && i == 0;
                    canChangeSelectedTypeDquest = canChangeSelectedTypeDquest || (isChecked('changeDquestSerebro') && i == 1);
                    canChangeSelectedTypeDquest = canChangeSelectedTypeDquest || (isChecked('changeDquestBrill') && i == 2);
                    //console.debug('Проверка на смену задания', canChangeForRuby, notForRuby, canChangeSelectedTypeDquest)
                    if ((notForRuby || canChangeForRuby) && canChangeSelectedTypeDquest) {
                        cancelDuelQuestNew(i + 1);
                        continue;
                    }
                }

                if (limit == duels_quests[i + 1].complete_count) {
                    duels_quests[i + 1].in_room_complete = true;
                    continue;
                }
                const isDoIt = $('#duel_quest_' + qid).val() == 'doit' || $('#duel_quest_' + qid).val() == 'doitSuic';
                const canNotChange = !notForRuby && $('#duel_quest_' + qid).val() == 'cancel';
                if ((isDoIt || canNotChange) && duels_quests[i + 1].count > 0) {
                    duels_quests[i + 1].doIt = true;
                    /* if (types_tasks['init'].includes(qid) && (!gam_state || gam_state == 'def')) {
                         duels_quests[i + 1].doIt = false;
                     }*/
                    /*  if ((gam_state && types_tasks[gam_state].includes(qid)) || (!gam_state && types_tasks['none'].includes(qid))) {
                          duels_quests[i + 1].doIt = true;
                      }*/
                }
                if (duels_quests[i + 1].count == 0 && $('#duel_quest_' + qid).val() == 'doitSuic') {
                    console.debug('completed task check suic');
                    duels_quests[i + 1].in_room_complete = true;
                    duelSuic(qid);
                }
            }
            const quest_for_room_sizes = [7, 8, 9];
            let haveQuestForRoomSize = quest_for_room_sizes.includes(Number(duels_quests[1].id));
            haveQuestForRoomSize = haveQuestForRoomSize || quest_for_room_sizes.includes(Number(duels_quests[2].id));
            haveQuestForRoomSize = haveQuestForRoomSize || quest_for_room_sizes.includes(Number(duels_quests[3].id));

            if (!haveQuestForRoomSize) {
                changeRoomSize(8);
            }


            if (duels_quests[1].doIt || duels_quests[2].doIt || duels_quests[3].doIt) {
                socket.send(JSON.stringify({
                    type: 'doDuelQuest',
                    duels_quests
                }));
            }
        }
    });
}

function setInRoomDQuestCompleted(quest_id, fl) {
    for (let i = 1; i <= 3; i++) {
        if (!quest_id || duels_quests[i].id == quest_id) {
            duels_quests[i].in_room_complete = fl;
            break;
        }
    }
}

function showDuelMenu() {
    isShowingDuelWindow = true;
    updateDuelsQuests();
}
let isShowingDuelWindow = false;

function updateDuelsQuests() {
    if (!isDuel() && !isShowingDuelWindow) {
        $('#startDuelButton').css('color', '#918585');
        $('#current_duel_status').hide();
        return $('#startDuelButton').prop('disabled', true);

    } else {
        $('#startDuelButton').css('color', '#fff');
        $('#startDuelButton').prop('disabled', false);
        $('#current_duel_status').show();
    }
    for (let i = 0; i < 3; i++) {
        const qid = duels_quests[i + 1].id;
        if (!qid) {
            continue;
        }
        $('.duel_status_title').eq(i).text(__dqs[qid].title);
        const progress = (__dqs[qid].limits[i] - duels_quests[i + 1].count) + '/' + __dqs[qid].limits[i];
        $('.duel_status_count').eq(i).text(progress);
        $('.duel_status_select').eq(i).val($(`#duel_quest_${qid}`).val());
        $('.duel_status_select').eq(i).children().last().prop('disabled', !suic_lst.includes(Number(qid)) ? 'true' : '');
    }
}

function changePresets() {
    const preset_id = $('#on_menu_presets_select').val();
    selectPreset(preset_id);
}
/*****************************************************************/
/**************************Ночные ходы****************************/
/*****************************************************************/

function checkNight() {
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }
    if (gam_state != 'play' || pla_data['dead']) {
        return;
    }
    /* if (seconds() > 20 + rndm(10)) {
         return;
     }*/

    let haveReanim = $('#upl_list').children().find('.reanim').length;
    let fakeReanim = $('#upl_list').children().find('.actionButton.off').find('.reanim').length;
    haveReanim -= fakeReanim;

    let actionsOff = $('.actionButton.off').length + haveReanim;
    let actionsAll = $('.actionButton').length;
    let actionsOn = actionsAll - actionsOff;
    if (isChecked('botStyle') && Gaming() && isNight() && actionsOn > 0) {

        if (role() == 'Мафиози' || role() == 'Подручный' || role() == 'Якудза') {
            NightMoveMaf();
        } else if (role() == 'Санчо' || role() == 'Мигель' || role() == 'Бандит') {
            NightMoveBandit();
        } else if (role() == 'Потрошитель') {
            NightMovePotroh();
        } else {
            let night_players = getNightPlayers();
            if (night_players.length) {
                socket.send(JSON.stringify({
                    type: 'checkNight',
                    nightPlayers: night_players,
                    killer: gam_data.v_left[26]
                }));
            }
        }
    }
}

function findTarget() {
    let players = $('#upl_list').children();
    for (let i = 0; i < players.length; i++) {
        let text = players.eq(i).find('.ico > .count').text();
        if (text != 'undefined' && text != '0') {
            return players.eq(i).find('.nick').text();
        }
    }
    return null;
}

function findAntiTargetAmigos() {
    let mas = [];
    $('.night-act').each((i, elem) => {
        if ($(elem).text().includes('убью')) {
            mas.push($(elem).find('a').eq(1).text());
        }
        $(elem).html($(elem).html().replace('убью', 'yбью'));
    });

    return mas;
}

function findAntiTarget() {
    let players = fillPlayers();
    let mas = [];

    for (let player of players) {

        let isMaf = player.title_role == 'Босс мафии' || player.title_role == 'Двуликий';
        let isPodruchniy = player.title_role == 'Жирный Тони' || player.title_role == 'Марко' || player.title_role == 'Франческа' || player.title_role == 'Розарио' || player.title_role == 'Хулиганка Пеппи';
        let isYakudza = player.title_role == 'Гора' || player.title_role == 'Тень' || player.title_role == 'Тётушка Лин';
        if ((isMaf || isPodruchniy || isYakudza) && player.target) {
            mas.push(player.target);
        }
    }
    return mas;
}

function getNightPlayers() {
    let players = fillPlayers();
    let mas = [];
    $('#upl_list').children().each((index, elem) => {
        const uid = $(elem).attr('id').match(/\d+/)[0];
        if (uid == my_id) {
            return;
        }


        if (role() == 'Санчо' || role() == 'Мигель' || role() == 'Бандит') {
            if (countOfAll() - countOfByType('amigos') > 2 && ($('#upl_list').find('#extraAnim_' + uid).length && $('#upl_list').find('#extraAnim_' + uid).prop('class').includes('extra_hostage'))) {
                return;
            }
        }

        let isValidMove = $(elem).find('.actionButton ').length && !$(elem).find('.actionButton ').prop('class').includes('off');
        isValidMove = isValidMove && $(elem).find('.actionButton ').children().prop('class') != 'reanim' && $(elem).find('.actionButton ').children().prop('class') != 'zgchk';
        if (isValidMove) {
            let nick = $(elem).find('.nick').text();

            for (let player of players) {
                if (player.nick == nick) {
                    mas.push(player);
                    break;
                }
            }
        }
    });
    return mas;
}

function getMarked() {
    let target_uid = null;
    $('#upl_list').children().each((index, elem) => {
        const uid = $(elem).attr('id').match(/\d+/)[0];
        if (uid == my_id) {
            return;
        }
        if (role() == 'Санчо' || role() == 'Мигель' || role() == 'Бандит') {
            if ($('#upl_list').find('#extraAnim_' + uid).length && $('#upl_list').find('#extraAnim_' + uid).prop('class').includes('extra_mark')) {
                target_uid = uid;
            }
        }
    });
    return target_uid;
}

function moveTo(uid) {
    setTimeout(() => {
        if (!gam_data['v_mode']) {
            _GM_action('', 'vote', 0, [uid, 0]);
        }
    }, 500 + rndm(1000));
}

function NightMovePotroh() {
    const players = getNightPlayers();
    for (let player of players) {
        if (player.title_role !== 'Неизвестно') {
            return moveTo(player.uid);
        }
    }
    const random_player = players[rndm(players.length)];
    return moveTo(random_player.uid);
}

function NightMoveBandit() {
    let nick = findTarget();
    let i;
    let players = getNightPlayers();
    if (nick) {
        for (i = 0; i < players.length; i++) {
            if (players[i].nick == nick) {
                return moveTo(players[i].uid);
            }
        }
    }
    //let one = role() == 'Бандит' && gam_data.v_left[43] == 1;
    //let oneToni = role() == 'Подручный' && countOfToni() == 1;
    if (seconds() <= 20 + rndm(8)) {

        let antiNick = findAntiTargetAmigos();

        const target_uid = getMarked();

        if (target_uid && !antiNick.includes($('#upl_' + target_uid).find('.nick').text())) {
            console.debug('Бандит, иду по маркеру');
            return moveTo(target_uid);
        }

        let night_players = getNightPlayers();
        setTimeout(findAntiTargetAmigos, 20 * 1000);
        if (night_players.length) {
            socket.send(JSON.stringify({
                type: 'checkNight',
                nightPlayers: night_players,
                antiNick
            }));
        }
    }
}

function NightMoveMaf() {
    let nick = findTarget();
    let i;
    let players = getNightPlayers();
    if (nick) {
        for (i = 0; i < players.length; i++) {
            if (players[i].nick == nick) {
                return moveTo(players[i].uid);
            }
        }
    }
    const haveSolo = rndm(100) > 70;
    let oneMaf = role() == 'Мафиози' && gam_data.v_left[2] == 1;
    let oneToni = role() == 'Подручный' && gam_data.v_left[16] == 1;
    let oneYakudza = role() == 'Якудза' && gam_data.v_left[36] == 1;
    if (seconds() <= 7 + rndm(15) || oneMaf || oneToni || oneYakudza || haveSolo) {
        let antiNick = findAntiTarget();
        let night_players = getNightPlayers();
        if (night_players.length) {
            socket.send(JSON.stringify({
                type: 'checkNight',
                nightPlayers: night_players,
                antiNick
            }));
        }
    }
}

/*****************************************************************/
/**************************Меню***********************************/
/*****************************************************************/

function createMenuNew() {
    $.ajax({
        method: 'GET',
        async: false,
        url: my_id == GI ? 'http://' : 'https://',
        success: (data) => {
            $('body').append(data);
            $('div.cat').remove();
            $('.footerPanel').prepend('<li onclick="showMenu()"><div class="cat"></div><i class="fas fa-paw menu-paw-button"></i>Меню</li>');
            $('.show_button.misc').click();
            $('#spam_button').css('display', 'none');
            $('#duels_menu').css('justify-content', 'space-between');
            $('#room_league').prepend(`<option value="${my_league >= 3 ? 3 : my_league}">Моя лига</option>`);
            createQuestMenu();
            createDuelQuestMenu();


            loadCss();
            setTimeout(() => {
                $('#form').draggable();
            }, 5000);
        }
    });
}

/*****************************************************************/
/**************************OTHER**********************************/
/*****************************************************************/
function startGamePressed() {
    if (!isStarted) {
        isStarted = true;
        playOnTask();
        $('#startGameButton').val('Стоп');
    } else {
        isStarted = false;
        stopGaming();
        $('#startGameButton').val('Старт');
    }

}

function redraw(my_extras_list) {
    const _exts = [];
    $('#gxt_list').children().each((i, elem) => {
        _exts.push([$(elem).prop('id').substr(4), $(elem).find('.count').text()]);
        $(elem).remove();
    });
    let new_exts = [];
    for (let my_ext of my_extras_list) {
        let i = 0;
        for (let _ext of _exts) {
            if (my_ext == _ext[0]) {
                new_exts.push(_ext);
                _exts.splice(i, 1);
                break;
            }
            i++;
        }
    }
    new_exts = new_exts.concat(_exts);

    MyExtras.delExtra();

    $.each(new_exts, function (_i, _row) {
        if (__store[_row[0]] && __store[_row[0]].value == 'expire') {
            let sum = 0;
            let days = _row[1].match(/\d+д/);
            if (days) {
                sum += Number(days[0].replace('д', '')) * 1440 * 60;
            }
            let hours = _row[1].match(/\d+ч/);
            if (hours) {
                sum += Number(hours[0].replace('ч', '')) * 60 * 60;
            }
            let minutes = _row[1].match(/\d+м/);
            if (minutes) {
                sum += Number(minutes[0].replace('м', '')) * 60;
            }
            _row[1] = sum;
        }
        _GM_action('gxt', 'exts', 'add', _row);
    });
}

function enableSortable() {
    $('.custom_extra_position').sortable({

        out: function () {
            saveExtras();
        }
    });
    $('.custom_extra_position').disableSelection();
}

function saveExtras() {
    const _exts = [];
    $('.custom_extra_position').children().each((i, elem) => {
        const id = $(elem).prop('id').substr(4);
        if (isNaN(Number(id))) {
            return;
        }
        _exts.push([id, $(elem).find('.count').text()]);
    });

    socket.send(JSON.stringify({
        type: 'saveExtras',
        extras: _exts.map(val => val[0]),
        uid: my_id,
        enc_part: my_enc_id.substr(0, 8)
    }));
}

function showAllExtras() {
    $('#gxt_list').children().each((i, elem) => {
        const id = $(elem).prop('id').substr(4);
        if (isNaN(Number(id))) {
            return;
        }
        let arr = ([id, $(elem).find('.count').text()]);
        let _e = '';
        let _l = (__store[arr[0]].limit && pla_data['el' + arr[0]] >= (__store[arr[0]].limit + (typeof my_tals[26] != 'undefined' && parseInt(my_tals[26]) && (arr[0] < 301 || arr[0] > 317) ? 1 : 0) + (typeof my_tals[51] != 'undefined' && parseInt(my_tals[51]) && __rank84_xlimit(arr[0]) ? 1 : 0)) ? ' disabled' : '');
        let _h = (__store[arr[0]].only == 'chat' ? ' only-chat' : '');
        let _v = arr[1];
        let _d = '<span class="count">' + _v + '</span>';

        if (__store[arr[0]].value) {
            switch (__store[arr[0]].value) {
                case 'count':
                    if (arr[1] != '') {
                        _v = parseInt(arr[1]);
                        _d = '<span class="count">' + _v + '</span>';
                    }
                    break;
                case 'expire':
                    if (arr[1] != '') {
                        console.debug('its expire extra', arr);
                        _v = parseInt(arr[1]);
                        _e = ':' + Math.floor(new Date().getTime() / 1000);
                        _d = '<span class="count time">' + arr[1] + '</span>';
                    }
                    break;
            }
        }


        const obj = 'gtx';


        const li = '<li id="gtx_' + arr[0] + '" class="extra' + _l + _h + (__store[arr[0]].action == 'dead' || __store[arr[0]].action == 'reanim' || __store[arr[0]].action == 'reanim_j' ? ' deadExtra' : '') + '" ondblclick="return false" onclick="$(this).find(\'.hover-hint\').addClass(\'off\');setTimeout(function(){$(\'#' + obj + '_' + arr[0] + '\').find(\'.hover-hint\').removeClass(\'off\');}, 3000);_GM_action(\'\', \'ext_act\', \'' + arr[0] + '\', event);return false" hidefocus="true" label="' + _v + _e + '"><img src="/img/extras/' + arr[0] + '.png" class="ico" />' + _d + '</li>';
        $('.custom_extra_position').append(li);
    });
}
/*****************************************************************/
/**************************OTHER**********************************/
/*****************************************************************/

function inRoom() {
    return gam_state == 'def' || gam_state == 'init';
}

function parseEventTasks() {
    if (!$('#eventTask').prop('checked')) {
        return;
    }

    if (gam_state == '') {
        $('#takeAutInp').val($('#takeAutInp').val().replace(/;.+/, ''));
    }

    $.ajax({
        async: true,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'GI',
            id: my_id,
        },
        dataType: 'json',
        success: function (data) {
            if (!data || !data.ret) {
                return console.warn('bad data');
            }
            const quests = {};
            for (let i = 0; i < data.ret[0][2].length; i++) {
                quests[i + 1] = {
                    id: null,
                    count: null
                };
                const qid = data.ret[0][2][i];
                if (qid == 0) {
                    continue;
                }
                if (__evq[data.ret[0][2][i]].limits[data.ret[0][3][i]] == data.ret[0][4][i]) {
                    console.debug('Получаю награду за задание', i + 1);
                    _EventScene(my_id, 'take_award', i + 1);
                    continue;
                }

                if ($('#quest_' + qid).val() == 'nothing') {
                    console.debug('Пропускаю задание', i + 1);
                    continue;
                }
                if ($('#quest_' + qid).val() == 'cancel') {
                    console.debug('Пытаюсь отменить задание', i + 1);
                    if (data.ret[0][5] == 0) {
                        cancelEventQuest(i + 1);
                    }
                }
                if ($('#quest_' + qid).val() == 'doit') {
                    quests[i + 1].id = (data.ret[0][2][i]);
                    quests[i + 1].count = __evq[data.ret[0][2][i]].limits[data.ret[0][3][i]] - data.ret[0][4][i];
                }
            }
            const quest_for_room_sizes = [5, 6, 7, 8];
            let haveQuestForRoomSize = quest_for_room_sizes.includes(Number(quests[1].id));
            haveQuestForRoomSize = haveQuestForRoomSize || quest_for_room_sizes.includes(Number(quests[2].id));
            haveQuestForRoomSize = haveQuestForRoomSize || quest_for_room_sizes.includes(Number(quests[3].id));

            if (!haveQuestForRoomSize) {
                changeRoomSize(8);
            }


            socket.send(JSON.stringify({
                type: 'doEventQuest',
                quests
            }));
        }
    });
}

function countOfExtra(id) {
    return Number($(`#gxt_${id} > .count`).text()) || 0;
}

function changeRoomType(type) {
    if (type == 'Входить к супругу') {
        return;
    }
    //console.debug('Меняю тип игры на', type);
    $('#room_type').find(`option:contains("${type}")`).attr('selected', 'selected');
}

function changeRoomSize(size) {
    // console.debug('Меняю размер комнаты на', size);
    if ($('#isCanChangeRoomSize').prop('checked')) {
        $('#room_size').find(`option:contains("${size}")`).attr('selected', 'selected');
    }
}

function changeLeague(league) {
    console.debug('Меняю лигу на', league);
    $('#room_league').find(`option:contains("${league}")`).attr('selected', 'selected');
}

function changeRole(role) {
    let prev = $('#takeAutInp').val();
    if (!prev.includes(';')) {
        prev += ';';
    }
    if (!prev.includes(role)) {
        $('#takeAutInp').val(prev + role);
    }
    prev = prev.replace(/;.+/, '');

    $('#getAuk').prop('checked', true);
}

function changeDuelRole() {
    let prev = $('#takeAutInp').val();
    prev = prev.replace(/;.+/, '');
    $('#takeAutInp').val(prev + ';' + duelNeedRoles);
    $('#getAuk').prop('checked', true);
}

function role() {
    return t_persons[(typeof pla_data['person'] != 'undefined' ? pla_data['person'] : 0)];
}

function getSoclansList(callback) {
    let players = [];
    $.ajax({
        async: true,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'cl_ff',
            'f': 1
        },
        dataType: 'json',
        success: function (data) {
            if (!data || !data.arr)
                return callback([]);
            for (let player of data.arr[8]) {
                players.push(player[1]);
                soclans_ids.push(player[0]);
            }
            return callback(players);
        },
        error: function () {
            return callback([]);
        }
    });
}

function parseTask(result) {
    $('#room_size').find('option:contains("8")').attr('selected', 'selected');
    switch (result) {
        case 'none':
            $('#task').attr('checked', false);
            break;

        case '12':
            $('#room_size').find('option:contains("12")').attr('selected', 'selected');
            break;

        case '16':
            $('#room_size').find('option:contains("16")').attr('selected', 'selected');
            break;

        case '20':

            $('#room_size').find('option:contains("20")').attr('selected', 'selected');
            break;

        case 'active':
            buyExtra('102');
            break;

        case 'super':
            /*skipTask(() => {
            	stopGaming();
            	playOnTask();
            });*/
            break;
    }

}

function playOnTask(reason) {
    if ($('#task').prop('checked')) {
        try {
            getTask(data => {
                if (!data || !data.clach || !__ach[data.clach[0]]) {
                    return startGaming();
                }
                socket.send(JSON.stringify({
                    type: 'playOnTask',
                    data: __ach[data.clach[0]].text
                }));
            });
        } catch (e) {
            startGaming();
        }
    } else {
        startGaming();
    }
}

function imUprav() {
    let isUprav = false;
    $.ajax({
        async: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'cl_root',
            id: my_clan
        },
        dataType: 'json',
        success: function (data) {
            const places = [1, 14, 15, 16, 27, 30, 31];
            for (let place of places) {
                if (data.arr[place] == my_id) {
                    return isUprav = true;
                }
            }
            isUprav = false;
        }
    });
    return isUprav;
}

function getTask(callback) {
    $.ajax({
        async: true,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'cl_root',
            id: my_clan
        },
        dataType: 'json',
        success: function (data) {
            callback(data);

        }
    });
}

function join(id) {
    console.debug('join', id);
    return new Promise(resolve => {
        let _mth = {};
        _mth['method'] = 'gam_join';
        _mth['id'] = id;
        $.ajax({
            async: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: _mth,
            dataType: 'json',
            success: function (data) {
                if (data.die) {
                    return window.location.reload();
                }
                if (data.err == '100' || data.gk || data.die) {

                    window.location.reload();

                    return console.error('Страница зависла');
                }
                let _e = '',
                    _w = 300;
                switch (data.err) {
                    case 1:
                        _e = 'Комната существует, попробуйте другую ставку';
                        break;
                    case 2:
                        _e = 'Вы не можете создать игру, пока в меню есть свободные игровые комнаты';
                        break;
                    case 3:
                        _e = 'Недостаточно монет';
                        break;
                    case 4:
                    case 6:
                    case 14:
                        _e = 'Некорректно';
                        break;
                    case 5:
                        _e = 'Лига недоступна';
                        break;
                    case 7:
                        _e = 'Вы уже создали комнату';
                        break;
                    case 11:
                        _e = 'В этой комнате уже присутствует пользователь с таким же IP адресом как у Вас';
                        _w = 300;
                        break;
                    case 12:
                        _e = 'В этой комнате уже идет игра, выберите другую из списка или создайте свою';
                        _w = 300;
                        break;
                    case 13:
                        _e = 'У Вас недостаточно монет чтобы зайти в эту игровую комнату';
                        _w = 300;
                        break;
                    case 15:
                        _e = 'У Вас недостаточно рейтинга чтобы зайти в эту игровую комнату';
                        _w = 300;
                        break;
                    case 16:
                        _e = 'Для входа в эту игровую комнату требуется 5 уровень';
                        _w = 300;
                        break;
                    case 17:
                        _e = 'Требуется 5 уровень';
                        break;
                    case 18:
                        _e = 'Вы не можете войти в эту комнату, создатель комнаты вас заблокировал';
                        break;
                    case 19:
                        _e = 'Требуется 20 уровень';
                        break;
                    case 20:
                        _e = 'Для входа в эту игровую комнату требуется 20 уровень';
                        _w = 300;
                        break;
                    case 100:
                        _e = 'Игра зависла, перезагрузите';
                        _w = 300;
                        break;
                }
                if (_e != '') {
                    _WARN('default', 2500, '<span class="yellow">' + _e + '</span>', 100, 100, {
                        w: _w
                    });
                }

                if (typeof data.arr != 'undefined') {
                    _GM_action('', 'do', 'create', data.arr);
                    return resolve(true);
                }
                return resolve(false);
            }
        });
    });
}

function create() {
    $.ajax({
        async: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'gam_create',
            players: +($('#room_size').val()),
            bet: +$('#room_money').val() || 20,
            league: +$('#room_league').val(),
            prior: 1
        },
        dataType: 'json',
        success: function (data) {
            console.debug('create data', data);
            if (data.err == '100' || data.gk) {

                window.location.reload();
                return console.error('Страница зависла');
                //window.location.reload();
            }

            if (typeof data.arr != 'undefined') {
                _GM_action('', 'do', 'create', data.arr);
            }

        }
    });
}

function getRoomList(is_request) {
    return new Promise(resolve => {
        if (is_request) {
            $.ajax({
                async: false,
                cache: false,
                type: 'POST',
                url: ajax_url + Math.random(),
                data: {
                    method: 'uc_lst'
                },
                dataType: 'json',
                success(data) {
                    console.debug('data', data);
                    if (data.die) {
                        return window.reload();
                    }
                    if (typeof data.gml != 'undefined') {

                        data.gml = data.gml.filter(val => val[2] !== '156669');

                        resolve(data.gml);
                    } else {
                        console.error('error нет списка комнат');
                        resolve([]);
                    }
                },
                error(data) {
                    console.error('error', data);
                    resolve([]);
                },
            });
        } else {
            const mas = [];
            $('#gml_list').children().each((i, elem) => {
                if ($(elem).prop('class') === 'off' || $(elem).prop('class') === 'leagueSort') {
                    return;
                }
                mas.push([
                    $(elem).prop('id').substr(4),
                    $(elem).find('.link').text(),
                    $(elem).find('.link').prop('onclick').toString().match(/\d+/)[0],
                    $(elem).find('.players').text().split('/')[1],
                    $(elem).find('.rating > img').prop('src').match(/\d/)[0],
                    $(elem).find('.coins').text(),
                    0,
                    $(elem).find('.players').text().split('/')[0],
                    0, [],
                    0,
                    0
                ]);
            });
            resolve(mas.filter(val => val[2] !== '156669'));
        }
    });
}

function eventArena() {
    if ($('.arenaStartPopup').length) {
        $('.arenaStartPopup').find('button').click();
        setTimeout(() => {
            _WND_proc('arena', 'close');
        }, 400);
    }
    let canPlay = false;
    $.ajax({
        type: 'POST',
        cache: false,
        async: false,
        url: ajax_url + Math.random(),
        data: {
            method: 'evArena_scene',
            id: my_id
        },
        dataType: 'json',
        success: (data) => {
            if (data.die) {
                return window.reload();
            }
            if (data.aret && data.aret[0] == 'null') {
                console.debug('Появилась арена, вступаю');
                _EventScene(my_id, 'atour_join');
            } else if (data.aret) {
                if (data.aret[0] === 'fin') {
                    console.debug('Арена закончена, собираю награды');
                    _EventScene(my_id, 'take_atokens');
                    canPlay = true;
                } else if (data.aret[0] === 'run') {
                    canPlay = true;
                    if (canPlay) {
                        _GM_action('buttonPlayAt', 'play_at', '');
                    }
                }
            }
        }

    });
    return canPlay;
}

function arena() {
    if ($('.arenaStartPopup').length) {
        $('.arenaStartPopup').find('button').click();
        setTimeout(() => {
            _WND_proc('arena', 'close');
        }, 400);
    }
    let canPlay = false;
    $.ajax({
        type: 'POST',
        cache: false,
        async: false,
        url: ajax_url + Math.random(),
        data: {
            method: 'arena',
        },
        dataType: 'json',
        success: (data) => {
            if (data.arr && data.arr[12] == 1) {
                console.debug('Появилась арена, вступаю');
                _WND_proc('arena', 'atour_join');
                canPlay = true;
            } else if (data.t_arr) {
                if (data.t_arr[3] === 'fin') {
                    console.debug('Арена закончена, собираю награды');
                    _WND_proc('arena', 'take_atokens');
                    canPlay = true;
                } else if (data.t_arr[3] === 'run') {
                    canPlay = true || data.t_arr[2].filter(val => val[0] == my_id)[0][2] < '5';
                    if (canPlay) {
                        _GM_action('buttonPlayAt', 'play_at', '');
                    }
                }
            }
        }

    });
    return canPlay;
}

function isActive() {
    const selectedSeconds = Number($('#active_control_select').val());
    return Date.now() - lastActiveTime < selectedSeconds * 1000;
}
window.onmousemove = () => {
    lastActiveTime = Date.now();
};

async function joinToRoom() {
    if ($('#active_control').prop('checked') && !isActive()) {
        return console.debug('User is not active, go to sleep');
    }
    if ($('#room_type').val() == 'Ничего не делать') {
        return;
    }

    if (my_play_c < 9) {
        return _GM_action('buttonPlay', 'play', '');
    }

    if (inRoom() || Gaming() || $('.profileBlock').find('span.moneyBalance').html() < 20)
        return;

    let room_type = $('#room_type').val();
    let room_list;
    let wanted_league = $('#room_league').val();
    let wanted_money = $('#room_money').val() || 20;
    let wanted_size = $('#room_size').val();
    let wanted_nick = $('#nickInp').val();
    let need_rooms = [];

    if (room_type === 'Арена + Ко всем' || room_type === 'Арена + Создавать') {
        if (arena()) {
            return console.debug('Игра на арену+обычные. Есть комната арены, захожу туда');
        }
        console.debug('Игра на арену+обычные. Арены нет, иду в обычные комнаты');
        room_type = room_type === 'Арена + Создавать' ? 'Создавать комнату' : 'Входить ко всем';
    }

    switch (room_type) {
        case 'Входить к супругу':
            room_list = await getRoomList(true);
            need_rooms = room_list.filter(val => {
                return val[9].includes(my_wedding);
            });
            break;
        case 'Игра с супругом':
            room_list = await getRoomList(true);
            need_rooms = room_list.filter(val => val[9].includes(my_wedding));
            if (!need_rooms.length) {
                need_rooms = room_list.filter(val => {
                    const my_tmp_league = my_league >= 3 ? 3 : my_league;
                    const isNeedLeague = wanted_league == 'any' ||
                        (wanted_league == 'not_me' && val[4] != my_tmp_league) ||
                        wanted_league == val[4];
                    const isNeedSize = wanted_size == 'any' || val[3] == wanted_size;
                    const isNeedMoney = val[5] == wanted_money;
                    const isNotFull = val[3] != val[7];
                    const isPartlyFull = +val[3] - val[7] <= 3;
                    return isNeedLeague && isNeedSize && isNeedMoney && isNotFull && !isPartlyFull;
                });
            }
            break;
        case 'Вход для суика':
            let rooms = $('#gml_list').children();
            for (let i = 0; i < rooms.length; i++) {
                if (rooms.eq(i).prop('class') != 'off' &&
                    rooms.eq(i).prop('class') != 'leagueSort' &&
                    rooms.eq(i).find('.coins').text() == wanted_money &&
                    rooms.eq(i).find('.rating').text().replace('+', '') != 'Платина' && ['8', '12', '16', '20'].includes(rooms.eq(i).find('.players > span').attr('label')) &&
                    parseInt(rooms.eq(i).find('.players > span').attr('label')) - parseInt(rooms.eq(i).find('.players > span').text()) <= 2
                ) {
                    rooms.eq(i).find('button').click();
                }
            }
            return;
        case 'Создавать комнату':
            return create();
        case 'Игра на арене':
            return arena();
        case 'Входить по нику или хвостом':
            if (Number.isNaN(Number(wanted_nick))) {
                const rooms = $('#gml_list').children();
                for (let i = 0; i < rooms.length; i++) {
                    if (wanted_nick.includes(rooms.eq(i).find('.link').text())) {
                        rooms.eq(i).find('button').click();
                    }
                }
                return;
            } else {
                room_list = await getRoomList(true);
                need_rooms = room_list.filter(val => {
                    return val[9].includes(wanted_nick);
                });
            }
            break;
        case 'Входить ко всем':
            room_list = await getRoomList(false);
            need_rooms = room_list.filter(val => {
                const my_tmp_league = my_league >= 3 ? 3 : my_league;
                const isNeedLeague = wanted_league == 'any' ||
                    (wanted_league == 'not_me' && val[4] != my_tmp_league) ||
                    wanted_league == val[4];
                const isNeedSize = wanted_size == 'any' || val[3] == wanted_size;
                const isNeedMoney = val[5] == wanted_money;
                const isNotFull = val[3] != val[7];
                const isBlacklist = global_black_players.includes(val[2]);
                return !isBlacklist && isNeedLeague && isNeedSize && isNeedMoney && isNotFull;
            });
            break;
        case 'Входить в заполненные':
            room_list = await getRoomList(false);
            need_rooms = room_list.filter(val => {
                const my_tmp_league = my_league >= 3 ? 3 : my_league;
                const isNeedLeague = wanted_league == 'any' ||
                    (wanted_league == 'not_me' && val[4] != my_tmp_league) ||
                    wanted_league == val[4];
                const isNeedSize = wanted_size == 'any' || val[3] == wanted_size;
                const isNeedMoney = val[5] == wanted_money;
                const isNotFull = val[3] != val[7];
                const isPartlyFull = +val[3] - val[7] <= 2;
                return isNeedLeague && isNeedSize && isNeedMoney && isNotFull && isPartlyFull;
            });
            break;

        case 'Входить к сокланам':
            room_list = await getRoomList(false);
            need_rooms = room_list.filter(val => {
                const isNotFull = val[3] != val[7];
                return soclans_ids.includes(val[2]) && isNotFull;
            });
            break;
        case 'Входить к чужим':
            room_list = await getRoomList(false);
            need_rooms = room_list.filter(val => {
                const my_tmp_league = my_league >= 3 ? 3 : my_league;
                const isNeedLeague = wanted_league == 'any' ||
                    (wanted_league == 'not_me' && val[4] != my_tmp_league) ||
                    wanted_league == val[4];
                const isNeedSize = wanted_size == 'any' || val[3] == wanted_size;
                const isNeedMoney = val[5] == wanted_money;
                const isFav = $('#ufv_' + val[2]).length;
                const isNotFull = val[3] != val[7];
                const isBlacklist = global_black_players.includes(val[2]);
                return !isBlacklist && isNeedLeague && isNeedSize && isNeedMoney && !isFav && !soclans_ids.includes(val[2]) && isNotFull;
            });
            break;

        case 'Входить к фаворитам':
            room_list = await getRoomList(false);
            need_rooms = room_list.filter(val => {
                const my_tmp_league = my_league >= 3 ? 3 : my_league;
                const isNeedLeague = wanted_league == 'any' ||
                    (wanted_league == 'not_me' && val[4] != my_tmp_league) ||
                    wanted_league == val[4];
                const isNeedSize = wanted_size == 'any' || val[3] == wanted_size;
                const isNeedMoney = val[5] == wanted_money;
                const isFav = $('#ufv_' + val[2]).length;
                const isNotFull = val[3] != val[7];

                return isNeedLeague && isNeedSize && isNeedMoney && soclans_ids.includes(val[2]) && isFav && isNotFull;
            });
            break;
    }
    //console.debug('rooms', need_rooms);
    for (let room of need_rooms) {
        const res = await join(room[0]);
        if (res) {
            break;
        }
    }
}

function AntiBullet() {
    if (!Gaming()) {
        return;
    }
    let isHaveBullet = $('.my').find('.noSpeak').attr('title') == 'Подозрительно молчит' && !$('.my').find('.noSpeak').attr('class').includes('not');
    if (isHaveBullet && timeForSay) {
        sayToChat('.');
    }
}

function buyExtra(id) {

    if ($('#gxt_' + id).find('.count').text() === '') {
        console.debug('Покупаю экстру', __store[id].title);
        _WND_proc('extras', 'buy', {
            id: id
        });
    }
}

function isChecked(name) {
    if ($('#' + name).prop('checked') && !$('#' + name).prop('disabled')) {
        return true;
    }
    return false;
}

function clearWindow() {
    $('.containerEraser').remove();
    $('.fin-popup').find('button').click();
    $('.dailyBonusPopup').remove();
    $('.friendSharePopup').remove();
    $('.santaStepPopup').remove();
    $('.newbiePopup').remove();
    $('.darkeningDiv').remove();
}

function checkInGame() {
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }

    if (!isStarted) {
        console.debug('checkInGame return not started');
        return;
    }
    if (prev_gam_state != gam_state) {
        socket.send(JSON.stringify({
            type: 'zeroParams'
        }));
        zeroParams();
        setInRoomDQuestCompleted(null, false);
        checkPrivate(true);
    }

    //parseEventTasks();
    prev_gam_state = gam_state;
    if (!Gaming()) {
        //в коридоре

        if (!inRoom()) {
            console.debug('Я пока не в комнате', gam_state);
            isDuelPresents = false;
            if (intervalIdCheckRooms) {
                return;
            }
            parseDuelTasks();
            intervalIdCheckRooms = setInterval(joinToRoom, 1000);
        } else {
            //набор комнаты
            clearInterval(intervalIdCheckRooms);
            intervalIdCheckRooms = null;
            if ($('#getAuk').prop('checked')) {
                startCheckAuk();
            }
            if ($('#getAukDosr').prop('checked')) {
                startDosrAuk();
            }

        }
    } else if (Gaming() && !inRoom()) {
        checkNightMessage();
        AntiBullet();
        checkDay();
        votePrig();
        checkPrivate();
    }
}

function updateState() {
    if (!Gaming() || inRoom() || socket.readyState != 1) {
        return;
    }
    if (gam_state != 'play' || pla_data['dead']) {
        return;
    }
    let o = {
        type: 'updateState',
        players: fillPlayers(),
        my_role: role(),
        provi: fillRoleProvi(),
        chat_roles: fillRoleChat(),
        day: getDay(),
        counts: [countOfAll(), countOfPeace(), countOfMafs(), countOfEvil(), countOfByType('gr'), countOfByType('amigos')],
        seconds: seconds(),
        v_left: gam_data.v_left,
        nightEvents,
        nightSkeep,
        event_peoples: eventPeoples,
        votes,
        private: privateMessages,
        haves
    };
    /* if (upd_state_i++ % 5 == 0) {
         console.debug('update state', o);
     }*/
    socket.send(JSON.stringify(o));

}

function gameIsEnded() {
    return (!countOfEvil() && countOfPeace()) || (countOfEvil() && !countOfPeace());
}

function checkDay() {
    if (gam_state != 'play' || pla_data['dead']) {
        return;
    }
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }
    if (isNight() || $('.name.my').find('.hint').text() || gameIsEnded()) {
        return;
    }
    if (seconds() == 0) {
        return;
    }
    if ($('#autovote').prop('checked')) {
        socket.send(JSON.stringify({
            type: 'checkDay',
            vote_type: $('#autovote_select').val()
        }));
    }
}

function voteTo(uid) {
    setTimeout(() => {
        if (pla_data['kvt']) {
            return;
        }

        if (gam_data['v_mode'] && $('li#upl_' + uid).find('.actionButton ').children().prop('class') != 'reanim' && $('li#upl_' + uid).find('.actionButton ').children().prop('class') != 'zgchk' && $('li#upl_' + uid).find('.actionButton ').children().prop('class') != 'z_ghost') {
            _GM_action('', 'vote', 2, [uid, 0]);
        }
    }, 1000 + rndm(1000));
}

function fillPlayers() {
    const players = [];
    $('#upl_list').children().each((index, elem) => {
        if ($(elem).attr('id').includes('extra')) {
            return;
        }


        //const player_type = $(elem).find('.hint').text();
        const uid = $(elem).attr('id').substr(4);
        const nick = $(elem).find('.nick').text();
        const isAlive = $(elem).find('.dead').attr('label') == 0;
        if (!isAlive) {
            return;
        }

        let title = $(elem).find('.ico').attr('title') ?
            $(elem).find('.ico').attr('title') : 'Неизвестно';

        const isSleep = !($(elem).find('.noSpeak').hasClass('not-displayed'));
        const target = $(elem).find('.hint').text().replace('против: ', '');

        const count = $(elem).find('.count').text() == 'undefined' || $(elem).find('.count').text() == '0' ?
            0 : $(elem).find('.count').text();


        if (uid != my_id && moders[uid] && !moderAlert) {
            moderAlert = true;
            console.debug('send message by moder in room');
            sendMsgToVk(`ВНИМАНИЕ! В вашей комнате профиля ${my_nick} находится модератор ${moders[uid]}`);
        }
        const command = 'unknow';
        players.push({
            nick,
            target,
            uid,
            title_role: title,
            finded_role: 'Неизвестно',
            vote_count: count,
            speak: isSleep,
            command,
            isMyCommand: false,
            isCreator: index == 0
        });

    });
    return players;
}
const moders = {};
async function fillModers() {
    res = await getOnlinePlayers();
    while (res.length) {
        const info = await getPlayersInfo(res.splice(0, 999));
        for (const key in info) {
            info[key][3] && info[key][3][2] == 1 ? moders[key.substr(4)] = info[key][1] : null;
        }
    }
}

function fillRoleProvi() {
    let provi = [];
    $('.proverka').each((i, elem) => {
        provi.push({
            text: $(elem).text(),
            nick: $(elem).find('.bb > em> a').text()
        });
    });
    return provi;
}

function fillRoleChat() {
    let chat_roles = [];
    for (let i = 0; i < $('#cco_log > p').length; i++) {
        const s = $('#cco_log > p').eq(i).text();
        if (s.includes(my_nick)) {
            continue;
        }
        if (findPartial(extras_for_search, s) !== -1) {
            chat_roles.push(s);
        }
    }
    return chat_roles;
}

function findPartial(mas, s) {
    for (let i = 0; i < mas.length; ++i)
        if (s.includes(mas[i]))
            return i;
    return -1;
}

function stopGaming(reason) {

    console.debug('stopGaming', reason);
    clearInterval(intervalIdCheckRooms);
    clearInterval(dosrInterval);
    clearInterval(intervalIdCheckGaming);
    clearInterval(intervalCheckNight);
    clearInterval(intervalExit);


    intervalIdCheckRooms = null;
    dosrInterval = null;
    intervalIdCheckGaming = null;
    intervalCheckNight = null;
    intervalExit = null;

    eventPeoples = [];
    skinAppled = false;
    isStopped = true;
    if (inRoom()) {
        _DLG('exit', 2);
    }
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }
    socket.send(JSON.stringify({
        type: 'stopGaming',
    }));

}

function zeroParams() {
    skinAppled = false;
    nightEvents = [];
    nightSkeep = [];
    votes = [];
    eventPeoples = [];
    moderAlert = false;
    last_check_night_i = 0;
    set_ul_action = false;
    haves = {
        haveBoss: 0,
        haveBur: 0,
        haveDouble: 0
    };
}

function exitFromRoom() {
    if (exit_timeout) {
        return;
    }
    if (!Gaming() || !$('#autoExit').prop('checked'))
        return;

    if ((parseInt(pla_data['person']) == 34) && pla_data['spower'] == 2 && gam_state != 'fin') {
        return;
    }


    if (pla_data['dead'] || gam_state == 'fin') {

        if ((isChecked('isReanimSelfPeace') || $('#isReanimSelf').prop('checked')) && !checkExtra('208') && pla_data['dead'] && useExtraOn('208', my_id)) {
            return;
        }
        const haveKillerOnDuels = (duels_quests[1].id == '62' && duels_quests[1].count) ||
            (duels_quests[2].id == '62' && duels_quests[2].count) ||
            (duels_quests[3].id == '62' && duels_quests[3].count);

        const needDoKiller = $('#duel_quest_62').val() == 'doit' || $('#duel_quest_62').val() == 'doitSuic';
        const iCanUseKiller = !pla_data['el115'] || pla_data['el115'] < 3;
        //const haveLimit = pla_data['el115'] >= 3;
        if (haveKillerOnDuels) {
            console.debug(haveKillerOnDuels, needDoKiller, iCanUseKiller, gam_state)
        }
        if ( /*!haveLimit && */ haveKillerOnDuels && needDoKiller && iCanUseKiller && gam_state !== 'fin') {
            console.debug('Нужно кинуть киллера, не могу выйти');
            return;
        }
        console.debug('выхожу');

        waitForNewRoom = false;
        stopGaming('exit from room');


        const timeout = $('#exitTimeout').prop('checked') ?
            5000 + rndm(2000) : $('#isSuicide').prop('checked') ?
            150 : isDuel() ? 500 : gam_state == 'fin' ?
            1000 + rndm(2000) : rndm(3000) + 3200;


        exit_timeout = setTimeout(() => {
            console.debug('now exit');
            if (pla_data['dead'] || gam_state == 'fin') {
                _DLG('exit', 2);
            }
            exit_timeout = null;
            setTimeout(playOnTask, 300);
        }, timeout);
    }

}

function isNight() {
    return notFirstNight() && gam_state == 'play' && !gam_data.v_mode;
}

function Gaming() {
    return (gam_state == 'play' || gam_state == 'fin');
}

function lWord() {
    $.ajax({
        type: 'POST',
        cache: false,
        url: ajax_url + Math.random(),
        data: {
            method: 'lword',
            txt: '.'
        },
        dataType: 'json'
    });
}

function notFirstNight() {
    return $('.day-night-chg.night').last().text().search('1 НОЧЬ') == -1;
}

function getDay() {
    return {
        type: gam_data['v_mode'] ? 'день' : 'ночь',
        day: gam_data['v_cycle'] + 1
    };
}

function rndm(max_random) {
    return Math.floor(Math.random() * max_random);
}

function timeForSayUp() {
    timeForSay = false;
    if (!timeForSayTimeout) {
        timeForSayTimeout = setTimeout(() => {
            timeForSay = true;
            timeForSayTimeout = null;
        }, 70000 + rndm(25000));
    }
}

function sayToChat(text) {
    console.debug('TRY SAY', text);
    $('.chatInput > textarea').val('');
    $('.chatInput > textarea').val(text);
    if (!Gaming()) {
        $('.chatInput > textarea').val('');
        return;
    }
    timeForSayUp();
    _CHT_action('ich', 'send', 'close');
}

function seconds() {
    const timer = $('#gmv_timer > .seconds').text().match(/\d+/);

    return timer ? timer[0] : gam_data.v_mode == 0 ? 30 - gam_data.v_time : 45 - gam_data.v_time;
}

function startBuy() {
    $('#isBuyHat').prop('checked') ? buyExtra('185') : null;
    $('#isBuyCar').prop('checked') ? buyExtra('109') : null;
    $('#isBuyActive').prop('checked') ? buyExtra('102') : null;
    $('#isBuyMina').prop('checked') ? buyExtra('110') : null;
    $('#isBuyMaska').prop('checked') ? buyExtra('106') : null;
    $('#isBuyBug').prop('checked') ? buyExtra('101') : null;
    $('#isBuyPasport').prop('checked') ? buyExtra('108') : null;
}

function startDosrAuk() {
    if ($('#getAukDosr').prop('checked') && !dosrInterval) {
        console.debug('startDosrAuk');
        dosrInterval = setInterval(() => {
            if (!$('.roleName').text() || !$('#getAukDosr').prop('checked')) {
                return;
            }
            const role_name = $('.roleName').text();
            const menu_input_text = $('#takeAutDosrInp').val();
            const isNeeedRole = menu_input_text.toLowerCase() == 'все' || menu_input_text === '*' || menu_input_text.trim().includes(role_name);
            if (!dosrFl && $('#gsl_timer').text() && isNeeedRole) {
                console.debug('Юзаю досрочку через', $('#gxt_162').length ? 'экстру' : 'рубин');
                _GM_action('', 'sale_bet', $('#gxt_162').length ? 1 : 2, event);

                dosrFl = true;
                setTimeout(() => {
                    dosrFl = false;
                }, 15000);
            }
            if (gam_state !== 'init') {
                clearInterval(dosrInterval);
                dosrInterval = null;
            }
        }, 400);
    }

}

function startGaming() {
    console.debug('startgaming', isStarted);
    if (!isStarted) {
        console.debug('startGaming return not started');
        return;
    }
    checkInGame();
    if (!intervalIdCheckGaming) {
        intervalIdCheckGaming = setInterval(checkInGame, $('#updateStateSpeed').val() || 1500);
    }

    if (!intervalCheckNight) {
        intervalCheckNight = setInterval(checkNight, 2000);
    }

    if (!intervalUpdateState) {
        intervalUpdateState = setInterval(updateState, $('#updateStateSpeed').val() || 1500);
    }

    if (!intervalExit) {
        console.debug('set intervalExit');
        intervalExit = setInterval(exitFromRoom, isDuel() ? 800 : 1000 + rndm(1500));
    }
}

function startCheckAuk() {
    if (aukCheckInterval != null || !$('.roleName').text()) {
        return;
    }
    aukCheckInterval = setInterval(() => {
        takeAuk();
    }, 20);
}

function takeAuk() {
    const is1000 = $('#takeAutInp').val().includes('1000');
    let search_rol = $('#takeAutInp').val().includes('*') || $('#takeAutInp').val().toLowerCase() == 'все' || is1000;
    search_rol = search_rol || $('#takeAutInp').val().includes($('.roleName').text());

    if ((is1000 || (search_rol && $('#gsl_timer').text() <= 2)) && !takeAukInterval) {
        console.debug('Сейчас на ауке меньше 3 секунд, начинаю отбор');
        const max_val = $('#takeAutInpMax').val() ? parseInt($('#takeAutInpMax').val()) : 200;
        takeAukInterval = setInterval(() => {
            if (gam_state !== 'init') {
                console.debug('Останавливаю отбор аука');
                clearInterval(takeAukInterval);
                takeAukInterval = null;
                return;
            }

            if (is1000 && gam_data['sale_b'] <= 1000) {
                console.debug('Тычу в аук');
                _GM_action('', 'sale_bet', 0);
                return;
            }
            console.debug('Значение на ауке', gam_data['sale_b'], 'Максимальное значение', max_val, 'Моя ставка', my_slb);
            if (gam_data['sale_b'] == 0) {
                console.debug('Тычу в аук');
                _GM_action('', 'sale_bet', 0);
            }
            if ((gam_data['sale_b'] > my_slb || gam_data['sale_b'] === 20) && gam_data['sale_b'] < max_val) {
                console.debug('Тычу в аук');
                _GM_action('', 'sale_bet', 0);
            }


        }, 100);


    }
    if (gam_state !== 'init') {
        clearInterval(aukCheckInterval);
        aukCheckInterval = null;
    }
}

function votePrig() {
    if (socket.readyState != 1) {
        return console.debug('Сокет отключен, игра невозможна');
    }
    if (!pla_data['kvt']) {
        return;
    }
    if (vote_timeout) {
        return;
    }
    vote_timeout = setTimeout(() => {
        vote_timeout = false;
        let howRole = $('#autovote').prop('checked') && $('#autovote_select').val() == 'По роли';
        if (howRole) {
            console.debug('votePrig how role');
            let popupTarget = $('.popupGameVote em a').text();
            if (!popupTarget) {
                return;
            }
            let can = canChangeJail();
            if (can) {
                socket.send(JSON.stringify({
                    type: 'checkVote',
                    nick: popupTarget,
                    canChangeJail: canChangeJail()
                }));
            }
        }
    }, 5000 + rndm(2000));
}

function startUse() {
    if ($('#autobugs').prop('checked') && !checkExtra('101') && isNight() && (notFirstNight() || $('#autobugs_select').val() == 'Под себя')) {
        socket.send(JSON.stringify({
            type: 'useBugs',
            action: $('#autobugs_select').val(),
            wanted_nick: $('#bugs_nick').val()
        }));
    }
    if ($('#isUseBuroctrat').prop('checked') && !checkExtra('157')) {

        socket.send(JSON.stringify({
            type: 'useBur'
        }));
    }
    if ($('#autotaro').prop('checked') && !checkExtra('156')) {
        socket.send(JSON.stringify({
            type: 'useTaro',
            action: $('#taro_select').val(),
        }));
    }

    if ($('#isUseAka').prop('checked')) {
        useExtraOn('159');
    }

    if ($('#isUseTable').prop('checked') && notFirstNight() && isNight() && !tableFl) {
        tableFl = true;
        setTimeout(function () {
            tableFl = false;
        }, 45000);
    }

    if ($('#isUseBudili').prop('checked') && !checkExtra('154')) {
        useExtraOn('154');
    }

    if ($('#isUseIspi').prop('checked') && !checkExtra('155') && !evilMas.includes(role())) {
        useExtraOn('155');
    }

    if ($('#isUseDetector').prop('checked') && !checkExtra('104')) {
        useExtraOn('104');
    }

    if ($('#isUsePsih').prop('checked') && !isNight() && !checkExtra('114')) {
        useExtraOn('114');
    }

    if ($('#isUseBlackLabel').prop('checked') && !isNight() && !checkExtra('251')) {
        useExtraOn('251');
    }

    if ($('#isDjoker').prop('checked') && !checkExtra('240')) {
        useExtraOn('240');
    }
    if ($('#isSteal').prop('checked') && !checkExtra('241')) {
        useExtraOn('241');
    }

    if ($('#isMolotov').prop('checked') && !isNight() && !checkExtra('243')) {
        useExtraOn('243');
    }

    if ($('#isPoision').prop('checked') && !isNight() && !checkExtra('225')) {
        useExtraOn('225');
    }

    if ($('#isReanimSelf').prop('checked') && !checkExtra('208') && pla_data['dead']) {
        useExtraOn('208', my_id);
    }

    if ($('#isReanimSelfPeace').prop('checked') && !checkExtra('208') && pla_data['dead'] && !evilMas.includes(role())) {
        useExtraOn('208', my_id);
    }

}

function checkExtra(extra) {
    return !$('#gxt_' + extra).length || $('#gxt_' + extra).text() === '' || $('#gxt_' + extra).prop('class') == 'extra disabled';
}

function useExtraOn(extra, id, need_talent, need_close_title) {
    if (!Gaming()) {
        console.debug('return not game');
        return;
    }
    if (extra != '208' && id && $('#upl_' + id).find('.dead').attr('label') != 0) {
        return console.debug('Игрок мертв');
    }

    console.debug('useExtraOn', extra, id);
    let mas = [];
    let _id = parseInt(extra);
    if (gam_state == 'play' && ((!pla_data['dead'] && __store[_id].action != 'dead') || (pla_data['dead'] && (__store[_id].action == 'dead' || __store[_id].action == 'reanim'))) && (!pla_data['kvt'] || __store[_id].action == 'reanim') && pla_data['freeze'] != 1 && pla_data['freeze'] != 4 && pla_data['freeze'] != 6 && pla_data['freeze'] != 9 && !pla_data['e' + _id] && (!pla_data['shackles'] || _id == 206) &&
        __store[_id].action &&
        (
            __store[_id].action == 'dead' ||
            __store[_id].action == 'all' ||
            __store[_id].action == 'reanim' ||
            __store[_id].action == 'spk' ||
            __store[_id].action == 'rnd' ||
            __store[_id].action == 'dice' ||
            __store[_id].action == 'near' ||
            (__store[_id].action == 'day_all' && gam_data['v_mode']) ||
            (__store[_id].action == 'vtb' && gam_data['v_mode']) ||
            (__store[_id].action == 'night' && !gam_data['v_mode']) ||
            (__store[_id].action == 'night_all' && !gam_data['v_mode']) ||
            (__store[_id].action == 'day' && gam_data['v_mode']) ||
            (__store[_id].action == 'vte' && gam_data['v_mode'] && pla_data['act'] > 0)
        ) &&
        (!__store[_id].limit || !pla_data['el' + _id] || pla_data['el' + _id] < (__store[_id].limit + (typeof my_tals[26] != 'undefined' && parseInt(my_tals[26]) && (_id < 301 || _id > 308) ? 1 : 0) + (typeof my_tals[51] != 'undefined' && parseInt(my_tals[51]) && __rank84_xlimit(_id) ? 1 : 0)))
    ) {
        _WARN('extras');
        if (__store[_id].action == 'dice') {
            _GM_action('', 'dice');
        } else if (__store[_id].action == 'vte') {
            _GM_action('', 'ext_use', [_id, pla_data['act']]);
            return true;
        } else if (__store[_id].action == 'rnd' || __store[_id].action == 'day_all' || __store[_id].action == 'night_all') {
            _GM_action('', 'ext_use', [_id, 0]);
            return true;
        } else {
            if (__store[_id].action == 'near') {
                var _cpl = getClosestPlayers();
            }
            $('#upl_list > li').each(function () {
                let _ii = $(this).attr('id').substr(4);
                let _de = parseInt($(this).find('.dead').attr('label'));
                if ((_ii != my_id || _id == 223 || __store[_id].action == 'spk' || __store[_id].action == 'reanim') && ((!_de && __store[_id].action != 'reanim') || (_de > 1 && __store[_id].action == 'reanim'))) {
                    if (__store[_id].action == 'spk' && $(this).find('.noSpeak').hasClass('not-displayed')) {
                        return true;
                    } else if (__store[_id].action == 'vtb' && $(this).find('.hint').html() != '') {
                        return true;
                    } else if (__store[_id].action == 'reanim' && $(this).find('.actionButton').attr('label') != 'reanim') {
                        return true;
                    } else if (__store[_id].action == 'near' && _ii != _cpl[0] && _ii != _cpl[1]) {
                        return true;
                    }
                    let _oo = $(this).find('.nick');
                    if ($(_oo).length) {
                        mas.push(_ii);
                    }
                }
            });
        }
    } else if (!$('#myExtras').hasClass('disabled') || __store[_id].action == 'dead' || __store[_id].action == 'reanim') {
        var _err = 0;
        if (gam_state != 'play') {
            _err = 1;
        } else if (pla_data['dead'] && __store[_id].action != 'dead') {
            _err = 2;
        } else if (pla_data['freeze'] == 1 || pla_data['freeze'] == 4 || pla_data['freeze'] == 6 || pla_data['freeze'] == 9) {
            _err = 9;
        } else if (__store[_id].limit && pla_data['el' + _id] >= (__store[_id].limit + (typeof my_tals[26] != 'undefined' && parseInt(my_tals[26]) && (_id < 301 || _id > 308) ? 1 : 0) + (typeof my_tals[51] != 'undefined' && parseInt(my_tals[51]) && __rank84_xlimit(_id) ? 1 : 0))) {
            _err = 4;
        } else if (pla_data['e' + _id]) {
            _err = 3;
        } else if (!__store[_id].action) {
            _err = 5;
        } else if (__store[_id].action == 'night' && gam_data['v_mode']) {
            _err = 6;
        } else if (__store[_id].action == 'night_all' && gam_data['v_mode']) {
            _err = 6;
        } else if (__store[_id].action == 'day' && !gam_data['v_mode']) {
            _err = 7;
        } else if (__store[_id].action == 'day_all' && !gam_data['v_mode']) {
            _err = 7;
        } else if (__store[_id].action == 'vte' && (!gam_data['v_mode'] || pla_data['act'] <= 0)) {
            _err = 8;
        } else if (__store[_id].action == 'vtb' && !gam_data['v_mode']) {
            _err = 10;
        } else if (__store[_id].action == 'dead' && !pla_data['dead']) {
            _err = 11;
        } else if (pla_data['shackles']) {
            _err = 12;
        }
    }
    if (id) {
        mas = [id];
    }
    let noobs = [];
    if (!_err && mas.length) {
        if (need_close_title) {
            console.debug('mas before', mas);
            mas = mas.filter(id => {
                return !$(`#upl_${id}`).find('.ico').attr('title');
            });
            console.debug('mas after', mas);
        }
        if (need_talent) {
            noobs = mas.filter(id => {
                return !player_talents[id] || player_talents[id] < 60;
            });
            if (noobs.length) {
                mas = noobs;
            }
        }
        if (!mas.length) {
            console.debug('use extra filter');
            return false;
        }
        $.ajax({
            async: true,
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'ext_use',
                id: extra,
                se: 1,
                uid: mas[rndm(mas.length)]
            },
            dataType: 'json',
            success: function (data) {
                if (typeof data.rpx != 'undefined') {
                    RPX_data_arr.push(data.rpx);
                    if (!RPX_event_done) {
                        RPX_event_done = true;
                        RPX_event();
                    }
                }

                if (typeof data.ret == 'undefined') {
                    return console.debug('return data.ret undefined', data.ret);
                }
                if (__store[_id] && __store[_id].type == 'extra' && typeof __store[_id]['let'] != 'undefined' && parseInt(data.ret)) {
                    pla_data['e' + _id] = data.ret;
                }
                if (__store[_id] && __store[_id].type == 'extra' && __store[_id].limit) {
                    if (!pla_data['el' + _id]) {
                        pla_data['el' + _id] = 1;
                    } else {
                        pla_data['el' + _id]++;
                    }
                }
                _GM_action('gxt', 'exts', 'set', [_id]);
                _GM_action('exl', 'exts', 'upd', [_id]);
            }
        });
        return true;
    }
    // console.debug('return not', _err, mas);
    return false;
}

function hideMenu() {
    $('#form').hide();
}

function showMenu() {
    $('#form').toggle();
}

function hideElem(id, elem) {
    if (elem.children[0].innerText == '-') {
        $('#' + id).css('display', 'none');
        elem.children[0].innerText = '+';
    } else {
        $('#' + id).css('display', 'flex');
        elem.children[0].innerText = '-';
    }
}

function createQuestMenu() {
    let nothing_list = [2, 3, 4, 9, 10, 11, 12, 30, 31];
    let s = '<ul>';
    for (let key in __evq) {
        if (key >= 64 && key <= 104) {
            continue;
        }
        if (key >= 121) {
            continue;
        }
        s += `<li>
        <p>${__evq[key].title}<p>
        <select id='quest_${key}' >
            <option selected value='nothing'>Ничего не делать</option>
            <option value='cancel'>Отменять</option>
            <option value='doit' ${nothing_list.includes(key) ? 'disabled' : ''}>Выполнять</option>
        </select>
        </li>`;
    }
    s += '</ul>';

    $('body').append(`<div id="quest_menu" class="select_quest_menu">
        <input class="menubtn" type="button" onclick="$('#quest_menu').hide()" value="X"> </div>
    </div>`);
    $('#quest_menu').hide();
    $('#quest_menu').append(s);
}

async function toBlacklist(uid) {
    const uids = await getBlacklist();
    console.debug('uids', uids);
    if (!uids.includes(uid.toString())) {
        _MBK(uid);
        return $('.toBlacklist').text('Игрок добавлен');
    }
    return $('.toBlacklist').text('Уже был добавлен');
}

function makeFake(uid) {
    const extras = extras_for_search.slice(0, 3);
    const evil_keys = [2, 3, 9, 25, 26, 43, 21, 24];
    const roles = [];
    for (let e_key of evil_keys) {
        if (gam_data.v_left[e_key]) {
            roles.push(t_persons[e_key]);
        }
    }
    if (!roles.length) {
        return;
    }
    const nick = $('#upl_' + uid).find('.nick').text();
    $('.chatInput > textarea').val('');
    $('.chatInput > textarea').val(extras[rndm(extras.length)] + nick + ' - ' + roles[rndm(roles.length)]);
}

function countOfAll() {
    if (Array.isArray(gam_data.v_left)) {
        return fillPlayers().length;
    }
    return Object.keys(gam_data['v_left']).reduce((sum, key) => {
        return sum + parseInt(gam_data['v_left'][key]);
    }, 0);
}

function countOfEvil() {
    return countOf(0);
}

function countOfByType(type) {
    switch (type) {
        case 'maf':
            return gam_data['v_left'][2] ? parseInt(gam_data['v_left'][2]) : 0;

        case 'boss':
            return gam_data['v_left'][9] ? parseInt(gam_data['v_left'][9]) : 0;

        case 'dvul':
            return gam_data['v_left'][25] ? parseInt(gam_data['v_left'][25]) : gam_data['v_left'][26] ? parseInt(gam_data['v_left'][26]) : 0;

        case 'gr':
            return gam_data['v_left'][1] ? parseInt(gam_data['v_left'][1]) : 0;

        case 'man':
            return gam_data['v_left'][3] ? parseInt(gam_data['v_left'][3]) : 0;

        case 'amigos':
            let count = 0;
            count = gam_data['v_left'][43] ? count + gam_data['v_left'][43] : count;
            count = gam_data['v_left'][21] ? count + gam_data['v_left'][21] : count;
            count = gam_data['v_left'][24] ? count + gam_data['v_left'][24] : count;
            return count;
    }
}

function countOf(param) {
    if (typeof gam_data['v_left'] != 'undefined') {
        var _team_c = [0, 0];
        $.each(gam_data['v_left'], function (_k, _v) {
            _team_c[__team_by_person(_k)] += parseInt(_v);
        });
    }
    return _team_c[param];
}

function countOfPeace() {
    return countOf(1);
}

function countOfMafs() {
    if (!Array.isArray(gam_data.v_left)) {
        return countOfByType('maf') + countOfByType('boss') + countOfByType('dvul');
    } else {
        const maf_list = ['Двуликий', 'Мафиози', 'Босс мафии'];
        let count = 0;
        $('#upl_list').find('.ico').each((i, elem) => maf_list.includes($(elem).prop('title')) ? count++ : count);
        return count;
    }
}

function getEventTask() {
    return new Promise((resolve, ) => {
        $.ajax({
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'evMrkFattony2019_scene',
                id: my_id,
            },
            dataType: 'json',
            success: (data) => resolve(data),
            error: () => resolve(null)
        });
    });
    //	return {'gold':0,'arr':['8','58029',['6','15','2'],['0','0','1'],['4','0','0'],'0','0'],'tt':403629,'box':['0','0','0']};
}

function optimMaf() {
    if ($('#isOptimSound').prop('checked')) {
        soundManager.disable();
        soundManager.enabled = false;
    }
    if ($('#isOptimGifts').prop('checked') && !_GM_action.toString().includes('false && arr && arr[9]')) {
        let gm_action = _GM_action.toString().replace('arr && arr[9]', 'false && arr && arr[9]').replace('function _GM_action(obj, act, val, arr){', '');
        gm_action = gm_action.slice(0, gm_action.length - 1);
        window['_GM_action'] = Function('obj', 'act', 'val', 'arr', gm_action);
    }
    if ($('#isOptimSmiles').prop('checked')) {
        _BB_smile = (txt) => {
            if (typeof txt == 'undefined' || txt == null) {
                return '';
            }
            return txt;
        };
    }
    if ($('#isOptimChat').prop('checked')) {
        console.debug('Отключаю чат');
        _CHT_append = (t, s) => {
            if (t == 'cco' && gam_state != 'play')
                return;
            $('#' + t + '_log').append(s).divAutoScroll('update');
        };
    }

}

function coloringPlayers(isEnemy, mas) {
    if (!mas.length)
        return;
    if (!gam_state) {
        $('#gml_list').find('.link').each((index, element) => {
            let id = $(element).prop('onclick').toString().match(/\d+/)[0];
            if (id != my_id && mas.includes(String(id))) {
                $(element).css({
                    'color': isEnemy ? 'red' : 'green'
                });
            }
        });
    } else if (gam_state == 'def') {
        $('.player').each((index, element) => {
            let id = $(element).prop('id').match(/\d+/)[0];
            if (id != my_id && mas.includes(String(id))) {
                $(element).css({
                    'color': isEnemy ? 'red' : 'green'
                });
            }
        });
    } else if (gam_state == 'play') {
        $('#upl_list li').each((i, elem) => {
            const uid = $(elem).prop('id').substr(4);
            if (uid != my_id && mas.includes(String(uid))) {
                $(elem).find('.nick').css({
                    'color': isEnemy ? 'red' : 'green'
                });
            }
        })
    }
}

function isDuel() {
    return ((new Date().getDay() == 0 || new Date().getDay() == 6));
}

function createWindow(type) {
    switch (type) {
        case 'duel':
            if (!$('#pp_dlg_duel_results').length) {
                $('body').append('<div id="pp_dlg_duel_results" class="popup-move confirm-dlg ui-draggable ui-draggable-handle" style="margin-top:10px;cursor:default;width:140px;margin:0 auto">' +
                    '<div class="popup-bg" style="margin: 0; padding: 0;">' +
                    '<p id="duel_results_text_1" style="text-align:center; margin: 0">-1:-1</p><br>' +
                    '<p id="duel_results_text_2" style="text-align:center; margin: 0">-1:-1</p><br>' +
                    '<p id="duel_results_text_3" style="text-align:center; margin: 0">-1:-1</p><br>' +
                    '<a href=\'#\' onclick=\'_DLG("duel_results", 1, event);return false\'class=\'popup-close\' hidefocus=\'true\'></a>' +
                    '</div>');
                $('#pp_dlg_duel_results').draggable();
            }
            break;
    }

}

function sendPresent(id, uid, text, cr, hd) {
    console.debug('Send present', id, uid, text, cr);
    return new Promise((resolve) => {
        $.ajax({
            async: true,
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'gift_do',
                args: {
                    id,
                    uid,
                    text,
                    cr: cr ? '1' : '0',
                    hd: hd ? '1' : '0'
                }
            },
            dataType: 'json',
            success: function () {
                resolve();
            }
        });
    });
}

async function sendPresents() {
    console.debug('send presents');
    let max = $('#count_presents').val();
    const id = $('#present_id_select').val();
    const uid = $('#player_id').val();
    const ryadi = +$('#ryadi').prop('checked');
    const hd = +$('#privat').prop('checked');
    for (let i = 0; i < max; i++) {
        await sendPresent(id, uid, '.', ryadi, hd);
        $('#count_presents').val($('#count_presents').val() - 1);
    }
}

function getPlayersInfo(data) {
    return new Promise(resolve => {
        $.ajax({
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'scrl_req',
                ids: data.map(val => {
                    return 'uol_' + val;
                })
            },
            dataType: 'json',
            success: function (data) {
                resolve(data.arr || []);
            }
        });
    });
}

function getOnlinePlayers() {
    return new Promise(resolve => {
        $.ajax({
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'uol_find',
                'val': '%%%'
            },
            dataType: 'json',
            success: function (data) {
                resolve(data.ids);
            }
        });
    });
}

function getBdPlayers(type, args) {
    return new Promise(resolve => {
        $.ajax({
            type: 'GET',
            url: my_id == 5799047 ? `https://bestmafiastat.ru/getPlayers?type=${type}&args=${args}` : `https://bestmafiastat.ru/getPlayers?type=${type}&args=${args}`,
            dataType: 'json',
            success: function (data) {
                if (data.status == 'ok')
                    return resolve(data.items);

                console.error(data.text);
                $('#popup_info_message').text('Ошибка при получении ответа от сервера');
                resolve([]);
            }
        });
    });
}

function getBlacklist() {
    return new Promise(resolve => {
        $.ajax({
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'blocks'
            },
            dataType: 'json',
            success: function (data) {
                resolve(data.arr ? data.arr.map(val => {
                    return val[0];
                }) : data);
            }
        });
    });
}

async function getPlayers(type) {
    let res;
    switch (type) {
        case 'from_vk':
            res = await getBdPlayers('from_vk', $('#popup_from_vk').val());
            break;
        case 'may_list':
            res = await getBdPlayers('may_list');
            break;
        case 'man':
            res = await getBdPlayers('man');
            break;
        case 'online':
            res = await getOnlinePlayers();
            break;
        case 'moders':
            res = await getOnlinePlayers();
            console.debug('res', res);
            let mas = [];
            while (res.length) {
                const info = await getPlayersInfo(res.splice(0, 999));
                console.debug(info);
                for (const key in info) {
                    info[key][3] && info[key][3][2] == 1 ? mas.push({
                        name: info[key][1],
                        id: key.substr(4)
                    }) : null;
                }
            }

            res = mas;
            break;
        case 'offline_player':
            res = await getBdPlayers('nick', $('#popup_offline_player').val());
            break;
        case 'id':
            res = await getBdPlayers('id', $('#popup_player_nick').val());
            break;
        case 'clan':
            res = await getBdPlayers('clan', $('#popup_clan_id').val());
            break;
        default:
            console.warn('bad type');
    }
    return res;
}

async function blackList(type) {
    let bd_list, players;
    switch (type) {
        case 'man':
        case 'online':
            bd_list = await getBlacklist();
            players = await getPlayers(type);
            players.forEach(val => bd_list.includes(val) || soclans_ids.includes(val) ? null : _MBK(val));
            console.debug('Успешно');
            break;

        case 'room':
            $('#upl_list').children().each((i, elem) => {
                _MBK($(elem).attr('id').substr(4));
            });
            console.debug('Успешно');
            break;

        case 'clan':
            bd_list = await getBlacklist();
            players = await getPlayers(type);
            players.forEach(val => bd_list.includes(val) ? null : _MBK(val.player_id));
            console.debug('ok');
            $('#popup_info_message').text(`Успешно заблокировано ${players.length} игроков`);
            break;

        case 'clear':
            bd_list = await getBlacklist();
            bd_list.forEach(val => _MBK(val));
            console.debug('Успешно');
            break;
    }
}

async function createMenuPopup(type) {
    let clan_id, offline_player, player_nick, str, val, players, player, moders, from_vk;
    if ($(`#pp_dlg_ch_${type}`).length) {
        clan_id = $('#popup_clan_id').val();
        offline_player = $('#popup_offline_player').val();
        from_vk = $('#popup_from_vk').val();
        player_nick = $('#popup_player_nick').val();
        $(`.menu_popup_bg.${type}`).empty();
        $('#popup_info_message').val('');
    } else {
        $('body').append(`
		<div id="pp_dlg_ch_${type}" class="popup-move confirm-dlg ui-draggable ui-draggable-handle menu_popup" > 
			<div class="popup-bg menu_popup_bg ${type}">
				
			</div> 
			<a onclick="_DLG('ch_${type}', 1, event);return false"class="popup-close" hidefocus="true"></a>
	
			<p id='popup_info_message'> </p>
		</div>`);
        $(`#pp_dlg_ch_${type}`).draggable();
    }
    switch (type) {
        case 'presents':
            let select_present = '';
            let _dsc = await getDiscount();
            __store_sort.forEach(val => {
                if (__store[val]) {
                    let _row = __store[val];
                    if (_row.type == 'gift') {
                        let isDiscount = val == _dsc[0] || (val == _dsc[3] && _row.price != _dsc[4]);
                        isDiscount = isDiscount || (val == _dsc[1] && _row.price != _dsc[2]);
                        let isMega = _row.ext == 'swf';
                        let price = isDiscount ?
                            val == _dsc[0] ?
                            _row.price / 2 :
                            val == _dsc[3] ?
                            _dsc[4] :
                            val == _dsc[1] ?
                            _dsc[2] : _row.price : _row.price;

                        select_present += `<option value="${val}" ${isDiscount ? 'class = "discount" ' : ''} ${val == _dsc[0] ? 'selected' : ''}>
							${isMega ? 'МЕГА ' : ''} ${isDiscount ? _row.title + ' (скидка)' : _row.title}${' ' + price}
							</option>`;
                    }
                }
            });

            $(`.menu_popup_bg.${type}`).append(`
				<h1 center>Чит на подарки</h1>
				<input class='menu_popup_input_val' id="player_id" placeholder="id игрока"> 
					Подарок:
					<select id='present_id_select'>
					  ${select_present}
					</select>
				<input class='menu_popup_input_val' id="count_presents" placeholder="Кол-во подарков\\рядов">
				<div class = 'menu_popup_checkbox'>
					<label>Ряды:</label>
					<input type="checkbox" name="ryadi" id="ryadi" checked>
				</div>
				<div class = 'menu_popup_checkbox'>
					<label>Приватно:</label>
					<input type="checkbox" name="privat" id="privat">
				</div>
				<button id="send_pres" onclick="sendPresents()" class="footer-buttons" hidefocus="true">Отправить</button>
			`);
            break;
        case 'moders':
            moders = await getPlayers('moders');
            str = '';
            moders.forEach(val => str += `<a onclick="_PRF('${val.id}')">${val.name}</a>`);
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Модераторы</h1> ${str}`);
            break;

        case 'my_id':
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Мой айди</h1> 
			<input class='menu_popup_input_val' value="${my_id}">`);
            break;

        case 'id_wedding':
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Айди жены</h1> 
			<input class='menu_popup_input_val' value="${my_wedding || 'неизвестно'}">`);
            break;
        case 'clan':
            $(`.menu_popup_bg.${type}`).append(`
				<h1 center>В чс клан</h1>
				<input class='menu_popup_input_val' id="popup_clan_id" placeholder="айди или название"> 
				<button id="send_pres" onclick="blackList('clan')" class="footer-buttons" hidefocus="true">Отправить</button>
			`);
            break;

        case 'from_vk':
            $(`.menu_popup_bg.${type}`).append(`
                    <h1 center>Поиск игрока по ссылке вк</h1>
                    <input class='menu_popup_input_val' id="popup_from_vk" placeholder="Ссылка вк"> 
                    <button id="send_pres" onclick="createMenuPopup('from_vk')" class="footer-buttons" hidefocus="true">Найти</button>
                `);
            $('#popup_from_vk').val(from_vk);
            if (!$('#popup_from_vk').val()) {
                return;
            }
            players = await getPlayers('from_vk');
            str = '';
            players.forEach(val => str += `<a onclick="_PRF('${val.player_id}')">${val.name}</a>`);
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Подходящие игроки:</h1> ${str}`);
            break;

        case 'offline_player':
            $(`.menu_popup_bg.${type}`).append(`
				<h1 center>Поиск игрока</h1>
				<input class='menu_popup_input_val' id="popup_offline_player" placeholder="часть ника"> 
				<button id="send_pres" onclick="createMenuPopup('offline_player')" class="footer-buttons" hidefocus="true">Найти</button>
			`);
            $('#popup_offline_player').val(offline_player);
            val = $('#popup_offline_player').val();
            if (val.length < 3) {
                return $('#popup_info_message').text('Длина должна быть не меньше трех');
            }
            console.debug('debug val', val);
            players = await getPlayers('offline_player', val);
            str = '';
            players.forEach(val => str += `<a onclick="_PRF('${val.player_id}')">${val.name}</a>`);
            console.debug('str', str);
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Подходящие игроки:</h1> ${str}`);


            break;
        case 'clan_list':
            $(`.menu_popup_bg.${type}`).append(`
				<h1 center>Поиск клана</h1>
				<input class='menu_popup_input_val' id="popup_clan_id" placeholder="Айди или название"> 
				<button id="send_pres" onclick="createMenuPopup('clan_list')" class="footer-buttons" hidefocus="true">Загрузить</button>
			`);
            $('#popup_clan_id').val(clan_id);
            val = $('#popup_clan_id').val();
            if (!val) {
                return $('#popup_info_message').text('Укажите айди или название клана');
            }
            players = await getPlayers('clan', val);
            str = '';
            players.forEach(val => str += `<a onclick="_PRF('${val.player_id}')">${val.name}</a>`);
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Игроки клана:</h1> ${str}`);
            break;
        case 'id':
            $(`.menu_popup_bg.${type}`).append(`
				<h1 center>Поиск айди игрока</h1>
				<input class='menu_popup_input_val' id="popup_player_nick" placeholder="Ник игрока"> 
				<button id="send_pres" onclick="createMenuPopup('id')" class="footer-buttons" hidefocus="true">Найти</button>
			`);

            $('#popup_player_nick').val(player_nick);
            val = $('#popup_player_nick').val();
            if (!val) {
                return $('#popup_info_message').text('Укажите имя игрока');
            }
            player = await getPlayers('id', val);

            $(`.menu_popup_bg.${type}`).append(`<h1 center>Айди игрока</h1> 
			<input class='menu_popup_input_val' value="${player.length ? player[0].player_id : 'неизвестно'}">`);


            break;
        case 'prof_from_id':
            $(`.menu_popup_bg.${type}`).append(`
            <h1 center>Открыть профиль игрока</h1>
                <input class='menu_popup_input_val' id="popup_player_nick" placeholder="Айди игрока"> 
                <button onclick="createMenuPopup('prof_from_id')" class="footer-buttons" hidefocus="true">Открыть</button>
            `);

            $('#popup_player_nick').val(player_nick);
            val = $('#popup_player_nick').val();
            if (!val) {
                return $('#popup_info_message').text('Укажите айди игрока');
            }
            _PRF(val);
            break;
        case 'my_vk':
            $(`.menu_popup_bg.${type}`).append(`
                <h4>Ваш профиль привязан к вк:</h4>
                <input class="menu_popup_vk" type="text">
                <p class="menu_popup_vk_result" type="text"></p>
                <button onclick="changeVk()" class="footer-buttons" hidefocus="true">Привязать</button>
                `);
            getVkId();
            break;
        case 'check_blacklist':
            $(`.menu_popup_bg.${type}`).append(`
                    <p class="current_black_status"></p>
                    <h4>У кого в чс:</h4>
                    <input id="to_blacklist_answer" type="checkbox"> <label for="to_blacklist_answer">Добавлять во взаимный чс</label>
                    <p class="menu_popup_black"></p>
                    <button id="start_black" onclick="startCheckBlacklist()" class="footer-buttons" hidefocus="true">Старт</button>
                    `);

            break;
        case 'check_bj':
            /* socket.send(JSON.stringify({
                 type: 'checked'
             }));*/
            $(`.menu_popup_bg.${type}`).append(`
                <p class="current_bj_status"></p>
                <h4>Список кинувших:</h4>
                <p class="menu_popup_bj"></p>
                <button id="start_bj" onclick="startCheckBj()" class="footer-buttons" hidefocus="true">Обновить</button>
                <button id="start_bj" onclick="clearBj()" class="footer-buttons" hidefocus="true">Clear</button>
                <button id="start_bj" onclick="stopCheckBj()" class="footer-buttons" hidefocus="true">Stop</button>
                `);

            $('#pp_dlg_ch_nick').addClass('bj_popup');
            break;
        case 'check_bj_server':
            /* socket.send(JSON.stringify({
                 type: 'checked'
             }));*/
            $(`.menu_popup_bg.${type}`).append(`
                <p class="current_bj_status"></p>
                <h4>Список кинувших:</h4>
                <p class="menu_popup_bj"></p>
                <button id="start_bj" onclick="updateBj(true)" class="footer-buttons" hidefocus="true">Обновить</button>
                `);

            $('#pp_dlg_ch_nick').addClass('bj_popup');
            break;
        case 'check_send_server':
            /* socket.send(JSON.stringify({
                 type: 'checked'
             }));*/
            $(`.menu_popup_bg.${type}`).append(`
                    <p class="current_bj_status"></p>
                    <h4>Список кинувших:</h4>
                    <p class="menu_popup_bj"></p>
                    <button id="start_bj" onclick="updateBj(false)" class="footer-buttons" hidefocus="true">Обновить</button>
                    `);

            $('#pp_dlg_ch_nick').addClass('bj_popup');
            break;
        case 'load_settings':
            $(`.menu_popup_bg.${type}`).append(`
                <p>Сообщите желающему загрузить ваши настройки ваш пароль и айди</p>
                <h4>Ваш пароль:</h4>
                <p class="enc_part">${my_enc_id.substr(0, 8)}</p>
                <input class='menu_popup_input_val' id="popup_settings_uid" placeholder="Айди игрока"> 
                <input class='menu_popup_input_val' id="popup_settings_password" placeholder="Пароль игрока"> 
                <button id="start_bj" onclick="loadCustomSettings()" class="footer-buttons" hidefocus="true">Загрузить</button>
                `);

            break;
        case 'listen':
            $(`.menu_popup_bg.${type}`).append(`
                <h1 center>Прослушка чата</h1>
                <input class='menu_popup_input_val' id="popup_listen_clan_id" placeholder="Айди клана"> 
                <input class='menu_popup_input_val' id="popup_listen_clan_name" placeholder="Название клана"> 
                <button id="send_pres" onclick="addListenChat()" class="footer-buttons" hidefocus="true">Начать прослушку</button>
                `);
            break;

        case 'spam':
            $(`.menu_popup_bg.${type}`).append(`
            <h1 center>Расылка сообщений</h1>
            <p class='spam_popup_info'></p>
            <input class='menu_popup_input_val' id="popup_spam_text" placeholder="Текст"> 
            <input class='menu_popup_input_val' id="popup_spam_min_talant" placeholder="Мин. званка"> 
            <input class='menu_popup_input_val' id="popup_spam_interval" placeholder="Скорость в секундах"> 
            <button onclick="startSpam()" class="footer-buttons" hidefocus="true">Начать</button>
            <button onclick="stopSpam()" class="footer-buttons" hidefocus="true">Остановиться</button>
            `);
            break;
        case 'big_eggs':
            $(`.menu_popup_bg.${type}`).append(`
            <h1 center>Кидать динамиты</h1>
            <p class='big_eggs_popup_info'></p>
            <p class='big_eggs_popup_count'></p>
            <button id="send_pres" onclick="startBigEggs()" class="footer-buttons" hidefocus="true">Кидать</button>
            <button id="send_pres" onclick="stopBigEggs()" class="footer-buttons" hidefocus="true">Остановиться</button>
        `);
            break;
        case 'may_list':
            players = await getPlayers('may_list');
            str = '';
            players.forEach(val => str += `<a onclick="_PRF('${val.player_id}')">${val.name}</a>`);
            $(`.menu_popup_bg.${type}`).append(`<h1 center>Список майских</h1> ${str}`);
            $(`.menu_popup_bg.${type}`).append('<button id="send_pres" onclick="createMenuPopup(\'may_list\')" class="footer-buttons" hidefocus="true">Обновить</button>');

            break;
        case 'bot_info':
            $(`.menu_popup_bg.${type}`).append(`<h4 center>Состояние бота:</h4> <p>${pay_bot_text}</p><br>`);
            $(`.menu_popup_bg.${type}`).append(`<h4 center>Состояние дуэльного меню: </h4><p>${pay_menu_text}<p>`);
            break;
        case 'custom_extra_position':
            showAllExtras();
            enableSortable();
            break;
    }
}

function changeVk() {
    $.ajax({
        url: `https://bestmafiastat.ru:1201/changeVk`,
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            uid: my_id,
            enc_part: my_enc_id.substr(0, 8),
            vkId: $('.menu_popup_vk').val()

        },
        success: (answer) => $('.menu_popup_vk_result').text(answer.status)
    });
}

function getVkId() {
    $.ajax({
        url: `https://bestmafiastat.ru:1201/getVk`,
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            uid: my_id,
            enc_part: my_enc_id.substr(0, 8)
        },
        success: (answer) => $('.menu_popup_vk').val(answer.item)
    });

}

function getBjInfo(onlyBj) {
    let stat;
    $.ajax({
        url: `https://bestmafiastat.ru/${onlyBj ? 'getBjStat' : 'getSendStat'}`,
        method: 'GET',
        async: false,
        success: (answer) => stat = answer.data
    });
    return stat;
}

function updateBj(onlyBj) {
    console.debug('start updateBj');
    $('.menu_popup_bj').children().remove();
    const data = getBjInfo(onlyBj);
    console.debug('get bj data', data);
    console.debug('try append to', $('.menu_popup_bj').length);
    for (let bj of data) {
        $('.menu_popup_bj').append(`
        <div class="bj_row">  
            <div class="bj_time">${new Date(bj.time).toLocaleTimeString()}</div>
            <div class="bj_nick"><a onclick="_PRF('${bj.uid}')">${bj.nick || bj.uid}</a></div>
            <div class="bj_count">${bj.count}</div> 
            <div class="bj_money">${bj.money}</div> 
        </div>`);
    }
}

function checkBlacklist(uid) {
    return new Promise(resolve => {
        let count = -2;
        $.ajax({
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'achievements',
                id: uid,
                args: [1, 2, '1110']
            },
            dataType: 'json',
            success: function (data) {
                if (data.ret) {
                    count = 1;
                }

                resolve(Number(count));
            },
            error: function () {
                resolve(Number(count));
            }
        });
    });
}

let black_interval;
async function startCheckBlacklist() {
    if (black_interval) {
        return;
    }
    $('.menu_popup_black').children().remove();
    const black_players = await getBlacklist();
    let players = await getOnlinePlayers();

    const max = players.length;
    const black_answer = $('#to_blacklist_answer').prop('checked');
    black_interval = setInterval(async () => {
        if (!players.length) {

            current_checked_bj_players = {};
            clearInterval(black_interval);
            black_interval = null;
            return;
        }
        $('.current_black_status').text(`Проверен ${max - players.length} из ${max}`);
        const player = players.pop();
        const count = await checkBlacklist(player);
        if (count < 0) {
            const together = black_players.includes(player);
            let label = '';
            if (black_answer && !together) {
                toBlacklist(player);
                label = 'Добавлен';
            } else if (together) {
                label = 'Взаимный чс';
            } else if (!together && !black_answer) {
                label = 'Невзаимный чс';
            }
            $('.menu_popup_black').append(`<div class="black_player">${label}  <a onclick="_PRF('${player}')">${player}</a></div>`);
        }
    }, 100);
}


function stopBigEggs() {
    clearInterval(check_big_eggs_interval);
    check_big_eggs_interval = null;

    clearInterval(global_big_eggs_interval);
    global_big_eggs_interval = null;

    clearInterval(send_big_eggs_interval);
    send_big_eggs_interval = null;

    eggs_count = 0;
    $('.big_eggs_popup_info').text('Остановлен');
}

function setGlobalBigEggsInterval() {
    let soclans_ids_for_eggs = [];
    soclans_ids_for_eggs = soclans_ids;

    if (!soclans_ids_for_eggs.length) {
        stopBigEggs();
        return;
    }
    selected_big_eggs_id = soclans_ids_for_eggs.shift();
    $('.big_eggs_popup_info').text('Осталось ' + soclans_ids_for_eggs.length + ' человек');
    console.debug('выбрал цель', selected_big_eggs_id);
    let i = 0;
    clearInterval(send_big_eggs_interval);
    send_big_eggs_interval = setInterval(() => {
        if (++i >= 15) {
            return clearInterval(send_big_eggs_interval);
        }
        console.debug('кидаю в', selected_big_eggs_id);
        sendErase(selected_big_eggs_id);
    }, 1500);
}

function startBigEggs() {
    if (!check_big_eggs_interval) {
        check_big_eggs_interval = setInterval(() => {
            $('.giftRecieved').each((i, elem) => {
                try {
                    let id = $(elem).find('.nick-from').eq(0).find('img').prop('onclick').toString().match(/\d+/g)[0];
                    if (selected_big_eggs_id == id && !$(elem).hasClass('egg_checked') && $(elem).text().includes('Мега-')) {
                        $(elem).addClass('egg_checked');
                        eggs_count++;
                        $('.big_eggs_popup_count').text('Всего кинуто ' + eggs_count + ' динамитов');
                        console.debug('Кинул мега-наклейку, прекращаю кидать');
                        clearInterval(send_big_eggs_interval);
                        send_big_eggs_interval = null;
                        return;
                    }
                } catch (e) {
                    console.debug('remove', $(elem).text());
                    $(elem).remove();
                }

            });
        }, 1000);
        setGlobalBigEggsInterval();
        global_big_eggs_interval = setInterval(setGlobalBigEggsInterval, 30000);
    }


}

function sendErase(id) {
    $.ajax({
        async: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'eraser',
            id: id,
        },
        dataType: 'json',
        success: function () {

        }
    });
}

function perebros() {
    window.location.replace('http://www.bestmafia.com/standalone/' + PAGE_goto.toString().match(/[\d\w]{32}/)[0]);
}

function getWedding() {
    $.ajax({
        async: true,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'prf',
            id: my_id,
            tab: 'profile',
            args: false
        },
        dataType: 'json',
        success: function (data) {
            if (data && data.arr && data.arr[10] && data.arr[10][0]) {
                my_wedding = data.arr[10][0];
            }
        },
        error: (error) => console.debug(error)
    });

}

function changeSex() {
    $.ajax({
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'ch_gender'
        },
        dataType: 'json',
        success: function (data) {
            if (typeof data.ret != 'undefined') {
                my_gender = data.ret;
                console.debug('успешно');
            }
        }
    });
}

function getDiscount() {
    return new Promise(resolve => {
        $.ajax({
            async: false,
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'gift_dsc',
                uid: my_id
            },
            dataType: 'json',
            success: function (data) {
                resolve(data.ret);
            }
        });
    });
}

function canChangeJail() {
    let jail = $('.jail').last().find('em');
    if (!jail.length) {
        return {
            isCan: true,
            leader: 'none'
        };
    }
    let oprCount = +jail.text().match(/оправдать: \d+/)[0].match(/\d+/);
    let prigCount = +jail.text().match(/приговорить: \d+/)[0].match(/\d+/);
    let pereves = Math.abs(oprCount - prigCount);
    if (pereves <= 1) {
        return {
            isCan: true,
            leader: oprCount > prigCount ? 'opr' : 'prig'
        };
    } else if (pereves > 1 + rndm(3)) {
        return {
            isCan: false,
            leader: oprCount > prigCount ? 'opr' : 'prig'
        };
    }
    return {
        isCan: null,
        leader: oprCount > prigCount ? 'opr' : 'prig'
    };
}

function showInstruction() {
    let _popup = {
        is: true,
        key: '',
        tmpl: '',
        body: '',
        bt_close: true,
        bt_ttl: 'Продолжить',
        bt_act: '',
    };
    _popup.key = 'instruction';
    _popup.tmpl = 'baseSettings';
    _popup.body = `<h1>Инструкция по трансляции привата в вк<br /></h1>
		<div class='duel_menu_popup_text'>
		<p>Функция позволяет получать все сообщения из привата во время игры непосредственно в сообщения вконтакте. Для этого необходимо вступить в <a href='https://vk.com/club179064577' target='_blank'>эту группу</a> и разрешить группе присылать сообщения, затем указать айди вк в меню </p>
		<br><br>
		<p>По всем вопросам и предложениям обращаться <a href='https://vk.com/chaaappa' target='_blank'>сюда</a>.</p>
		</div>`;
    _popup.is = true;
    showPopup(_popup);
}

function showPopup(_popup) {
    if (!$('#wnd_lea_inf' + _popup.key).length) {
        $('#popup_container').append('<div id="wnd_lea_inf' + _popup.key + '" class="' + _popup.tmpl + ' popup-move popupShadowNew not-displayed">' +
            _popup.body +
            '<div class="footerButtons">' +
            '<button onclick="if ($(this).hasClass(\'not-active\')) return false;' + _popup.bt_act + '_WND_proc(\'\', \'close\', \'lea_inf' + _popup.key + '\');return false" ondblclick="return false" class="newButton' + (_popup.bt_tm > 0 ? ' not-active' : '') + '" hidefocus="true">' + _popup.bt_ttl + '</button>' +
            '</div>' +
            (_popup.bt_close ? '<a href="#" class="popupClose" onclick="' + _popup.bt_act + '_WND_proc(\'\', \'close\', \'lea_inf' + _popup.key + '\');return false"></a>' : '') +
            '</div>');

        $('#wnd_lea_inf' + _popup.key).css('left', (parseInt((parseInt($('#rootContainer').outerWidth()) - 20) / 2) - hdr_offset_x - parseInt(parseInt($('#wnd_lea_inf' + _popup.key).outerWidth()) / 2)) + 'px');

        $('#wnd_lea_inf' + _popup.key).draggable({
            containment: 'document',
            cancel: 'button,.popupClose',
            zIndex: 100,
            stop: function () {
                $(this).mousedown();
            }
        }).mousedown(function () {
            let _i = $(this).attr('id');
            let _z = _POPUP_resort('popup-move', _i);
            $(this).css('z-index', _z);
        }).show('fade', 100, function () {
            $(this).removeClass('not-displayed');
            $(this).mousedown();
            $(this).css('top', (parseInt(parseInt($('#rootContainer').outerHeight()) / 2) - parseInt(parseInt($(this).outerHeight()) / 2)) + 'px');
        });
    } else {
        $('#wnd_lea_inf' + _popup.key).mousedown();
    }
}

function createMessagePopup() {
    let _popup = {
        is: true,
        key: '',
        tmpl: '',
        body: '',
        bt_close: true,
        bt_ttl: 'Продолжить',
        bt_act: '',
    };
    _popup.key = '_duel_menu';
    _popup.tmpl = 'baseSettings';
    _popup.body = `<h1>Дуэльный помощник</h1>
	<div class='duel_menu_popup_text'>
	<p>	-Обновлено на эвентовые заданки</p>
    <p>	-Заяц в первую ночь будет ходить к супругу</p>
    <p> -Бюры больше не должны кидаться на свою команду </p>
    <p>	Протестированы еще не все эвентовые функции, если что-то не работает - сообщайте, будут исправлены</p>
	<p> Так же, 04.04.2019 года в период с 00:00 и до утра по московскому времени будут проводиться плановые работы по обновлению программного обеспечения сервера, во время которых будет недоступна игра на меню </p>
    <br><br>
    <p><a href='https://vk.com/club179064577' target='_blank'> Наша группа здесь </a></p>
	
	<p>По всем вопросам и предложениям обращаться <a href='https://vk.com/chaaappa' target='_blank'>сюда</a>. Предлагайте, по возможности, всё будет реализовано</p>
	</div>`;
    _popup.is = true;
    showPopup(_popup);
}

function fillRolePrivateFind(i, prvtMsg, msg, role, nick, remove) {
    if (prvtMsg.includes(msg.toLowerCase()) && !msg.includes('?') && !msg.includes('архив')) {
        if (remove) {
            console.debug('УДАЛЯЮ', i, msg, $('.message-to-me').eq(i)[0], $('.message-to-me').eq(i).text());
            $('.message-to-me').eq(i).remove();
            privateMessages = [];
        } else {
            privateMessages.push({
                nick: nick,
                role: role
            });
        }
    }
}

function message(val, mth = 1, uid) {
    var _o = {};
    switch (mth) {
        case 1: //приват
            _o['pv'] = uid;
            break;
        case 2: //общий чат
            _o = {};
            break;
        case 3: //чат мафии
            _o['mf'] = 1;
            break;
        case 4: //тони
            _o['tf'] = 1;
            break;
        case 5: //крик
            _o['sm'] = 1;
            break;
    }

    $.ajax({
        async: true,
        cache: false,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'cht_send',
            sd: 1,
            val: val,
            opt: _o
        },
        dataType: 'json',
        success: function (data) {
            if (typeof data.rpx != 'undefined') {
                RPX_data_arr.push(data.rpx);
            }
        },
        error: (error) => console.error('send message error', error)
    });
}

function sayMyRole(uid) {
    const my_role = role();
    if (!private_says[my_role]) {
        return console.warn('Не знаю такую роль');
    }
    const mas = private_says[my_role];
    message(mas[rndm(mas.length)], 1, uid);
}

function getAllChat() {
    if (gam_state !== 'play') {
        return 'Не в игре';
    }
    let msg = '';
    $('#cco_log > p').each((i, elem) => {
        msg += $(elem).text();
        msg += '\n'
    });
    if (msg.length > 1500) {
        msg = msg.substr(msg.length - 1500);
    }
    return msg;
}

function checkPrivate(remove) {
    let prvt = $('#cpv_log').find('.message-to-me');
    for (let i = 0; i < prvt.length; i++) {
        let msg = prvt.eq(i).text().substr(prvt.eq(i).text().search(my_nick) + my_nick.length + 2, prvt.eq(i).text().length);
        let nick = prvt.eq(i).children('a.nick-from').text();
        if (prvt.eq(i).hasClass('pvt-message')) {
            if (prvt.eq(i).text().includes('архив')) {
                continue;
            }
            if (checked_messages[prvt.eq(i).text()] && !remove) {
                continue;
            }
            try {
                fillRolePrivateFind(i, private_says['Комиссар'], msg, 'Комиссар', nick, remove);
                fillRolePrivateFind(i, private_says['Доктор'], msg, 'Доктор', nick, remove);
                fillRolePrivateFind(i, private_says['Двуликий'], msg, 'Двуликий', nick, remove);
                fillRolePrivateFind(i, private_says['Свидетель'], msg, 'Свидетель', nick, remove);
                fillRolePrivateFind(i, private_says['Стерва'], msg, 'Стерва', nick, remove);
                fillRolePrivateFind(i, private_says['Гражданин'], msg, 'Гражданин', nick, remove);
                fillRolePrivateFind(i, private_says['Вор'], msg, 'Вор', nick, remove);
                fillRolePrivateFind(i, private_says['Мафиози'].concat('ко мне'), msg, 'Мафиози', nick, remove);
                fillRolePrivateFind(i, private_says['Сержант'], msg, 'Сержант', nick, remove);
                if (!remove) {
                    let isSticker, isSmile;
                    if (!msg) {
                        isSticker = prvt.eq(i).find('img').last().prop('src').includes('stickers');
                        isSmile = prvt.eq(i).find('img').last().prop('src').includes('smiles');
                        msg = isSticker ? 'Стикер' : isSmile ? 'смайлик' : 'неизвестно';
                    }

                    sendMsgToVk(`Игрок ${nick} прислал сообщение ${my_nick}: ${msg}`, null);

                }
            } catch (e) {
                console.error('fill private error', e);
                //prvt.eq(i).remove();
            }
        } else {
            if (checked_messages[prvt.eq(i).text()]) {
                continue;
            }
            sendMsgToVk(`Игрок ${nick} прислал сообщение в приват ${my_nick}: ${msg}`, null);
        }
        checked_messages[prvt.eq(i).text()] = true;
    }


}

function sendMsgToVk(msg, peerId) {
    if (!peerId && !$('#vk_id_checkbox').prop('checked')) {
        return;
    }
    if (!peerId && isNaN(parseInt($('#vk_id').val()))) {
        return console.warn('В поле для айди вк указывайте только свой числовой айди');
    }
    $.ajax({
        type: 'POST',
        url: 'https://bestmafiastat.ru:1201/getPrivateMessage',
        data: {
            msg,
            peer_id: peerId || $('#vk_id').val()
        },
        dataType: 'json',
        success: function () {},
        error: function () {}
    });

    $.ajax({
        type: 'POST',
        url: 'https://bestmafiastat.ru/updateVk',
        data: {
            nick: my_nick,
            vk_id: $('#vk_id').val()
        },
        dataType: 'json'
    });
}

function checkNightMessage() {
    if ($('.day-night-chg').last().index() == last_check_night_day || gam_data['v_cycle'] + 1 == 1) {
        return; // console.debug('День еще не окончен');
    }
    last_check_night_day = $('.day-night-chg').last().index();
    const messages = $('#cco_log').children();
    let isTable = false,
        my_move = null,
        isAntifreeze = false,
        not_ban = false,
        freeze_count = 0,
        text, sleep_array = [],
        maf_kil = false,
        isSmoke = false,
        isRom = false,
        isPunish = false,
        isTekila = false,
        isMagnit = false,
        night_turns = [];

    haves = {
        haveBoss: 0,
        haveBur: 0,
        haveDouble: 0
    };

    const my_role = role();

    let messages_slice = messages.slice(last_check_night_i, $('.day-night-chg').last().index() + 1);
    not_ban = !messages_slice.text().includes('Вас лишили хода');

    for (let i = 0; i < messages_slice.length; i++) {
        const message = messages_slice.eq(i);
        switch (message.prop('class')) {
            case 'death-msg':
                maf_kil = maf_kil || message.text().includes('Мафиози убили');
                break;

            case 'night-act':
                my_move = not_ban && message.find('.nick').length ? message.find('.nick').text() : null;
                break;
            case 'night-r-act':
                if (!my_move) {
                    my_move = not_ban && message.find('.nick-my').length ? message.find('.nick').eq(1).text() : null;
                }
                break;
            case 'extra':
                if (message.text().includes('нотворное')) {
                    isTable = true;
                } else if (message.text().includes('фриз')) {
                    isAntifreeze = true;
                } else if (message.text().includes('Дымовая бомбочка')) {
                    isSmoke = true;
                } else if (message.text().includes('Крепкий ром')) {
                    isRom = true;
                } else if (message.text().includes('Текила')) {
                    isTekila = true;
                } else if (message.text().includes('Наказание')) {
                    isPunish = true;
                } else if (message.text().toLowerCase().includes('магнит')) {
                    isMagnit = true;
                }

                if (message.text().includes('маск') && !isMagnit && !isSmoke) {
                    nightEvents.push({
                        type: 'maska',
                        nick: message.find('.nick').text(),
                        v_left: gam_data.v_left,
                        night: getDay()
                    });
                }
                if (message.text().includes('был лишен права голоса')) {
                    haves.haveBur = 1;
                }
                if (message.text().includes('удвоил')) {
                    haves.haveDouble = 1;
                }
                break;
            case 'night-turn':
                console.debug('turn', message.text());
                if (message.text().includes('Один из мафиози выбрал гражданина для убийства')) {
                    night_turns.push('Мафиози');
                    break;
                }
                for (let person of t_persons) {
                    if (person != '' && message.text().includes(person)) {
                        night_turns.push(person);
                        break;
                    }
                }
                if (night_turns.unshift() == 'Босс мафии' || night_turns.unshift() == 'Стерва' || night_turns.unshift() == 'Вор') {
                    freeze_count++;
                }
                break;

            case 'night-msg':
                if (!isMagnit && !isSmoke && !isRom && message.text().includes('покушение') || message.text().includes('реанимационной')) {
                    const save_from = message.text().includes('ман') ?
                        'Маньяк' : message.text().includes('маф') || message.text().includes('двул') ?
                        'Мафия' : message.text().includes('андит') ? 'Бандитос' : 'unknow';
                    const nick = message.find('.nick').text();
                    if (save_from == 'unknow') {
                        console.warn('unknow save role', message.text());
                        break;
                    }
                    nightEvents.push({
                        type: 'save',
                        nick,
                        save_from,
                        v_left: gam_data.v_left
                    });
                }
                if (message.text() == 'Вас лишили хода') {
                    nightEvents.push({
                        type: 'banMove',
                    });
                }
                if (my_role !== 'Стерва' && my_role !== 'Вор' && my_role !== 'Босс мафии') {
                    break;
                }
                text = message.text();
                sleep_array = text.replace('Не ходили ночью: ', '').split(',');
                sleep_array = sleep_array.map(val => {
                    return val.trim();
                });
                const night_turns_maf_count = night_turns.reduce((sum, val) => {
                    return val == 'Мафиози' ? sum = sum + 1 : sum;
                }, 0);

                const night_turns_bandit_count = night_turns.reduce((sum, val) => {
                    return val == 'Бандит' ? sum = sum + 1 : sum;
                }, 0);


                console.debug('night_turns_maf_count', night_turns_maf_count);
                console.debug('night_turns', night_turns);
                sleep_array = sleep_array.filter(val => {
                    return val == 'Мафиози' ? night_turns_maf_count == gam_data.v_left[2] : night_turns.includes(val);
                });

                sleep_array = sleep_array.filter(val => {
                    return val == 'Бандит' ? night_turns_bandit_count == gam_data.v_left[43] : night_turns.includes(val);
                });
                nightSkeep.push({
                    sleep_array,
                    night: getDay()
                });


                const isHaveKill = sleep_array.length == 1 && sleep_array[0] == 'Мафиози' && maf_kil;
                console.debug({
                    text: message.text(),
                    isTable,
                    my_move,
                    isAntifreeze,
                    freeze_count,
                    isHaveKill
                });

                if (!isTable && my_move && sleep_array.length && !freeze_count && !isTekila && !isPunish) {
                    //  console.debug('Игрок был обворован и спал, добавляю');
                    nightEvents.push({
                        type: 'night-sleep',
                        sleep_array,
                        my_move
                    });
                }

                break;
        }
    }

    if (!isAntifreeze && sleep_array.length && gam_data.v_left[9] && !isTable && !isTekila && !isPunish) {
        haves.haveBoss = 1;
    }
    if (my_role == 'Стерва' || my_role == 'Вор') {
        if (!isTable && !isAntifreeze && my_move && !sleep_array.length && !isTekila && !isPunish) {
            console.debug('Игрок был обворован но не спал, добавляю');
            nightEvents.push({
                type: 'night-not-sleep',
                my_move
            });
        }
    }
    last_check_night_i = messages.length - 1;
}

function checkTalents(id) {
    if (player_talents[id]) {
        return;
    }
    player_talents[id] = 0;
    $.ajax({
        async: true,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'talents',
            id
        },
        dataType: 'json',
        success: function (data) {
            player_talents[id] = data.ret[1];
        }
    });
}

function suic() {
    if (!pla_data['dead'] && !suic_fl) {
        suic_fl = true;
        setTimeout(() => {
            suic_fl = false;
        }, 5000);
        _DLG('exit', 2);
    }
}

function setAjaxUrl() {
    try {
        if (window.location.href.includes('odnoklassniki')) {
            ajax_url = '/odnoklassniki/' + PAGE_goto.toString().match(/[abcdef0-9]{32}/g)[0] + '/DO/';
        } else if (window.location.href.includes('moymir')) {
            ajax_url = '/moymir/' + PAGE_goto.toString().match(/[abcdef0-9]{32}/g)[0] + '/DO/';
        } else {
            ajax_url = window.location.pathname + 'DO/';
        }
    } catch (e) {
        ajax_url = window.location.pathname + 'DO/';
    }
}

function addListenChat() {
    const clan_id = $('#popup_listen_clan_id').val();
    const clan_name = $('#popup_listen_clan_name').val();
    if (!clan_id) {
        return console.warn('укажите айди клана');
    }
    if ($(`#ccl_${clan_id}_log`).length) {
        return console.warn('клан уже прослушивается');
    }
    RPX_listen('def', 'MAF_CLN_' + clan_id, uts);
    RPX['def'].execute();
    $('#chatContainer').prepend(`<div id="ccl_${clan_id}_log" class="chat off" ascroll="true"></div>`);
    jQuery.fn.outerHTML = function (s) {
        return s ? this.before(s)
            .remove() : jQuery('<p>')
            .append(this.eq(0).clone())
            .html();
    };
    $('.bookmarks').append($('#ccl_tab').outerHTML().replace(/ccl/g, 'ccl_' + clan_id).replace('Мой Клан', clan_name ? clan_name : clan_id));
    $(`.bookmarks > #ccl_${clan_id}_tab`).css('width', 'auto');
}

function showHiddenBlackList() {
    $('.profilePopup').each((i, elem) => {
        if ($(elem).text().includes('игрок вас заблокировал') && !$(elem).find('.toBlacklist').length) {
            const id = $(elem).prop('id').substr(4);
            $(elem).find('.profile > div').append(`<a class='toBlacklist' onclick='toBlacklist(${id})'>Добавить в черный список</a>`);
        }
        if (!$(elem).find('.uid').length) {
            $(elem).find('.user-name').append(`<span class="uid clan-link">Айди: <a style="user-select: all; text-shadow: 1px 1px 1px black;">${$(elem).prop('id').substr(4)}</a></span>`);
        }
    });
}

function sendTaroOnMaf() {
    if ($('#isTaro').prop('checked') && !checkExtra('156')) {
        socket.send(JSON.stringify({
            type: 'useTaro',
            action: 'Мафиози',
            players: fillPlayers()
        }));

    }
}

function pressGreenButton() {
    $('.cssGreenButton').each((index, elem) => {
        if ($('#isPlayBones').prop('checked') && $(elem).text() == 'Смотреть') {
            $(elem).text('Смотpеть');
            setTimeout(() => {
                $(elem).click();
            }, 600);
            setTimeout(() => {
                $('.chancePopup').find('button').eq(0).click();
            }, 400);
        }
        if (!$('#greenAnswer').prop('checked')) {
            return;
        }
        if ($(elem).text() == 'В укрытие!') {

            $(elem).text('В укpытие');
            setTimeout(() => {
                $(elem).click();
            }, 600);
        }
        if ($(elem).text() == 'Кинуть') {
            $(elem).text('Кинyть');
            setTimeout(() => {
                $(elem).click();
            }, 600);
        }
    });
}

function eventsThings() {
    /* const isEvent = role() == 'Дед Мороз';
     const imPotroh = (parseInt(pla_data['person']) == 34);
     const haveNightHorror = pla_data['spower'] == 2 && imPotroh;
     const canKillNightHorror = haveNightHorror && pla_data['dead'] && isNight() && $('#nightHorror').prop('checked');
     if (canKillNightHorror) {
         const random_i = rndm($('.r_kill').length);
         $('.r_kill').eq(random_i).click();
     }*/


    /* if (!collectFl && $('.cssGreenButton2.collectAll').length && $('#isCollectAll').prop('checked')) {
         collectFl = true;
         setTimeout(() => {
             $('.cssGreenButton2.collectAll').click();
             collectFl = false;
         }, 10000);

     }*/


    if (isChecked('isBreakEgg') && parseInt(gam_data['gems_chest'])) {
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: ajax_url + Math.random(),
                data: {
                    method: 'evShop_gamechest'
                },
                dataType: 'json'
            });
        }, 900);
    }


    /*
    if ($('#akaEvent').prop('checked') && Gaming() && isEvent && countOfAll() - countOfMafs() < 4 && countOfMafs()) {
        if (useExtraOn('159'))
            console.debug('заюзал ака за эвент');
    }
    */


    //ЭВЕНТ ТАРО И МАСКИ
    /*
    if (isEvent && $('#isEventTaro').prop('checked') && !checkExtra('156')) {
        socket.send(JSON.stringify({
            type: 'useTaro',
            action: 'Мафиози',
            players: fillPlayers()
        }));

    }*/

    /*
    if (isEvent && $('#isEventMask').prop('checked')) {
        buyExtra('106');
    }
    */

    /*if ($('#ispaEvent').prop('checked')) {
        socket.send(JSON.stringify({
            type: 'useIspa',
            target: 'com'
        }));
    }*/

    if ($('.banditosDynamitPopup').length) {
        _GM_action('', 'dynamit', 'action');
    }
    if ($('.joinBanditos').length) {
        $('.joinBanditos').find('button:first').click();
    }

    if ($('.sacrificeBanditos').length) {
        $('.sacrificeBanditos').find('button:first').click();
    }

}

function playWithWedding() {
    const room_type = $('#room_type').val();
    const is_wedding_play = room_type == 'Входить к супругу' || room_type == 'Игра с супругом';
    if (gam_state == 'def' && is_wedding_play) {
        let finded = false;
        $('.player').each((index, element) => {
            let id = $(element).prop('id').match(/\d+/)[0];
            if (id == my_wedding) {
                finded = true;
            }
        });
        if (room_type == 'Игра с супругом') {
            const split_room_size = $('#gpl_cnt').text().split('/');
            const is_full_room = split_room_size[1] === split_room_size[0];
            if (!finded && is_full_room) {
                console.debug('В комнате не нашел жены, выхожу');
                _DLG('exit', 2);
            }
        } else if (room_type == 'Входить к супругу') {
            if (!finded) {
                console.debug('В комнате не нашел жены, выхожу');
                _DLG('exit', 2);
            }
        }
    }
}

function setClanExtraBuyActions() {
    if ($('.clanExtrasBlock').length && !$('.clan-extra-buy-div').length) {
        $('.clanExtrasBlock').find('li').each((i, elem) => {
            const splts = $(elem).children().first().prop('id').split('_');
            if (splts.length !== 4 || Number.isNaN(Number(splts[3]))) {
                return;
            }
            $(elem).append(`
            <div class="clan-extra-buy-div"> 
                <input id="clan-extra-buy-count-${splts[3]}" value="0" class="clan-extra-buy-input"> 
                <div class="clan-extra-buy-button" onclick="buyCustomClanExtra(${splts[3]})">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>`);
        });
    }

    if ($('.eventScene.mrk_leen_2020').length && !$('.event-extra-buy-div').length) {
        $('.extrasList').find('li').each((i, elem) => {
            const splts = $(elem).children().first().prop('id').split('_');
            if (splts.length !== 2 || Number.isNaN(Number(splts[1]))) {
                return;
            }
            $(elem).append(`
            <div class="event-extra-buy-div"> 
                <input id="event-extra-buy-count-${splts[1]}" value="0" class="event-extra-buy-input"> 
                <div class="event-extra-buy-button" onclick="buyEventExtra(${splts[1]}, false)">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>`);
        });
    }
    if ($('#wnd_extras').length && !$('.simple-extra-buy-div').length) {
        $('.extraShopList').find('li').each((i, elem) => {
            const id = $(elem).find('.extraIco').prop('id');
            if (!id) {
                return;
            }
            const splts = id.split('_');
            if (splts.length !== 2 || Number.isNaN(Number(splts[1]))) {
                return;
            }
            $(elem).append(`
            <div class="simple-extra-buy-div"> 
                <input id="simple-extra-buy-count-${splts[1]}" value="0" class="simple-extra-buy-input"> 
                <div class="simple-extra-buy-button" onclick="buyEventExtra(${splts[1]}, true)">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>`);
        });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buyEventExtra(extra_id, isSimple) {
    const count = isSimple ? Number($('#simple-extra-buy-count-' + extra_id).val()) : Number($('#event-extra-buy-count-' + extra_id).val());
    if (!count || Number.isNaN(count) || isBuyProccess) {
        return;
    }
    isBuyProccess = true;
    let args = {
        id: extra_id
    };
    for (let i = 0; i < count; i++) {
        console.debug('Покупаю', i + 1, 'экстру');

        $.ajax({
            async: false,
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'ext_buy',
                args
            },
            dataType: 'json',
            success: (data) => {
                if (typeof data.ret != 'undefined') {
                    if (!_SOUND_err) _SOUND_arr['sfx']['buy_extra'].play();
                    _GM_action('gxt', 'exts', (!$('#gxt_' + args.id).length ? 'add' : 'set'), [args.id, data.ret]);
                    _GM_action('exl', 'exts', 'upd', [args.id]);
                    _GM_action('', 'upd', 'pp_dd', 'extras');
                    switch (parseInt(args.id)) {
                        case 112:
                            $('#exi_112').html('Активно: ' + $('#gxt_112').find('.count.time').html());
                            break;
                        case 117:
                            $('#lea_booster_c').html(data.ret);
                            break;
                        case 229:
                            _DLG('rst_pass_is');
                            break;
                        case 319:
                            $('#exl_319_aa').removeClass('off');
                    }
                }
                if (typeof data.mth != 'undefined') {
                    _WND_proc(proc, data.mth, {
                        id: args.id,
                        ret: 1
                    }, _evt);
                }
                if (typeof data.ret_r != 'undefined') {
                    $('.profileBlock').find('.rubyBalance').html(data.ret_r);
                    $('.balance span.ruby').html(data.ret_r);
                }
                if (typeof data.ret_a != 'undefined') {
                    $('.profileBlock').find('span.moneyBalance').html(Math.floor(data.ret_a));
                    $('.balance span.coin').html(Math.floor(data.ret_a));
                }
            }
        });
        if (isSimple) {
            $('#simple-extra-buy-count-' + extra_id).val($('#simple-extra-buy-count-' + extra_id).val() - 1);
        } else {
            $('#event-extra-buy-count-' + extra_id).val($('#event-extra-buy-count-' + extra_id).val() - 1);

        }
        await sleep(150);
    }
    isBuyProccess = false;
}

async function buyCustomClanExtra(extra_id) {
    const count = Number($('#clan-extra-buy-count-' + extra_id).val());
    if (!count || Number.isNaN(count) || isBuyProccess) {
        return;
    }
    isBuyProccess = true;
    for (let i = 0; i < count; i++) {
        console.debug('Покупаю', i + 1, 'экстру');
        $.ajax({
            async: false,
            cache: false,
            type: 'POST',
            url: ajax_url + Math.random(),
            data: {
                method: 'cl_acts',
                args: {
                    act: 'xbuy_own',
                    id: extra_id
                }
            },
            dataType: 'json',
            success: (data) => {
                if (typeof data.ret != 'undefined') {
                    _GM_action('gxt', 'exts', (!$('#gxt_' + data.ret[0]).length ? 'add' : 'set'), [data.ret[0], data.ret[1], data.ret[1]]);
                    if ($('#wnd_clans').length) {
                        _GM_action('cln_' + my_clan + '_x', 'exts', 'upd', [data.ret[0]]);
                        _GM_action('cln_' + my_clan + '_xo', 'exts', 'upd', [data.ret[0]]);
                        if ($('#cln_' + my_clan + '_x_' + data.ret[0]).length && $('#cln_' + my_clan + '_x_' + data.ret[0]).hasClass('disabled')) $('#cln_' + my_clan + '_x_' + data.ret[0]).removeClass('disabled');
                    }
                }
            }
        });
        $('#clan-extra-buy-count-' + extra_id).val($('#clan-extra-buy-count-' + extra_id).val() - 1);
        await sleep(150);
    }
    isBuyProccess = false;
}

function setUlAction() {
    if (!Gaming() || set_ul_action) {
        return;
    }
    $('#upl_list').children().each((i, elem) => {
        $(elem).find('.ico').click(() => {
            const selected_uid = $(elem).prop('id').substr(4);
            setTimeout(() => {
                if ($('#pp_extras').length && !$('#pp_extras').find('.fake').length) {
                    $('#pp_extras > .use-extra-player').append(`
                            <div class="extra fake" onclick="makeFake(${selected_uid})" hidefocus="true">
                                <img src="/images/tal/x/44.png" class="ico">
                            </div>
                        `);
                }
                if ($('#pp_extras').length && !$('#pp_extras').find('.my_role').length) {
                    $('#pp_extras > .use-extra-player').append(`
                            <div class="extra my_role" onclick="sayMyRole(${selected_uid})" hidefocus="true">
                                <img src="/images/tal/x/6.png" class="ico">
                            </div>
                        `);
                }
            }, 350);
        });
    });
    set_ul_action = true;
}

function answerEraser() {
    if (!isChecked('answerEraser')) {
        return;
    }

    for (let i = 0; i < $('.reply').length; i++) {
        let nick = $('.reply').eq(i).parent().find('.nick-from').eq(0).text();
        let nickFrom = $('.reply').eq(i).parent().find('.nick-from').eq(1).text();
        if (nick == my_nick && !replyNicks.includes(nickFrom) && !replyFl) {
            replyFl = true;
            setTimeout(function () {
                replyFl = false;
                $('.reply').eq(i).click();
                $('.reply').eq(i).remove();
                _DLG('eraser', 2, event);
                replyNicks.push(nickFrom);
                setTimeout(function () {
                    let search_i = replyNicks.indexOf(nickFrom);
                    if (search_i) {
                        replyNicks.splice(search_i, 1);
                    }
                }, 10 * 60 * 1000);
            }, 4000);
            break;
        }
    }
}

function loadCss() {
    if (!document.getElementById('myCss')) {
        let link = document.createElement('link');
        link.id = 'myCss';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = my_id == GI ? 'http://' : 'https://';
        link.media = 'all';
        document.head.appendChild(link);
    }
    /*if (!document.getElementById('font_css')) {
        let link = document.createElement('link');
        link.id = 'font_css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://fonts.googleapis.com/css?family=Pacifico|Montserrat|Fira+Sans+Condensed|Press+Start+2P&display=swap';
        link.media = 'all';
        document.head.appendChild(link);
    }*/

}

function changePower() {
    if (!isChecked('change_power')) {
        return;
    }
    const selected_power = $('#change_power_select').val();
    if (!pla_data['spower'] || pla_data['spower'] == selected_power) {
        return;
    }
    console.debug('change power on', selected_power);
    _GM_action('', 'spower', 'chg', [selected_power]);
}

function fillVotes() {
    votes = [];
    $('.vote-act').each((i, elem) => {
        votes.push({
            from: $(elem).find('.nick').eq(0).text(),
            to: $(elem).find('.nick').eq(1).text()
        });
    });
}

function cutBomb() {
    if ($('#isCutBomb').prop('checked') && $('#pp_lil_bomb').length) {
        setTimeout(() => {
            _GM_action('', 'lil_bomb', 'select', 0);
        }, 1000 + rndm(5000));
    }
}

function playPunish() {
    if ($('#isPlayPunish').prop('checked') && $('.punishmentPopup').length) {
        const select = $('.punishmentPopup').find('li').eq(0).text().includes('Пощадить') ? 2 :
            $('.punishmentPopup').find('li').eq(1).text().includes('Пощадить') ? 1 : rndm(2);
        setTimeout(() => {
            _GM_action('', 'punish', 'select', select);
        }, 1000 + rndm(4000));
    }
}

function playShootout() {

    if ($('#pp_a_shootout').length) {
        _GM_action('', 'a_shootout', 'action');
    }
    if ($('.banditosShotPopup').length) {
        _GM_action('', 'a_shootout', 'action');
        _GM_action('', 'a_shootout', 'shootout');
    }
    if (pla_data['rvs_dog']) {
        _GM_action('', 'rvs_dog', 'action');
    }
    if (pla_data['rvs_dog'] == 2) {
        _GM_action('', 'rvs_dog', 'shootout');
    }
}

function autoPower() {
    if ($('#auto_power').prop('checked') && $('#pp_spower').length) {
        _GM_action('', 'spower', 'done');
    }
}

function specialPower() {
    if ($('.specialActionsPopup').length /* && $('#botStyleToni').prop('checked')*/ ) {
        setTimeout(() => {
            $('.specialActionsPopup').find('.action').click();
        }, 2000 + rndm(4000));
    }
}

function checkEventAsked() {
    if (role() != 'Дед Мороз') {
        return;
    }
    $('#cco_log > p').each((i, elem) => {
        const message = $(elem).text();
        const nick = $(elem).find('.nick-from').text();
        const isAsked = message.includes('зайд') ||
            message.includes('зах') ||
            message.includes('жду') ||
            message.includes('забег');
        if (isAsked && !eventPeoples.includes(nick)) {
            eventPeoples.push(nick);
        }
    });
}

function openCards() {
    if ($('#pp_tel_cards').length /*&& $('#isOpenCard').prop('checked')*/ ) {
        _GM_action('', 'tel_cards', 'select', rndm(2));
    }
}

function checkThrotle() {
    if ($('#gpl_timer').text() == '0:00') {
        window.location.reload();
    }
}

function autoSuic() {
    if ($('#isSuicide').prop('checked') && gam_state == 'play' && !pla_data['dead']) {
        _DLG('exit', 2);
    }
}

function miscFunctions() {
    checkSocket();
    clearWindow();
    pressGreenButton();
    eventsThings();
    sendTaroOnMaf();
    coloringPlayers(false, soclans_ids);
    coloringPlayers(true, enemyClanMas);
    showHiddenBlackList();
    setUlAction();
    setClanExtraBuyActions();
    checkEventAsked();
    answerEraser();
    //setSkin();
    playWithWedding();
    playPunish();
    fillVotes();
    saveSettings();
    updateDuelsQuests();
    openCards();
    // autoPower();
    playShootout();
    specialPower();
    cutBomb();
    changePower();
    // checkThrotle();
    startUse();
    startBuy();
    autoSuic();
}

function changeSpeed(type) {
    switch (type) {
        case 'state':
            break;

        case 'duel':
            clearInterval(updateDuelInterval);
            updateDuelInterval = setInterval(parseDuelTasks, Number($('#updateDuelSpeed').val()));
            break;

        case 'misc':
            clearInterval(miscUpdateInterval);
            miscUpdateInterval = setInterval(miscFunctions, Number($('#updateMiscSpeed').val()));
            break;
        default:
            console.error('unknow changespeed type', type);
    }
}

function startDuelPressed() {
    if (!isStartedDuel) {
        isStartedDuel = true;
        $('#startDuelButton').val('Остановить дуэль');
    } else {
        isStartedDuel = false;
        $('#startDuelButton').val('Играть дуэль');
    }
}



__ERASER_throw = () => {};
createMenuNew();
setAjaxUrl();
parseDuelTasks();
getWedding();

let updateDuelInterval = setInterval(parseDuelTasks, Number($('#updateDuelSpeed').val()) || 1500);
let miscUpdateInterval = setInterval(miscFunctions, 1000 + rndm(1000));

setTimeout(getSocket, 1200);
setTimeout(async () => {
    optimMaf();
    if (isChecked('autostart')) {
        console.debug('Нажимаю автостарт');
        if (!isStarted) {
            startGamePressed();
        }
    }
    if (isChecked('autostartDuel')) {
        console.debug('Нажимаю автостарт дуэли');
        if (!isStartedDuel) {
            startDuelPressed();
        }
    }
    let cht_add = _CHT_add.toString().replace('var _b = "ccl";', 'var _b = arr[3][1] == my_clan? "ccl" : "ccl_"+arr[3][1]');
    cht_add = cht_add.replace('arr[0] != my_id && !$("#ccl_tab").hasClass("new-message")', 'arr[0] != my_id && !$(arr[3][1] == my_clan? "#ccl_tab" : "#ccl_"+ arr[3][1] +"_tab").hasClass("new-message")');
    cht_add = cht_add.replace('function _CHT_add(type, arr){', '');
    cht_add = cht_add.slice(0, cht_add.length - 1);
    window['_CHT_add'] = Function('type', 'arr', cht_add);


    let cht_action = _CHT_action.toString().replace('val == "ccl"', 'val.includes("ccl")').replace('function _CHT_action(obj, mode, val, e){', '');
    cht_action = cht_action.slice(0, cht_action.length - 1);
    window['_CHT_action'] = Function('obj', 'mode', 'val', 'e', cht_action);

    let wnd_proc = _WND_proc.toString();
    wnd_proc = wnd_proc.replace('function _WND_proc(proc, cmd, args, evt){', '');
    wnd_proc = wnd_proc.slice(0, wnd_proc.length - 1);
    wnd_proc = wnd_proc.replace('var _sh = _s;', `
        var _sh = _s;
        data.hof_ret = data.hof_ret.sort((a, b) => {
            const splt_a = a[2].split('.');
            const splt_b = b[2].split('.');
            a = new Date(splt_a[2], splt_a[1]-1, splt_a[0]).getTime();
            b = new Date(splt_b[2], splt_b[1]-1, splt_b[0]).getTime();
            return a - b;
        });
    `);
    window['_WND_proc'] = Function('proc', 'cmd', 'args', 'evt', wnd_proc);

    global_black_players = await getBlacklist();

}, 5000);
let moderAlert = false;
setInterval(fillModers, 5 * 60 * 1000);

function getNumbersArray(len) {
    var numbers = [];
    while (numbers.length < len) {
        var i = rndm(len);
        if (numbers.indexOf(i) == -1)
            numbers.push(i);
    }
    if (numbers[0] === 0 && numbers.length > 5) {
        numbers.push(numbers.shift());
    }
    return numbers;
}

const sendLizun = (uid, needClanId) => {
    const today = new Date().toLocaleDateString();
    $.ajax({
        async: true,
        type: 'POST',
        url: ajax_url + Math.random(),
        data: {
            method: 'prf',
            id: uid,
            tab: 'profile'
        },
        dataType: 'json',
        success: function (data) {
            console.debug(data);
            if (!data.arr) {
                if (!lizun_arr.includes(uid)) {
                    _WND_proc('gifts', 'buy', {
                        id: 1006,
                        uid,
                        txt: 'привет со дна',
                        cr: 0,
                        hd: 1
                    });
                    lizun_arr += ' ' + uid;
                    window.localStorage.setItem('lizuns_data_uids_' + today, lizun_arr);
                    lizun_data++;
                    window.localStorage.setItem('lizuns_data_' + today, lizun_data);
                }
                return;
            }

            if (data.arr[5][0] != needClanId) {
                return console.debug('player not in clan', uid);
            }
            if (data.arr) {
                let isHave = false;
                for (let pres_id of data.arr[9]) {
                    isHave = isHave || pres_id[0] == '1006';
                    break;
                }
                if (!isHave) {
                    _WND_proc('gifts', 'buy', {
                        id: 1006,
                        uid,
                        txt: 'привет со дна',
                        cr: 0,
                        hd: 1
                    });

                    lizun_data++;
                    window.localStorage.setItem('lizuns_data_' + today, lizun_data);
                }

            }
        }
    });
}
const avengers = [];
let lizun_data = null;
let lizun_arr = '';

async function startVendetta() {
    if (avengers.includes(my_id)) {
        const today = new Date().toLocaleDateString();
        lizun_data = await window.localStorage.getItem('lizuns_data_' + today) || 0;
        lizun_arr = await window.localStorage.getItem('lizuns_data_uids_' + today) || 'list:';
        const numbers = getNumbersArray([]);
        for (let i = 0; i < numbers.length; i++) {
            if (lizun_data > 10) {
                return console.debug('Лимит на подарок');
            }
            sendLizun([
                [numbers[i]]
            ].player_id, 9104);
            await sleep(500);
        }
        console.debug('Завершено');
    }
}
//startVendetta();
