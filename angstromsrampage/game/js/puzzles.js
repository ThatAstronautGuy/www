/* this file contains all the puzzles used in angst-roms ram page
 * stored as arrays of points and lines */

var puzzles = [
    [   /* box */
        [ // unique points
          [213, 110], [570, 110],
          [213, 430], [570, 430]
        ],
        // lines
        [ [213, 110], [570, 110] ],
        [ [213, 430], [213, 110] ],
        [ [213, 430], [570, 430] ],
        [ [570, 430], [570, 110] ]
    ],
    [   /* house */
        [ // unique points
          [385,  50], [560, 230],
          [213, 230], [213, 550],
          [560, 550] 
        ],
        // lines
        [ [385,  50], [560, 230] ],
        [ [385,  50], [213, 230] ],
        [ [213, 230], [213, 550] ],
        [ [213, 550], [560, 550] ],
        [ [560, 550], [560, 230] ],
        [ [560, 230], [213, 230] ]
    ],
    [   /* five triangles */
        [ // unique points
          [735, 445], [640, 155],
          [535, 445], [440, 155],
          [335, 445], [240, 155], 
          [135, 445] 
        ],
        // lines
        [ [735, 445], [640, 155] ],
        [ [640, 155], [535, 445] ],
        [ [535, 445], [440, 155] ],
        [ [440, 155], [335, 445] ],
        [ [335, 445], [240, 155] ],
        [ [240, 155], [135, 445] ],
        [ [135, 445], [735, 445], "#66cc33" ],
        [ [640, 155], [240, 155], "#66cc33" ]
    ],
    [   /* line */
        [ // unique points
          [100, 400], [700, 400]
        ],
        // lines
        [ [100, 400], [700, 400] ]
    ],
    [   /* two triangles */
        [ // unique points
          [100, 150], [400, 150],
          [550, 450], [250, 450]
        ],
        // lines
        [ [100, 150], [400, 150] ],
        [ [550, 450], [400, 150] ],
        [ [400, 150], [250, 450] ],
        [ [250, 450], [100, 150] ],
        [ [250, 450], [550, 450] ]
    ],
    [   /* three triangles */
        [ // unique points
          [100, 150], [400, 150],
          [700, 150], [550, 450],
          [250, 450] 
        ],
        // lines
        [ [100, 150], [400, 150] ],
        [ [400, 150], [700, 150] ],
        [ [700, 150], [550, 450] ],
        [ [550, 450], [400, 150] ],
        [ [400, 150], [250, 450] ],
        [ [250, 450], [100, 150] ],
        [ [250, 450], [550, 450] ]
    ],
    [   /* housecross */
        [// unique points
          [385,  50], [560, 230],
          [213, 230], [213, 550],
          [560, 550] 
        ],
        // lines
        [ [385,  50], [560, 230] ],
        [ [385,  50], [213, 230] ],
        [ [213, 230], [213, 550] ],
        [ [213, 550], [560, 550] ],
        [ [560, 550], [560, 230] ],
        [ [560, 230], [213, 230] ],
        [ [213, 230], [560, 550] ],
        [ [560, 230], [213, 550] ]
    ],
    [   /* weird-ass triangle mess */
        [ // unique points
          [100, 230], [690, 230],
          [500, 550], [265, 362],
          [525,  50], [375, 230] 
        ],
        // lines
        [ [100, 230], [690, 230], "#66cc33" ],
        [ [690, 230], [500, 550] ],
        [ [500, 550], [265, 362] ],
        [ [265, 362], [100, 230] ],
        [ [525,  50], [500, 550] ],
        [ [500, 550], [375, 230] ],
        [ [265, 362], [375, 230] ],
        [ [375, 230], [525,  50] ]
    ],
    [   /* triforce */
        [ // unique points 
          [150, 100], [280, 306], 
          [403, 500], [523, 306], 
          [650, 100], [403, 100] 
        ],
        // lines
        [ [150, 100], [280, 306] ],
        [ [280, 306], [403, 500] ],
        [ [403, 500], [523, 306] ],
        [ [523, 306], [650, 100] ],
        [ [650, 100], [403, 100] ],
        [ [403, 100], [150, 100] ],
        [ [403, 100], [280, 306] ],
        [ [280, 306], [523, 306] ],
        [ [523, 306], [403, 100] ]
    ],
    [   /* hourglass */
        [ // unique points
          [150, 100], [360, 432],
          [403, 500], [523, 306], 
          [650, 100], [360, 100], 
          [360, 255] 
        ],
        // lines
        [ [360, 255], [150, 100] ],
        [ [360, 255], [360, 432] ],
        [ [360, 255], [523, 306] ],
        [ [360, 255], [360, 100] ],
        [ [150, 100], [360, 432] ],
        [ [360, 432], [403, 500] ],
        [ [403, 500], [523, 306] ],
        [ [523, 306], [360, 432] ],
        [ [523, 306], [650, 100] ],
        [ [650, 100], [360, 100] ],
        [ [360, 100], [150, 100] ]
    ],
    [   /* xii twelve */
        [ // unique points
          [150, 100], [250, 100],
          [250, 500], [450, 300],
          [650, 500], [650, 100],
          [150, 500] 
        ],
        // lines
        [ [150, 100], [150, 500] ],
        [ [150, 100], [250, 100] ],
        [ [250, 100], [450, 300] ],
        [ [250, 100], [250, 500] ],
        [ [250, 100], [650, 100] ],
        [ [150, 500], [250, 500] ],
        [ [250, 500], [650, 500] ],
        [ [250, 500], [450, 300] ],
        [ [650, 500], [450, 300] ],
        [ [650, 100], [450, 300] ]
    ],
    [   /* squid is a meme */
        [ //unique points
          [480, 490], [635, 490], 
          [230, 490], [635, 220], 
          [635, 380], [235, 255], 
          [480, 135] 
        ],
        // lines
        [ [230, 490], [635, 220] ],
        [ [635, 490], [480, 490] ],
        [ [480, 490], [635, 220] ],
        [ [635, 380], [480, 135] ],
        [ [635, 380], [235, 255] ],
        [ [230, 490], [235, 255] ],
        [ [235, 255], [480, 135] ]
    ],
    [   /* 2ndlastpuzzle */
        [ // unique points
          [120, 510], [705, 510],
          [705, 310], [120, 310],
          [415, 310], [415, 140],
          [120, 140] 
        ],
        //lines
        [ [120, 510], [705, 510] ],
        [ [705, 510], [705, 310] ],
        [ [705, 310], [120, 310], "#66cc33" ],
        [ [120, 310], [120, 510] ],
        [ [415, 310], [415, 140] ],
        [ [415, 140], [120, 140] ],
        [ [120, 140], [415, 310] ],
        [ [120, 510], [415, 310] ],
        [ [415, 310], [705, 510] ]
    ],
    [   /* fshljafijadsl */
        [ //unique points
          [100, 500], [700, 500],
          [700, 100], [100, 100],
          [275, 275], [275, 100],
          [100, 275], [700, 275],
          [500, 100], [500, 500],
          [220, 343], [500, 275]
        ],
        //lines
        [ [100, 500], [700, 500], "#66cc33" ],
        [ [100, 500], [100, 100], "#66cc33" ],
        [ [100, 500], [220, 343] ],
        [ [500, 500], [500, 275] ],
        [ [500, 500], [220, 343] ],
        [ [220, 343], [100, 275] ],
        [ [220, 343], [275, 275] ],
        [ [100, 275], [275, 100] ],
        [ [275, 100], [100, 100] ],
        [ [275, 100], [500, 100] ],
        [ [500, 100], [700, 275] ],
        [ [500, 100], [500, 275] ],
        [ [500, 275], [700, 275] ],
        [ [700, 100], [500, 100] ],
        [ [700, 100], [700, 275] ],
        [ [700, 275], [700, 500] ],
        [ [275, 275], [100, 275] ],
        [ [275, 275], [275, 100] ],
        [ [275, 275], [500, 275] ],
    ]
];