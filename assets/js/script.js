let timeDisplayEl = $('#time-display');

let hour8El = $('#hour-8');
let hour9El = $('#hour-9');
let hour10El = $('#hour-10');
let hour11El = $('#hour-11');
let hour12El = $('#hour-12');
let hour13El = $('#hour-13');
let hour14El = $('#hour-14');
let hour15El = $('#hour-15');
let hour16El = $('#hour-16');
let hour17El = $('#hour-17');
let hour18El = $('#hour-18');
let hour8Btn = $('#hour-8 btn');
let hour9Btn = $('#hour-9 btn');
let hour10Btn = $('#hour-10 btn');
let hour11Btn = $('#hour-11 btn');
let hour12Btn = $('#hour-12 btn');
let hour13Btn = $('#hour-13 btn');
let hour14Btn = $('#hour-14 btn');
let hour15Btn = $('#hour-15 btn');
let hour16Btn = $('#hour-16 btn');



$(function colorTimeBlock8() {
    if (dayjs().hour() === 08) {
        hour8El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 08) {
        hour8El.addClass('row time-block past');
    }
    else {
        hour8El.addClass('row time-block future');
    }
}
);

$(function colorTimeBlock9() {
    if (dayjs().hour() === 09) {
        hour9El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 09) {
        hour9El.addClass('row time-block past');
    }
    else {
        hour9EL.addClass('row time-block future');
    }

});

$(function colorTimeBlock10() {
    if (dayjs().hour() === 10) {
        hour10El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 10) {
        hour10El.addClass('row time-block past');
    }
    else {
        hour10El.addClass('row time-block future');
    }

});

$(function colorTimeBlock11() {
    if (dayjs().hour() === 11) {
        hour11El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 11) {
        hour11El.addClass('row time-block past');
    }
    else {
        hour11El.addClass('row time-block future');
    }

});

$(function colorTimeBlock12() {
    if (dayjs().hour() === 12) {
        hour12El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 12) {
        hour12El.addClass('row time-block past');
    }
    else {
        hour12El.addClass('row time-block future');
    }

});

$(function colorTimeBlock13() {
    if (dayjs().hour() === 13) {
        hour13El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 13) {
        hour13El.addClass('row time-block past');
    }
    else {
        hour13El.addClass('row time-block future');
    }

});

$(function colorTimeBlock14() {
    if (dayjs().hour() === 14) {
        hour14El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 14) {
        hour14El.addClass('row time-block past');
    }
    else {
        hour14El.addClass('row time-block future');
    }

});

$(function colorTimeBlock15() {
    if (dayjs().hour() === 15) {
        hour15El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 15) {
        hour15El.addClass('row time-block past');
    }
    else {
        hour15El.addClass('row time-block future');
    }

});

$(function colorTimeBlock16() {
    if (dayjs().hour() === 16) {
        hour16El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 16) {
        hour16El.addClass('row time-block past');
    }
    else {
        hour16El.addClass('row time-block future');
    }

});

$(function colorTimeblock17() {
    if (dayjs().hour() === 17) {
        hour17El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 17) {
        hour17El.addClass('row time-block past');
    }
    else {
        hour17El.addClass('row time-block future');
    }

});

$(function colorTimeblock18() {
    if (dayjs().hour() === 18) {
        hour18El.addClass('row time-block present');
    }
    else if (dayjs().hour() > 18) {
        hour18El.addClass('row time-block past');
    }
    else {
        hour18El.addClass('row time-block future');
    }
});

$('.saveBtn').on('click', function () {
    localStorage.setItem(($(this).parent().attr('id')), ($(this).siblings('textarea').val()));
});

$('.row').each(function () {
    $(this).children('textarea').val(localStorage.getItem($(this).attr('id')));
});

function displayTime() {
    timeDisplayEl.text(dayjs().format('dddd, MMM DD, YYYY [at] hh:mm a'));
}

displayTime();
setInterval(displayTime, 1000)