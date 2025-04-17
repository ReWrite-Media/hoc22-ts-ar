// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
}

enum Custom {
    //% blockIdentity="blocks.custom" enumval=998 block="سهم لأعلى باللون البرتقالي"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 998,
    //% blockIdentity="blocks.custom" enumval=997 block="سهم لأسفل باللون الأرجواني"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 997,
    //% blockIdentity="blocks.custom" enumval=996 block="سهم لليسار باللون الأزرق"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 996,
    //% blockIdentity="blocks.custom" enumval=995 block="سهم لليمين باللون الأصفر"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 995
}

enum TwoDirection {
    //% block="`Block.MagentaConcrete`"
    Left,
    //% block="`Block.LimeConcrete`"
    Right
}

enum FourDirectionUpDown  {
    //% block="للأعلى"
    Up = SixDirection.Up,
    //% block="للاسفل"
    Down = SixDirection.Down,
    //% block="لليسار"
    Left = SixDirection.Left,
    //% block="لليمين"
    Right = SixDirection.Right
}

enum RedLaserSlide {
    //% blockIdentity="blocks.custom" enumval=971 block="Red Shift Right"
    //% jres alias=RED_SHIFT_RIGHT
    Right,
    //% blockIdentity="blocks.custom" enumval=972 block="Red Shift Left"
    //% jres alias=RED_SHIFT_LEFT
    Left
}

// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0);
const weightDropPosition = world(-18, 77, 162);
const communicationsTimeout = 100;


//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Shift Red Row Right
     */
    //% block="حرك لليمين `Custom.RedRight` بمقدار %n"
    export function RedRightLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(PINK_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Shift Red Row Left
     */
    //% block="حرك لليسار `Custom.RedLeft` بمقدار %n"
    export function RedLeftLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(LIME_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Shift Green Row Right
     */
    //% block="حرك لليمين `Custom.GreenRight` بمقدار %n"
    export function GreenRightLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(MAGENTA_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Shift Green Row Left
     */
    //% block="حرك لليسار `Custom.GreenLeft` بمقدار %n"
    export function GreenLeftLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(ORANGE_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Shift Yellow Row Right
     */
    //% block="حرك لليمين `Custom.YellowRight`  بمقدار %n"
    export function YellowRightLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(YELLOW_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Shift Yellow Row Left
     */
    //% block="حرك لليسار `Custom.YellowLeft`  بمقدار %n"
    export function YellowLeftLaser(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(LIGHT_BLUE_CONCRETE, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Summon Magenta Block
     */
    //% block="أسقط بمقدار العدد %n  من `Custom.ArrowDownMagenta`"
    export function summonColoredBlockMagenta(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Light Blue Block
     */
    //% block="أسقط بمقدار العدد %n  من `Custom.ArrowLeftBlue`"
    export function summonColoredBlockLightBlue(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Yellow Block
     */
    //% block="أسقط بمقدار العدد %n  من `Custom.ArrowRightYellow`"
    export function summonColoredBlockYellow(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Green Block
     */
    //% block="أسقط بمقدار العدد %n  من `Custom.ArrowUpOrange`"
    export function summonColoredBlockLime(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Summon Chicken Weight
     */
    //% block="استدعي بمقدار العدد %n  من `Custom.WeightedChicken`"
    export function summonWeightChicken(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.CHICKEN, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Cow Weight
     */
    //% block="استدعي بمقدار العدد %n  من `Custom.WeightedCow`"
    export function summonWeightCow(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.COW, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Summon Sheep Weight
     */
    //% block="استدعي بمقدار العدد %n  من `Custom.WeightedSheep`"
    export function summonWeightSheep(n: number): void {
        for (let i = 0; i < n; i++) {
            mobs.spawn(Weight.SHEEP, weightDropPosition);
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Agent Move 
     */
    //% block="حرك الروبوت باتجاه %d بمقدار %n"
    export function agentMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Clay Ball Move
     */
    //% block="حرك الكرة الطينية باتجاه %d بمقدار %n"
    export function clayBallMove(d: FourDirectionUpDown, n: number): void {
        agent.move(d, n)
        
    }

    /**
     * Place Block
     */
    //% block="ضع كتلة"
    export function placeBlock(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Place Block
     */
    //% block="ضع الكتلة `Block.CarvedPumpkin`"
    export function placePumpkin(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
    * Place Magenta Concrete
    */
    //% block="ضع الكتلة `Block.MagentaConcrete`"
    export function placeMagentaBlock(): void {
        placeBlockSignal(Block.LimeConcrete)
    }
    /**
     * Place Lime Concrete
     */
    //% block="ضع الكتلة `Block.LimeConcrete`"
    export function placeLimeBlock(): void {
        placeBlockSignal(Block.PinkConcrete)
    }
    /**
     * Place Yellow Concrete
     */
    //% block="ضع الكتلة `Block.YellowConcrete`"
    export function placeYellowBlock(): void {
        placeBlockSignal(Block.GrayConcrete)
    }
    /**
     * Place Light Blue
     */
    //% block="ضع الكتلة `Block.LightBlueConcrete`"
    export function placeLightBlueBlock(): void {
        placeBlockSignal(Block.LightGrayConcrete)
    }



    /**
     * Clay Golem Move Forward
     */
    //% block="حرك التمثال الطيني للأمام بمقدار %n"
    export function clayGolemMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Enderman Butler Move Forward
     */
    //% block="حرك إنديرمان بمقدار %n"
    export function endermanButlerMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Wait for Block
     */
    //% block="انتظر الكتلة"
    export function waitForBlock(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Teleport to Diamond Block
     */
    //% block="انقل إندرمان إلى `Block.DiamondBlock`"
    export function superJump(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Activate Yellow Cannon
     */
    //% block="فعل مدفع `Custom.YellowCannon`"
    export function yellowCannon(): void {
        placeBlockSignal(Block.YellowConcrete)
    }

    /**
     * Activate Green Cannon
     */
    //% block="فعل مدفع `Custom.GreenCannon`"
    export function limeCannon(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Activate Blue Cannon
     */
    //% block="فعل مدفع `Custom.BlueCannon`"
    export function lightBlueCannon(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }

    /**
     * Activate Magenta Cannon
     */
    //% block="فعل مدفع `Custom.MagentaCannon`"
    export function magentaCannon(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }

    /**
     * Rotate Outer Ring Clockwise
     */
    //% block="دور `Custom.OuterClockwise` بمقدار %n"
    export function outerRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }

    /**
     * Rotate Outer Ring Counterclockwise
     */
    //% block="دور `Custom.OuterCounterClockwise` بمقدار %n"
    export function outerRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.MagentaConcrete)
        }
    }

    /**
     * Rotate Middle Ring Clockwise
     */
    //% block="دور `Custom.MiddleClockwise` بمقدار %n"
    export function middleRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LightBlueConcrete)
        }
    }

    /**
     * Rotate Middle Ring Counterclockwise
     */
    //% block="دور `Custom.MiddleCounterClockwise` بمقدار %n"
    export function middleRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.YellowConcrete)
        }
    }

    /**
     * Rotate Inner Ring Clockwise
     */
    //% block="دور `Custom.InnerClockwise` بمقدار %n"
    export function innerRingClockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LimeConcrete)
        }
    }

    /**
     * Rotate Inner Ring Counterclockwise
     */
    //% block="دور `Custom.InnerCounterClockwise` بمقدار %n"
    export function innerRingCounterclockwise(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.PinkConcrete)
        }
    }

    /**
     * Pull Lever Down
     */
    //% block="اسحب الرافعة للأسفل"
    export function pullLeverDown(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }

    /**
     * Pull Lever Down
     */
    //% block="اسحب الرافعة للأسفل"
    export function pullLeverDownLime(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Move Enderman Forward
     */
    //% block="حرك إندرمان للأمام بمقدار %n"
    export function npcMoveForward(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.OrangeConcrete)
        }
    }
    /**
     * Move Enderman Butler Back
     */
    //% block="حرك إندرمان للخلف بمقدار %n"
    export function npcMoveBack(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.MagentaConcrete)
        }
    }
    /**
     * Move Enderman Butler Left
     */
    //% block="حرك إندرمان لليسار بمقدار %n"
    export function npcMoveLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.LightBlueConcrete)
        }
    }
    /**
     * Move Enderman Butler Right
     */
    //% block="حرك إندرمان لليمين بمقدار %n"
    export function npcMoveRight(n: number): void {
        for (let i = 0; i < n; i++) {
            placeBlockSignal(Block.YellowConcrete)
        }
    }

    /**
     * Move Enderman Butler to Light Blue
     */
    //% block="حرك إندرمان نحو الكتلة `Block.LightBlueGlazedTerracotta`"
    export function npcMoveLightBlue(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }
    /**
     * Move Enderman Butler to Pink
     */
    //% block="حرك إندرمان نحو الكتلة `Block.PinkGlazedTerracotta`"
    export function npcMovePink(): void {
        placeBlockSignal(Block.PinkConcrete)
    }
    /**
     * Move Enderman Butler to Lime
     */
    //% block="حرك إندرمان نحو الكتلة `Block.LimeGlazedTerracotta`"
    export function npcMoveLime(): void {
        placeBlockSignal(Block.LimeConcrete)
    }
    /**
     * Move Enderman Butler to Yellow
     */
    //% block="حرك إندرمان نحو الكتلة `Block.YellowGlazedTerracotta`"
    export function npcMoveYellow(): void {
        placeBlockSignal(Block.YellowConcrete)
    }

    /**
     * Turn On Redstone Lamp
     */
    //% block="شغل كتلة `Block.RedstoneLamp`"
    export function toggleLight(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Baking Bread Harvest Wheat
     */
    //% block="احصد القمح `Custom.BreadBakeOne`"
    export function bakingBreadWheat(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Mill Wheat
     */
    //% block="اطحن القمح `Custom.BreadBakeTwo`"
    export function bakingBreadGrain(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Make Dough
     */
    //% block="حضر العجين `Custom.BreadBakeThree`"
    export function bakingBreadDough(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Bake Into Bread
     */
    //% block="اخبز الخبز `Custom.BreadBakeFour`"
    export function bakingBreadBread(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Move Armor to Light Blue
     */
    //% block="اقلب الرافعة `Custom.ArrowLeftBlue`"
    export function teleportLightBlueLever(): void {
        placeBlockSignal(Block.LightBlueConcrete)
    }
    /**
     * Move Armor to Magenta
     */
    //% block="اقلب الرافعة `Custom.ArrowDownMagenta`"
    export function teleportMagentaLever(): void {
        placeBlockSignal(Block.MagentaConcrete)
    }
    /**
     * Move Armor to Yellow
     */
    //% block="اقلب الرافعة `Custom.ArrowRightYellow`"
    export function teleportYellowLever(): void {
        placeBlockSignal(Block.YellowConcrete)
    }
    /**
     * Move Armor to Orange
     */
    //% block="اقلب الرافعة `Custom.ArrowUpOrange`"
    export function teleportOrangeLever(): void {
        placeBlockSignal(Block.OrangeConcrete)
    }
    /**
      * Feed The House Apple
      */
    //% block="اطعم المنزل `Item.Apple` بمقدار %n"
    export function feedHouseApple(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Feed The House Salmon
      */
    //% block="اطعم المنزل `Item.RawSalmon` بمقدار %n"
    export function feedHouseSalmon(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }

    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="اطعم المنزل `Item.MushroomStew` بمقدار %n"
    export function feedHouseMushroomStew(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
      * Dinner Table Swap Red
      */
    //% block="بدل جانب `Custom.ArrowDownMagenta`"
    export function dinnerTableSwapRed(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Green
      */
    //% block="بدل جانب `Custom.ArrowUpOrange`"
    export function dinnerTableSwapGreen(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Blue
      */
    //% block="بدل جانب `Custom.ArrowLeftBlue`"
    export function dinnerTableSwapBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Yellow
      */
    //% block="بدل جانب `Custom.ArrowRightYellow`"
    export function dinnerTableSwapYellow(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Mosaic Push Up
      */
    //% block="ادفع `Custom.ChessUpBlue`"
    export function mosaicPushUp(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Down
      */
    //% block="ادفع `Custom.ChessDownRed`"
    export function mosaicPushDown(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Left
      */
    //% block="ادفع `Custom.ChessLeftYellow`"
    export function mosaicPushLeft(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push right
      */
    //% block="ادفع `Custom.ChessRightGreen`"
    export function mosaicPushRight(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Cursor Move Orientation One
     */
    //% block="حرك المؤشر `Custom.ArrowUpOrange` بمقدار %n"
    export function cursorMoveOrientationOneUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="حرك المؤشر `Custom.ArrowDownMagenta` بمقدار %n"
    export function cursorMoveOrientationOneDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="حرك المؤشر `Custom.ArrowLeftBlue` بمقدار %n"
    export function cursorMoveOrientationOneLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation One
     */
    //% block="حرك المؤشر `Custom.ArrowRightYellow` بمقدار %n"
    export function cursorMoveOrientationOneRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Cursor Move Orientation two
     */
    //% block="حرك المؤشر `Custom.ArrowUpMagenta` بمقدار %n"
    export function cursorMoveOrientationTwoUp(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="حرك المؤشر `Custom.ArrowDownOrange` بمقدار %n"
    export function cursorMoveOrientationTwoDown(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="حرك المؤشر `Custom.ArrowLeftYellow` بمقدار %n"
    export function cursorMoveOrientationTwoLeft(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Cursor Move Orientation two
     */
    //% block="حرك المؤشر `Custom.ArrowRightBlue` بمقدار %n"
    export function cursorMoveOrientationTwoRight(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
     * Move King
     */
    //% block="حرك الكتلة `Custom.KingIcon` باتجاه الملك %direction بمقدار %n"
    export function kingMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.OrangeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.MagentaConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.LightBlueConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.YellowConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
     * Move Queen
     */
    //% block="حرك الكتلة `Custom.QueenIcon` باتجاه الملكة %direction بمقدار %n"
    export function queenMove(direction: Custom, n: number): void {
        let block = Block.WhiteConcrete
        switch (direction) {
            case Custom.ArrowUpOrange:
                block = Block.LimeConcrete
                break;
            case Custom.ArrowDownMagenta:
                block = Block.PinkConcrete
                break;
            case Custom.ArrowLeftBlue:
                block = Block.GrayConcrete
                break;
            case Custom.ArrowRightYellow:
                block = Block.LightGrayConcrete
                break;
        }

        for (let i = 0; i < n; i++) {
            blocks.place(block, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    /**
      * Potion Room Mixing Puzzle Nether Wart
      */
    //% block="اضف الكتلة `Item.NetherWart`"
    export function mixingPuzzleNetherWart(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Phantom Membrane
      */
    //% block="اضف الكتلة `Custom.PhantomMembrane`"
    export function mixingPuzzlePhantomMembrane(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Potion Room Mixing Puzzle Spider Eye
      */
    //% block="اضف الكتلة `Item.FermentedSpiderEye`"
    export function mixingPuzzleSpiderEye(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Break Block
     */
    //% block="اكسر الكتلة"
    export function breakBlock(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
     * Open Trapdoor
     */
    //% block="افتح باب الفخ"
    export function openTrapdoor(): void {
        placeBlockSignal(Block.LimeConcrete)
    }

    /**
      * Greenhouse Flower Planting Red Flower
      */
    //% block="ازرع `Block.Poppy`"
    export function flowerPlantingRedFlower(): void {
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }


    /**
      * Greenhouse Flower Planting Yellow Flower
      */
    //% block="ازرع `Block.YellowFlower`"
    export function flowerPlantingYellowFlower(): void {
        blocks.place(Block.PinkConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Greenhouse Flower Planting Blue Flower
      */
    //% block="ازرع `Block.BlueOrchid`"
    export function flowerPlantingBlueFlower(): void {
        blocks.place(Block.GrayConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Lab Minecart Sorting Zombie
      */
    //% block="افرز `Custom.ZombieFace` بمقدار %n"
    export function minecraftSortingZombie(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Skeleton
      */
    //% block="افرز `Custom.SkeletonFace` بمقدار %n"
    export function minecraftSortingSkeleton(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }
    /**
      * Lab Minecart Sorting Creeper
      */
    //% block="افرز `Custom.CreeperFace` بمقدار %n"
    export function minecraftSortingCreeper(n: number): void {
        for (let i = 0; i < n; i++) {
            blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
            loops.pause(communicationsTimeout)
        }
    }

    //% block="`Custom.PhantomMembrane`"
    export function phantomMembrane(): void { }

    // helper functions

    function placeBlockSignal(block: Block): void {
        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

}