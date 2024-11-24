import { defineAsyncComponent, h, type AsyncComponentOptions } from 'vue';
import { useRoute } from 'vue-router';
import RemoteApp from "./remoteApp";



export function loadRemoteModule(info: {
    loader: () => Promise<any>;
    export?: string;
    asyncComponentOptions?: Omit<AsyncComponentOptions, 'loader'>,
}) {
    return defineAsyncComponent({
        //@ts-ignore
        __APP_VERSION__: '__APP_VERSION__',
        ...info.asyncComponentOptions,
        //@ts-ignore
        loader: async () => {
            console.log(info);
            const route = useRoute();

            let basename = '/';
            const matchPath = route.matched[0]?.path;
            if (matchPath) {
                if (matchPath.endsWith('/:pathMatch(.*)*')) {
                    basename = matchPath.replace('/:pathMatch(.*)*', '');
                } else {
                    basename = route.matched[0].path;
                }
            }

            const exportName = info?.export || 'default';
            console.log(`createRemoteComponent LazyComponent create >>>`, {
                basename,
                info,
            });

            const module: any = await info.loader();
            const moduleName = module && module[Symbol.for('mf_module_id')];
            const exportFn = module[exportName];

            console.log(
              `createRemoteComponent LazyComponent loadRemote info >>>`,
              { name: moduleName, module, exportName, basename, route },
            );

            if (exportName in module && typeof exportFn === 'function') {
                return {
                    render() {
                        return h(RemoteApp, {
                            moduleName,
                            providerInfo: exportFn,
                            basename,
                        });
                    },
                };
            }
            throw new Error('module not found');
        },
    });
}
