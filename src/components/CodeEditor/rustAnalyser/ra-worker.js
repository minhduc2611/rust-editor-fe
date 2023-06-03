import init, { initThreadPool, WorldState } from './pkg/wasm_demo.js';

const start = async () => {
  await init();

  // Thread pool initialization with the given number of threads
  // (pass `navigator.hardwareConcurrency` if you want to use all cores).
  // await initThreadPool(navigator.hardwareConcurrency)

  const state = new WorldState();
  console.log('state ==>', {state});
  
  onmessage = (e) => {
      const { which, args, id } = e.data;
      console.log('onmessage ==>',{which, args, id});
      const result = state[which](...args);

      postMessage({
          id: id,
          result: result
      });
  };
};

start().then(() => {
  postMessage({
    id: "ra-worker-ready",
  });
});

export default start;
