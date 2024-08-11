
    export type RemoteKeys = 'remote_two/button';
    type PackageType<T> = T extends 'remote_two/button' ? typeof import('remote_two/button') :any;