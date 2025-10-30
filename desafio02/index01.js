class Device {
    constructor() {
      this.isOn = false;
      this.volume = 10;
    }
  
    turnOn() {
      throw new Error("Método 'turnOn' deve ser implementado.");
    }
  
    turnOff() {
      throw new Error("Método 'turnOff' deve ser implementado.");
    }
  
    setVolume(percent) {
      this.volume = percent;
      console.log(`Volume ajustado para ${this.volume}`);
    }
  
    getVolume() {
      return this.volume;
    }
  }
  
  class TV extends Device {
    turnOn() {
      this.isOn = true;
      console.log("TV: ligada.");
    }
  
    turnOff() {
      this.isOn = false;
      console.log("TV: desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      this.isOn = true;
      console.log("Rádio: ligado.");
    }
  
    turnOff() {
      this.isOn = false;
      console.log("Rádio: desligado.");
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    togglePower() {
      if (this.device.isOn) {
        this.device.turnOff();
      } else {
        this.device.turnOn();
      }
    }
  }
  
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      this.device.setVolume(0);
    }
  
    volumeUp() {
      const currentVolume = this.device.getVolume();
      this.device.setVolume(currentVolume + 5);
    }
  
    volumeDown() {
      const currentVolume = this.device.getVolume();
      this.device.setVolume(currentVolume - 5);
    }
  }
  
  const tv = new TV();
  const radio = new Radio();
  
  console.log("--- Testando Controle Simples com a TV ---");
  const simpleRemote = new RemoteControl(tv);
  simpleRemote.togglePower();
  simpleRemote.togglePower();
  
  console.log("\n--- Testando Controle Avançado com o Rádio ---");
  const advancedRemote = new AdvancedRemoteControl(radio);
  advancedRemote.togglePower();
  advancedRemote.volumeUp();
  advancedRemote.volumeUp();
  advancedRemote.mute();
  advancedRemote.togglePower();
  
  console.log("\n--- Trocando: Controle Avançado com a TV ---");
  const advancedRemoteForTV = new AdvancedRemoteControl(tv);
  advancedRemoteForTV.togglePower();
  advancedRemoteForTV.volumeDown();