import { world } from "@minecraft/server";
world.afterEvents.playerInteractWithBlock.subscribe(data=>{
    if(
        data.block.typeId == "minecraft:sculk_shrieker"
     && data.block.permutation.getState("can_summon") == false
    ) data.block.setPermutation(data.block.permutation.withState("can_summon", true));
});