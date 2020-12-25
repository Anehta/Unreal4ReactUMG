import * as UE from 'ue'
import {$ref, $unref, $set, argv, requestJitModuleMethod, makeUClass, blueprint, on} from 'puerts';
import {ReactUMG} from './react-umg';
import * as UI from './main-ui';
import * as JitTest from './JitTest'

let world = argv.getByName("World") as UE.World
let testwidget = argv.getByName("Testwidget") as UE.Object
ReactUMG.init(world,testwidget);
UI.Load();
