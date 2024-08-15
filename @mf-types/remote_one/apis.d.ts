
    export type RemoteKeys = 'remote_one/button' | 'remote_one/reducer' | 'remote_one/state';
    type PackageType<T> = T extends 'remote_one/state' ? typeof import('remote_one/state') :T extends 'remote_one/reducer' ? typeof import('remote_one/reducer') :T extends 'remote_one/button' ? typeof import('remote_one/button') :any;