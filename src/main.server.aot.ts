import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import { ServerAppModuleNgFactory } from './ngfactory/app/server-app.module.ngfactory';

import setupServer from './server/server';

setupServer({
  bootstrap: ServerAppModuleNgFactory
});
