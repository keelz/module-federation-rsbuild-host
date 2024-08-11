
    export type RemoteKeys = 'remote_one/button';
    type PackageType<T> = T extends 'remote_one/button' ? typeof import('remote_one/button') :any;