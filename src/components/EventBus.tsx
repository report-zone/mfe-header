import {v4 as uuidv4} from 'uuid';

const dispatch = (event: any, data: any) => {
  if (!EventBus.events[event]) {
    return;
  }
  const eventKeys = Object.keys(EventBus.events[event]);
  eventKeys.forEach((key) => EventBus.events[event][key](data));
};

const subscribe = (event: any, callback: () => {}) => {
  if (!EventBus.events[event]) {
    EventBus.events[event] = {};
  }
  const id = uuidv4();
  EventBus.events[event][id] = callback;
  return id;
};

const unsubscribe = (event: any, id: string) => {
  delete EventBus.events[event][id];
};

const EventBus: any = (function () {
  return {
    events: {},
    dispatch,
    subscribe,
    unsubscribe,
  };
})();

export default EventBus;
