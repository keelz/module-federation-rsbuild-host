
    export type RemoteKeys = 'remote_two/button' | 'remote_two/store' | 'remote_two/reducer';
    type PackageType<T> = T extends 'remote_two/reducer' ? typeof import('remote_two/reducer') :T extends 'remote_two/store' ? typeof import('remote_two/store') :T extends 'remote_two/button' ? typeof import('remote_two/button') :any;