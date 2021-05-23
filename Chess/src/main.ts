// globalThis.require = () => {
//     throw new Error(
//       "Calls to `require` from umd module definitions are not supported"
//     );
//   };

// import regeneratorRuntime from "regenerator-runtime";

import { config } from "./script/config";


export const game = new Phaser.Game(config);
