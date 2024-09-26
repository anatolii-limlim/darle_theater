import { Audio } from 'expo-av';
import settings from "../../settings";
import store from "../../store";
import {isMutedUpdated} from "./soundSlice";

class AppSound {
  sounds = {
    birds: null,
    drums: null,
    goForward: null,
    goBack: null,
    fairytaleMelody: null
  }

  isMuted = false;

  bgDrumsInterval = null;

  async loadSoundsAsync() {
    const map = new Map();

    map.set('birds', this.loadSoundAsync(require('../../../assets/sound/birds.mp3')));
    map.set('drums', this.loadSoundAsync(require('../../../assets/sound/drums.mp3')));
    map.set('goForward', this.loadSoundAsync(require('../../../assets/sound/goForward.mp3')));
    map.set('goBack', this.loadSoundAsync(require('../../../assets/sound/goBack.mp3')));
    map.set('fairytaleMelody', this.loadSoundAsync(require('../../../assets/sound/fairytaleMelody.mp3')));

    const sounds = await Promise.all(Array.from(map).map(x => x[1]));
    Array.from(map).forEach((x, i) => this.sounds[x[0]] = sounds[i]);

    this.sounds.birds.setIsLoopingAsync(true);
    this.sounds.fairytaleMelody.setIsLoopingAsync(true);

    if (settings.isMutedByDefault) {
      this.mute();
    } else {
      this.unmute();
    }
  }

  async loadSoundAsync(file) {
    const { sound } = await Audio.Sound.createAsync(file);
    return sound;
  }

  async releaseSoundAsync() {
    for (let soundName in this.sounds) {
      this.sounds[soundName].unloadAsync();
    }
  }

  mute() {
    this.isMuted = true;
    store.dispatch(isMutedUpdated(true));

    this.sounds.birds.setVolumeAsync(0);
    this.sounds.drums.setVolumeAsync(0);
    this.sounds.goForward.setVolumeAsync(0);
    this.sounds.goBack.setVolumeAsync(0);
    this.sounds.fairytaleMelody.setVolumeAsync(0);
  }

  unmute() {
    this.isMuted = false;
    store.dispatch(isMutedUpdated(false));

    this.sounds.birds.setVolumeAsync(0.7);
    this.sounds.drums.setVolumeAsync(0.3);
    this.sounds.goForward.setVolumeAsync(0.5);
    this.sounds.goBack.setVolumeAsync(0.9);
    this.sounds.fairytaleMelody.setVolumeAsync(0.1);
  }

  muteToggle() {
    this.isMuted ? this.unmute() : this.mute();
  }

  async playBackgroundSoundAsync() {
    this.sounds.birds.playAsync();
    this.playDrumsAsync();
  };

  async playDrumsAsync() {
    this.sounds.fairytaleMelody.stopAsync();

    this.bgDrumsInterval = setInterval(async () => {
      await this.sounds.drums.setPositionAsync(0);
      this.sounds.drums.playAsync()
    }, 40000);
  }

  async playBackgroundFairytaleAsync() {
    clearInterval(this.bgDrumsInterval);
    this.sounds.drums.stopAsync();
    this.sounds.fairytaleMelody.playAsync();
  };

  async playGoForwardAsync() {
    await this.sounds.goForward.setPositionAsync(0);
    this.sounds.goForward.playAsync();
  };

  async playGoBackAsync() {
    await this.sounds.goBack.setPositionAsync(0);
    this.sounds.goBack.playAsync();
  };
};

const sound = new AppSound();
export default sound;
