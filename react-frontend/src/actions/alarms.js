
export let overflowAlarm = (currentWaterLevel, currentTankId) => {
  const dangerousWaterLevel = 98;
  const audio = new Audio('/sounds/zapsplat_science_fiction_alarm_big_warning_meltdown_wailing_deep_tone_fast_40027');
    /* sound source: https://www.zapsplat.com/music/big-science-fiction-alarm-siren-warning-of-meltdown-or-catastrophe-wailing-deep-tone-fast/
       license: https://www.zapsplat.com/license-type/standard-license/ */

  const startAudioAlarm = () => {
    audio.play();
    audio.loop = true;
  };

  const stopAudioAlarm = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const addStopAlarmButton = () => {
    let currentTank = document.getElementById(`${currentTankId}`);
    const stopAlarmButton = document.createElement('button');
    stopAlarmButton.className = 'alarm-button';
    stopAlarmButton.style.display = 'flex';
    stopAlarmButton.style.justifyContent = 'center';
    stopAlarmButton.style.alignItems = 'center';
    stopAlarmButton.addEventListener('click', stopAlarm(evt));
    currentTank.appendChild(stopAlarmButton);
  };

  const removeStopAlarmButton = (clickedButton) => {
    clickedButton.parentNode.removeChild(clickedButton);
  };

  const stopAlarm = (event) => {
    stopAudioAlarm();
    removeStopAlarmButton(event.target);
  };

  // when water level becomes dangerous triggers the alarm
  const checkWaterLevel = () => {
    if (currentWaterLevel >= dangerousWaterLevel) {
      startAudioAlarm();
      addStopAlarmButton();
    }
  };

  const repeatWaterLevelCheck = setInterval(checkWaterLevel, 1000);
  repeatWaterLevelCheck();
};