import { Assets } from "pixi.js";
import { Spine } from "pixi-spine";

export async function getSpine(): Promise<Spine> {

    return new Promise<Spine>((resolve, reject) => {
        Assets.load("./assets/spine-assets/pixie.json").then((resources) => {
            const spineExample = new Spine(resources.spineData);
            spineExample.scale.set(0.3, 0.3);
            spineExample.y = spineExample.height;
            spineExample.x = spineExample.width / 2;

            spineExample.stateData.setMix("running", "jump", 0.2);
            spineExample.stateData.setMix("jump", "running", 0.4);

            spineExample.state.setAnimation(0, "running", true);
            resolve(spineExample)
        }).catch((reason) => { reject(reason) });

    })

}
