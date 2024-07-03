document.addEventListener('DOMContentLoaded', function() {
    //  Slack Display Name
    const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
    slackDisplayName.textContent = "akehinde392";

    //  Slack Email
    const slackEmail = document.querySelector('[data-testid="slackEmail"]');
    slackEmail.textContent = "akehinde392@gmail.com";

    //  Current Time in UTC
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    currentTimeUTC.textContent = new Date().toUTCString().slice(0, -4);

    // Current Day of the Week
    const currentDay = document.getElementById('currentDay');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date().getDay();
    currentDay.textContent = daysOfWeek[dayIndex];
});