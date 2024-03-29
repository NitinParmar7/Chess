export const GAME_EVENTS = {
  GAME_HAS_STARTED: { key: "gameHasStarted", clear: true },
  TURN_HAS_ENDED: {key: "turnHasEnded", clear: true}
};

type gameEvent = { key: string; clear: boolean };

export default class GameEventEmitter extends Phaser.Events.EventEmitter {
  private static instance: GameEventEmitter;

  private constructor() {
    super();
  }

  public static GetInstance(): GameEventEmitter {
    if (!GameEventEmitter.instance) {
      GameEventEmitter.instance = new GameEventEmitter();
    }
    return GameEventEmitter.instance;
  }

  clearEvents() {
    for (let eventName in GAME_EVENTS) {
      const event = GAME_EVENTS[eventName] as gameEvent;
      if (event.clear) {
        this.removeAllListeners(event.key);
      }
    }
  }
}
