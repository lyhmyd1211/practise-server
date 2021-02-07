// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportQx from '../../../app/controller/qx';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    qx: ExportQx;
  }
}
