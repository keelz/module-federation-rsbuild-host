
    export type RemoteKeys = 'remote_one/button' | 'remote_one/counter-slice';
    type PackageType<T> = T extends 'remote_one/counter-slice' ? typeof import('remote_one/counter-slice') :T extends 'remote_one/button' ? typeof import('remote_one/button') :any;