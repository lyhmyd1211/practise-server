// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportLogin from '../../../app/service/login';
import ExportQx from '../../../app/service/qx';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    login: AutoInstanceType<typeof ExportLogin>;
    qx: AutoInstanceType<typeof ExportQx>;
  }
}
